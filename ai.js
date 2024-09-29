const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to append messages to chat window
function appendMessage(content, type = 'bot') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${type}-message`);
    messageDiv.innerHTML = `<p>${content}</p>`;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to send the user's message
function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, 'user');
        userInput.value = ''; // Clear input field

        // Simulating a bot response (replace with real API call)
        setTimeout(() => {
            appendMessage("I'm an AI chatbot. How can I help you?");
        }, 1000);
    }
}



// Function to send the user's message
function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, 'user');
        userInput.value = ''; // Clear input field

        // Simulating a bot response (replace with real API call)
        setTimeout(() => {
            appendMessage("For any complain you can visit our support center https://the-webatix.mini.site/?path=%2F");
        }, 1000);
    }
}



// Event listener for button click
sendBtn.addEventListener('click', sendMessage);

// Event listener for pressing Enter key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});



