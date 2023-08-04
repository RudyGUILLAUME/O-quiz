export function toggleChatPopup() {
  const chatPopup = document.getElementById('chatPopup')!;
  if (chatPopup.style.display === 'none' || chatPopup.style.display === '') {
    chatPopup.style.display = 'block';
  } else {
    chatPopup.style.display = 'none';
  }
}

export function closeChatPopup() {
  const chatPopup = document.getElementById('chatPopup')!;
  chatPopup.style.display = 'none';
}

export function sendMessage() {
  const input = document.querySelector<HTMLInputElement>(
    "#chatPopup input[type='text']"
  )!;
  const message = input.value;

  if (message.trim() !== '') {
    const chatMessages = document.querySelector<HTMLElement>(
      '#chatPopup .chat__messages'
    )!;
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(newMessage);

    input.value = '';

    // Faire défiler automatiquement vers le bas
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Gestionnaire d'événements pour la touche "Entrée"
document.addEventListener('keypress', function (event) {
  const input = document.querySelector<HTMLInputElement>(
    "#chatPopup input[type='text']"
  )!;
  const message = input.value;

  if (event.key === 'Enter' && message.trim() !== '') {
    sendMessage();
  }
});
