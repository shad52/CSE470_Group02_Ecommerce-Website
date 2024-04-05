<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Live Chat Support - Hot Gadgets</title>
<style>
    /* Chat container */
    .chat-container {
        border: 1px solid #ccc;
        max-width: 400px;
        margin: 0 auto;
        padding: 10px;
    }
    /* Chat messages */
    .chat-messages {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .chat-message {
        margin-bottom: 10px;
    }
    .chat-message.from-user {
        text-align: right;
    }
</style>
</head>
<body>

<div class="chat-container">
    <ul class="chat-messages" id="chatMessages">
        <li class="chat-message">Welcome to Hot Gadgets! How can we assist you today?</li>
    </ul>
    <input type="text" id="chatInput" placeholder="Type your message...">
    <button onclick="sendMessage()">Send</button>
</div>

<script>
    function sendMessage() {
        var messageInput = document.getElementById('chatInput');
        var message = messageInput.value.trim();

        if (message !== '') {
            appendMessage(message, true);
            messageInput.value = '';
            
            setTimeout(function() {
                receiveMessage("Thank you for contacting us! How may I assist you?");
            }, 1000);
        }
    }

    function receiveMessage(message) {
        appendMessage(message, false);
    }

    function appendMessage(message, fromUser) {
        var chatMessages = document.getElementById('chatMessages');
        var messageElement = document.createElement('li');
        messageElement.textContent = message;
        messageElement.classList.add('chat-message');
        if (fromUser) {
            messageElement.classList.add('from-user');
        }
        chatMessages.appendChild(messageElement);
       
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
</script>

</body>
</html>
