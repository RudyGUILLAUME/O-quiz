import React, { useState } from 'react';
import { Mail } from 'react-feather';
import { Smile } from 'react-feather';
import { toggleChatPopup, closeChatPopup, sendMessage } from './ChatPopup';

import './Chat.scss';

function Chat() {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [hoveredEmoji, setHoveredEmoji] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [chatMessages, setChatMessages] = useState([
    "Salut, bienvenue dans chat O'Quiz",
  ]);

  const emojis = [
    { native: '😀' },
    { native: '😊' },
    { native: '🎉' },
    { native: '😀' },
    { native: '😊' },
    { native: '🎉' },
    { native: '😀' },
    { native: '😊' },
    { native: '🎉' },
    // Ajoutez d'autres émojis ici
  ];

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (message.trim() !== '') {
        sendMessage();
      }
      event.preventDefault();
    }
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emoji: { native: string }) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
    setSelectedEmoji(emoji.native);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
    setMessage('');
    setSelectedEmoji('');
  };

  return (
    <>
      <button className="round__button" onClick={toggleChatPopup}>
        <Mail size={40} />
      </button>

      <div id="chatPopup" className="chat__popup">
        <div className="chat__header">
          <h3>Chat en direct</h3>
          <button className="close__button" onClick={closeChatPopup}>
            Fermer
          </button>
        </div>
        <div className="chat__container">
          <div className="chat__messages">
            {chatMessages.map((msg, index) => (
              <div className="message" key={index}>
                <p>{msg}</p>
              </div>
            ))}
          </div>
          <div className="user__list">
            <h4>Utilisateurs en ligne :</h4>
            <ul>
              <li>bullseye0_0</li>
              <li>CenShadow</li>
              <li>xX-DarkSasuke-Xx</li>
              <li>lordpasteque</li>
              <li>C2</li>
              <li>izu_riya</li>
            </ul>
          </div>
        </div>
        <div className="chat__input">
          <input
            type="text"
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          <button
            className={`emoji__button ${showEmojiPicker ? 'active' : ''}`}
            onClick={toggleEmojiPicker}
          >
            <Smile />
          </button>
          <button onClick={handleSendMessage}>Envoyer</button>
          {showEmojiPicker && (
            <div className="fake__emoji__picker">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => handleEmojiClick(emoji)}
                  className={selectedEmoji === emoji.native ? 'selected' : ''}
                >
                  {emoji.native}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Chat;
