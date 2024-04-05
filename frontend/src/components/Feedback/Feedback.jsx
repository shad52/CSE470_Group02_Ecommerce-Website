<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Feedback Survey - Hot Gadgets</title>
<style>
    /* Survey container */
    .survey-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    /* Survey questions */
    .survey-question {
        margin-bottom: 10px;
    }
</style>
</head>
<body>

<div class="survey-container">
    <h2>Feedback Survey</h2>
    <p>We'd love to hear your feedback! Please answer the following questions:</p>
    <form id="feedbackForm">
        <div class="survey-question">
            <label for="rating">How would you rate your experience with our website?</label><br>
            <select id="rating" name="rating">
                <option value="5">Excellent</option>
                <option value="4">Very Good</option>
                <option value="3">Good</option>
                <option value="2">Fair</option>
                <option value="1">Poor</option>
            </select>
        </div>
        <div class="survey-question">
            <label for="comments">Any additional comments or suggestions?</label><br>
            <textarea id="comments" name="comments" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
</div>

<script>
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        var rating = document.getElementById('rating').value;
        var comments = document.getElementById('comments').value.trim();

       
        console.log('Rating:', rating);
        console.log('Comments:', comments);

        document.getElementById('feedbackForm').reset();
        alert('Thank you for your feedback!');
    });
</script>

</body>
</html>
