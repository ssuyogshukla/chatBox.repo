function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
      const chatBox = document.getElementById('chatBox');
      const newMessage = document.createElement('div');
      newMessage.classList.add('chat-message');
      newMessage.textContent = userInput;
      chatBox.appendChild(newMessage);
      document.getElementById('userInput').value = '';
    }
  }
