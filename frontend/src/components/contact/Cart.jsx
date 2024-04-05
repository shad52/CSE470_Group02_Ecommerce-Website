<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact Us - Hot Gadgets</title>
<style>
    .error { color: red; }
</style>
</head>
<body>

<h2>Contact Us</h2>
<p>Please fill in the form below to contact us.</p>

<form id="contactForm" action="#" method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required><br>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br>
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" required></textarea><br>
    <input type="submit" value="Submit">
</form>

<div id="confirmation"></div>

<script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Form validation
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();
        var isValid = true;
        var errorMessages = [];

        if (name === '') {
            errorMessages.push('Name is required');
            isValid = false;
        }

        if (email === '') {
            errorMessages.push('Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            errorMessages.push('Please enter a valid email address');
            isValid = false;
        }

        if (message === '') {
            errorMessages.push('Message is required');
            isValid = false;
        }

        if (isValid) {
           
            document.getElementById('contactForm').reset();
            document.getElementById('confirmation').innerHTML = 'Your message has been sent. We will get back to you soon.';
        } else {
            document.getElementById('confirmation').innerHTML = '<div class="error">' + errorMessages.join('<br>') + '</div>';
        }
    });

    function isValidEmail(email) {
       
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
</script>

</body>
</html>
