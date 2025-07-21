import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import '../../styles/ChatBot.css';

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 90px; /* Position to the left of the DarkModeToggle */
  z-index: 1000;
`;

const ChatBotButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  color: var(--text-dark);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
  position: relative;
  z-index: 998; /* Lower z-index than DarkModeToggle */
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  }
`;

const ChatWindow = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0; /* Keep right aligned with the button */
  z-index: 998; /* Lower z-index than DarkModeToggle */
  width: 350px;
  height: 500px;
  background-color: var(--background-dark);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: var(--transition);
  
  @media (max-width: 576px) {
    width: 300px;
    height: 450px;
  }
`;

const ChatHeader = styled.div`
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  h3 {
    margin: 0;
    font-size: 1.8rem;
  }
  
  svg {
    font-size: 2rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ChatInputContainer = styled.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 1.2rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: var(--background-darker);
  color: var(--text-primary);
  font-size: 1.4rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--text-dark);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    opacity: 0.9;
  }
`;

const Message = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  max-width: 80%;
  
  ${props => props.isUser ? `
    align-self: flex-end;
    flex-direction: row-reverse;
  ` : `
    align-self: flex-start;
  `}
`;

const MessageAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.isUser ? 'var(--primary-color)' : 'var(--accent-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  font-size: 1.6rem;
  flex-shrink: 0;
`;

const MessageContent = styled.div`
  background-color: ${props => props.isUser ? 'var(--primary-color)' : 'var(--background-darker)'};
  color: ${props => props.isUser ? 'var(--text-dark)' : 'var(--text-primary)'};
  padding: 1.2rem;
  border-radius: var(--border-radius);
  font-size: 1.4rem;
  line-height: 1.5;
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Neutrino AI Assistant. How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const newMessages = [...messages, { text: inputValue, isUser: true }];
    setMessages(newMessages);
    setInputValue('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I'm here to help! Could you provide more details?",
        "That's an interesting question. Let me find the answer for you.",
        "I understand your request. Our team can assist you with that.",
        "Thanks for reaching out! I'll connect you with the right department.",
        "I'm processing your request. Is there anything else you'd like to know?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages([...newMessages, { text: randomResponse, isUser: false }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ChatBotContainer>
      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <ChatTitle>
              <FaRobot />
              <h3>Neutrino AI Assistant</h3>
            </ChatTitle>
            <CloseButton onClick={toggleChat}>
              <FaTimes />
            </CloseButton>
          </ChatHeader>
          
          <ChatMessages>
            {messages.map((message, index) => (
              <Message key={index} isUser={message.isUser}>
                <MessageAvatar isUser={message.isUser}>
                  {message.isUser ? <FaUser /> : <FaRobot />}
                </MessageAvatar>
                <MessageContent isUser={message.isUser}>
                  {message.text}
                </MessageContent>
              </Message>
            ))}
            <div ref={messagesEndRef} />
          </ChatMessages>
          
          <ChatInputContainer>
            <ChatInput
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <SendButton onClick={handleSendMessage}>
              <FaPaperPlane />
            </SendButton>
          </ChatInputContainer>
        </ChatWindow>
      )}
      
      <ChatBotButton onClick={toggleChat}>
        {isOpen ? <FaTimes /> : <FaRobot />}
      </ChatBotButton>
    </ChatBotContainer>
  );
};

export default ChatBot;