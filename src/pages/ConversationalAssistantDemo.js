import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaComments, FaRobot, FaUser, FaPaperPlane, FaInfoCircle, FaRegSmile } from 'react-icons/fa';
import '../styles/UseCase.css';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';

// Demo component
const DemoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
`;

const DemoSection = styled.div`
  margin: 3rem 0;
  padding: 3rem;
  background: var(--background-darker);
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  background: var(--background-dark);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
`;

const ChatHeader = styled.div`
  padding: 1.5rem;
  background: var(--background-darker);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ChatTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const ChatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  font-size: 1.8rem;
`;

const ChatMessages = styled.div`
  flex-grow: 1;
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Message = styled.div`
  display: flex;
  gap: 1.8rem;
  max-width: 75%;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  flex-direction: ${props => props.isUser ? 'row-reverse' : 'row'};
  animation: ${props => props.isUser ? 'slideInRight 0.3s ease' : 'slideInLeft 0.3s ease'};
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const MessageAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.isUser ? 'var(--accent-color)' : 'var(--primary-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  font-size: 1.8rem;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border: 2px solid ${props => props.isUser ? 'rgba(255, 76, 76, 0.3)' : 'rgba(0, 200, 83, 0.3)'};
`;

const MessageContent = styled.div`
  background: ${props => props.isUser
    ? 'linear-gradient(135deg, rgba(255, 76, 76, 0.15) 0%, rgba(255, 76, 76, 0.05) 100%)'
    : 'linear-gradient(135deg, rgba(0, 200, 83, 0.15) 0%, rgba(0, 200, 83, 0.05) 100%)'};
  padding: 1.8rem;
  border-radius: 12px;
  font-size: 1.6rem;
  color: var(--text-primary);
  border-left: ${props => props.isUser ? '3px solid var(--accent-color)' : '3px solid var(--primary-color)'};
  line-height: 1.7;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    ${props => props.isUser ? 'right: -10px' : 'left: -10px'};
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    ${props => props.isUser
      ? 'border-left: 10px solid rgba(255, 76, 76, 0.15)'
      : 'border-right: 10px solid rgba(0, 200, 83, 0.15)'};
  }
`;

const ChatInputContainer = styled.div`
  padding: 2rem;
  background: var(--background-darker);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 1.5rem;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
`;

const ChatInput = styled.input`
  flex-grow: 1;
  padding: 1.5rem 2rem;
  background: var(--background-dark);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: var(--text-primary);
  font-size: 1.6rem;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 200, 83, 0.1), inset 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
  }
`;

const SendButton = styled.button`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
  color: var(--text-dark);
  border: none;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 200, 83, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 200, 83, 0.4);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(0, 200, 83, 0.3);
  }
  
  &:disabled {
    background: var(--background-dark);
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
  
  svg {
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
  }
`;

const QuickReplies = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const QuickReply = styled.button`
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, rgba(0, 200, 83, 0.1) 0%, rgba(0, 200, 83, 0.05) 100%);
  color: var(--text-secondary);
  border: 1px solid rgba(0, 200, 83, 0.2);
  border-radius: 20px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: all 0.5s;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(0, 200, 83, 0.2) 0%, rgba(0, 200, 83, 0.1) 100%);
    color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const InfoBox = styled.div`
  background: linear-gradient(135deg, rgba(0, 149, 255, 0.1) 0%, rgba(0, 149, 255, 0.05) 100%);
  border-left: 3px solid var(--wave-medium-blue);
  border-radius: 8px;
  padding: 1.8rem;
  margin: 2rem 0;
  font-size: 1.4rem;
  color: var(--text-secondary);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  line-height: 1.6;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(0, 149, 255, 0.03) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    animation: info-shine 3s infinite;
  }
  
  svg {
    color: var(--wave-medium-blue);
    font-size: 2.2rem;
    flex-shrink: 0;
    margin-top: 0.2rem;
    filter: drop-shadow(0 2px 4px rgba(0, 149, 255, 0.2));
  }
  
  @keyframes info-shine {
    0% {
      transform: translateX(-100%);
    }
    50%, 100% {
      transform: translateX(100%);
    }
  }
}
`;


const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.6rem;
  text-decoration: none;
  margin-bottom: 2rem;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

const ConversationalAssistantDemo = () => {
  const [messages, setMessages] = useState([
    { sender: 'assistant', content: 'Hello! I\'m your healthcare conversational assistant. How can I help you today?' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = { sender: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate assistant response
    setTimeout(() => {
      let response;
      
      if (inputValue.toLowerCase().includes('appointment') || inputValue.toLowerCase().includes('schedule')) {
        response = { 
          sender: 'assistant', 
          content: 'I can help you schedule an appointment. What type of doctor would you like to see?',
          quickReplies: ['Primary Care', 'Specialist', 'Urgent Care', 'Annual Check-up']
        };
      } else if (inputValue.toLowerCase().includes('medication') || inputValue.toLowerCase().includes('prescription')) {
        response = { 
          sender: 'assistant', 
          content: 'I can help with medication information or prescription refills. What medication are you inquiring about?'
        };
      } else if (inputValue.toLowerCase().includes('test') || inputValue.toLowerCase().includes('result')) {
        response = { 
          sender: 'assistant', 
          content: 'I can help you access your test results. Please note that for security reasons, I\'ll need to verify your identity first. Would you like me to proceed with identity verification?',
          quickReplies: ['Yes, verify my identity', 'No, I\'ll check later']
        };
      } else if (inputValue.toLowerCase().includes('bill') || inputValue.toLowerCase().includes('payment')) {
        response = { 
          sender: 'assistant', 
          content: 'I can help you with billing inquiries or payment options. What specific information are you looking for?',
          quickReplies: ['View recent bills', 'Payment options', 'Insurance coverage', 'Financial assistance']
        };
      } else {
        response = { 
          sender: 'assistant', 
          content: 'I\'m here to help with appointments, medication information, test results, billing inquiries, and general healthcare questions. How can I assist you today?',
          quickReplies: ['Schedule appointment', 'Medication information', 'View test results', 'Billing inquiry']
        };
      }
      
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    // Add user message
    const userMessage = { sender: 'user', content: reply };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate assistant response
    setTimeout(() => {
      let response;
      
      if (reply === 'Primary Care' || reply === 'Specialist' || reply === 'Urgent Care' || reply === 'Annual Check-up') {
        response = { 
          sender: 'assistant', 
          content: `I can help you schedule a ${reply.toLowerCase()} appointment. When would you prefer to have this appointment?`,
          quickReplies: ['Today', 'This week', 'Next week', 'Next month']
        };
      } else if (reply === 'Schedule appointment') {
        response = { 
          sender: 'assistant', 
          content: 'I can help you schedule an appointment. What type of doctor would you like to see?',
          quickReplies: ['Primary Care', 'Specialist', 'Urgent Care', 'Annual Check-up']
        };
      } else if (reply === 'Medication information') {
        response = { 
          sender: 'assistant', 
          content: 'I can help with medication information. What medication are you inquiring about?'
        };
      } else if (reply === 'View test results') {
        response = { 
          sender: 'assistant', 
          content: 'I can help you access your test results. Please note that for security reasons, I\'ll need to verify your identity first. Would you like me to proceed with identity verification?',
          quickReplies: ['Yes, verify my identity', 'No, I\'ll check later']
        };
      } else if (reply === 'Billing inquiry') {
        response = { 
          sender: 'assistant', 
          content: 'I can help you with billing inquiries. What specific information are you looking for?',
          quickReplies: ['View recent bills', 'Payment options', 'Insurance coverage', 'Financial assistance']
        };
      } else {
        response = { 
          sender: 'assistant', 
          content: `I've noted your preference for ${reply.toLowerCase()}. Is there anything else you'd like to know or discuss?`,
          quickReplies: ['Schedule appointment', 'Medication information', 'View test results', 'Billing inquiry']
        };
      }
      
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="use-case-page demo-page">
      {/* Hero Section with Wave Background */}
      <section className="use-case-hero">
        <WaveBackground>
          <div className="use-case-hero-container">
            <h1 className="use-case-hero-title">
              <GradientText fontWeight="700">Conversational Assistant</GradientText> Demo
            </h1>
            <p className="use-case-hero-description">
              Experience our AI-powered conversational interface in action
            </p>
            <div className="demo-hero-badges">
              <div className="demo-badge">
                <span className="demo-badge-number">95%</span>
                <span className="demo-badge-text">Accuracy Rate</span>
              </div>
              <div className="demo-badge">
                <span className="demo-badge-number">24/7</span>
                <span className="demo-badge-text">Availability</span>
              </div>
              <div className="demo-badge">
                <span className="demo-badge-number">90%</span>
                <span className="demo-badge-text">User Satisfaction</span>
              </div>
            </div>
          </div>
        </WaveBackground>
      </section>

      {/* Demo Content */}
      <DemoContainer>
        <BackLink to="/solutions/conversational-assistant">
          <FaArrowLeft /> Back to Conversational Assistant
        </BackLink>
        
        <InfoBox>
          <FaInfoCircle />
          <div>
            <strong style={{ color: 'var(--text-primary)', fontSize: '1.6rem', display: 'block', marginBottom: '0.8rem' }}>
              Interactive Healthcare Assistant
            </strong>
            This demo showcases our healthcare conversational assistant. You can interact with it by typing messages or clicking on suggested quick replies. The assistant can help with appointments, medication information, test results, and billing inquiries.
          </div>
        </InfoBox>
        
        <DemoSection>
          <div className="demo-header">
            <h3>Interactive Conversational Assistant</h3>
            <div className="demo-status">
              <div className="demo-status-dot"></div>
              <span>AI System Active</span>
            </div>
          </div>
          <ChatContainer>
            <ChatHeader>
              <ChatIcon>
                <FaComments />
              </ChatIcon>
              <ChatTitle>Healthcare Assistant</ChatTitle>
            </ChatHeader>
            
            <ChatMessages>
              {messages.map((message, index) => (
                <div key={index}>
                  <Message isUser={message.sender === 'user'}>
                    <MessageAvatar isUser={message.sender === 'user'}>
                      {message.sender === 'user' ? <FaUser /> : <FaRobot />}
                    </MessageAvatar>
                    <MessageContent isUser={message.sender === 'user'}>
                      {message.content}
                    </MessageContent>
                  </Message>
                  
                  {message.quickReplies && (
                    <QuickReplies>
                      {message.quickReplies.map((reply, replyIndex) => (
                        <QuickReply
                          key={replyIndex}
                          onClick={() => handleQuickReply(reply)}
                          style={{ animationDelay: `${replyIndex * 0.1}s` }}
                          className="animated-button"
                        >
                          {reply}
                        </QuickReply>
                      ))}
                    </QuickReplies>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <Message>
                  <MessageAvatar>
                    <FaRobot />
                  </MessageAvatar>
                  <MessageContent>
                    <div className="typing-indicator">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-text">AI is thinking</div>
                    </div>
                  </MessageContent>
                </Message>
              )}
            </ChatMessages>
            
            <ChatInputContainer>
              <ChatInput 
                type="text" 
                placeholder="Type your message here..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isTyping}
              />
              <SendButton
                className="animated-button"
                onClick={handleSendMessage}
                disabled={inputValue.trim() === '' || isTyping}
              >
                <FaPaperPlane />
              </SendButton>
            </ChatInputContainer>
          </ChatContainer>
        </DemoSection>
      </DemoContainer>
    </div>
  );
};

export default ConversationalAssistantDemo;