import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './ChatGPT.css';

const API_KEY = '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';

function ChatGPT() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [chatbotIsTyping, setChatbotIsTyping] = useState(false);
  const chatMessagesRef = useRef(null);

  const sendMessage = async () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        sender: 'user',
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
      setChatbotIsTyping(true);

      const chatbotResponse = await getChatGPTResponse(inputValue);

      const newChatbotMessage = {
        text: chatbotResponse,
        sender: 'chatbot',
      };

      setMessages((prevMessages) => [...prevMessages, newChatbotMessage]);
      setChatbotIsTyping(false);
    }
  };

  const getChatGPTResponse = async (message) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: message,
          max_tokens: 50,
          temperature: 0.7,
          n: 1,
          stop: null,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      if (response.status === 200) {
        const chatbotResponse = response.data.choices[0]?.text.trim() || '';
        return chatbotResponse;
      } else {
        throw new Error('Gagal mendapatkan respons dari ChatGPT');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='enpi-bg' id='enpi'>
      <h1 className='enpi-header'>ENPI</h1>
        <div className="chat-container">
        <div className="chat-messages" ref={chatMessagesRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user-message' : 'chatbot-message'}`}
            >
              <div className="message-content">
                <div className="message-text">{message.text}</div>
              </div>
            </div>
          ))}
          {chatbotIsTyping && (
            <div className="message chatbot-message">
              <div className="message-content">
                <div className="message-text">ENPI sedang mengetik...</div>
              </div>
            </div>
          )}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Ketik pesan..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendMessage}>Kirim</button>
        </div>
      </div>
    </div>
    
  );
}

export default ChatGPT;
