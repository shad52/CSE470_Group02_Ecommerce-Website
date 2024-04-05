<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Support Ticket System - Hot Gadgets</title>
<style>
    /* Ticket container */
    .ticket-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    /* Ticket form */
    .ticket-form input[type="text"],
    .ticket-form textarea {
        width: 100%;
        margin-bottom: 10px;
        padding: 5px;
        box-sizing: border-box;
    }
    /* Ticket list */
    .ticket-list {
        list-style-type: none;
        padding: 0;
    }
    .ticket-item {
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px;
    }
</style>
</head>
<body>

<div class="ticket-container">
    <h2>Support Ticket System</h2>
    <div class="ticket-form">
        <input type="text" id="subject" placeholder="Subject" required><br>
        <textarea id="message" placeholder="Description" rows="4" required></textarea><br>
        <button onclick="submitTicket()">Submit Ticket</button>
    </div>
    <h3>Open Tickets</h3>
    <ul class="ticket-list" id="ticketList">
        <!-- Ticket items will be appended here -->
    </ul>
</div>

<script>
    function submitTicket() {
        var subject = document.getElementById('subject').value.trim();
        var message = document.getElementById('message').value.trim();

        if (subject === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        
        var ticket = {
            id: generateTicketId(),
            subject: subject,
            message: message,
            status: 'Open'
        };
        appendTicket(ticket);
    }

    function appendTicket(ticket) {
        var ticketList = document.getElementById('ticketList');
        var ticketItem = document.createElement('li');
        ticketItem.classList.add('ticket-item');
        ticketItem.innerHTML = '<strong>Subject:</strong> ' + ticket.subject + '<br><strong>Message:</strong> ' + ticket.message + '<br><strong>Status:</strong> ' + ticket.status;
        ticketList.appendChild(ticketItem);
    }

    function generateTicketId() {
        
        return 'TICKET-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
</script>

</body>
</html>
