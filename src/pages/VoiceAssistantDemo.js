import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaMicrophone, FaStop, FaRobot, FaUserMd } from 'react-icons/fa';
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

const VoiceAssistantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const VoiceButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.active
    ? 'linear-gradient(135deg, var(--accent-color) 0%, #ff2b2b 100%)'
    : 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%)'};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--text-dark);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active
    ? '0 0 20px rgba(255, 76, 76, 0.5), 0 6px 15px rgba(0, 0, 0, 0.3)'
    : '0 0 20px rgba(0, 200, 83, 0.3), 0 6px 15px rgba(0, 0, 0, 0.3)'};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${props => props.active
      ? 'radial-gradient(circle at center, rgba(255, 76, 76, 0.4) 0%, transparent 60%)'
      : 'radial-gradient(circle at center, rgba(0, 200, 83, 0.4) 0%, transparent 60%)'};
    opacity: ${props => props.active ? '1' : '0'};
    transform: scale(${props => props.active ? '1' : '0'});
    transition: transform 0.5s ease, opacity 0.5s ease;
    pointer-events: none;
    animation: ${props => props.active ? 'pulse 2s infinite' : 'none'};
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0.8);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.8);
      opacity: 0.7;
    }
  }
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 15px ${props => props.active ? 'rgba(255, 76, 76, 0.4)' : 'rgba(0, 200, 83, 0.2)'}, 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const VoiceWaveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  height: 100px;
  width: 300px;
  margin: 2rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 200, 83, 0.2) 50%,
      transparent 100%
    );
    transform: translateY(-50%);
    z-index: 0;
  }
`;

const VoiceWave = styled.div`
  width: 6px;
  background: ${props => props.active
    ? 'linear-gradient(to top, var(--primary-color), var(--wave-medium-blue))'
    : 'var(--primary-color)'};
  border-radius: 3px;
  height: ${props => props.height || '10px'};
  animation: ${props => props.active ? 'waveAnimation 0.5s infinite alternate' : 'none'};
  box-shadow: ${props => props.active ? '0 0 8px rgba(0, 200, 83, 0.5)' : 'none'};
  transition: background 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: radial-gradient(circle at center, rgba(0, 200, 83, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    opacity: ${props => props.active ? '1' : '0'};
    transition: opacity 0.3s ease;
  }
  
  @keyframes waveAnimation {
    from {
      height: 10px;
      opacity: 0.7;
    }
    to {
      height: ${props => props.maxHeight || '60px'};
      opacity: 1;
    }
  }
`;

const ConversationContainer = styled.div`
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  padding: 2rem;
  background: var(--background-dark);
  border-radius: 12px;
  margin-top: 3rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: radial-gradient(
      circle at center,
      rgba(0, 149, 255, 0.03) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 200, 83, 0.2);
    border-radius: 4px;
  }
`;

const Message = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: ${props => props.isUser ? 'row-reverse' : 'row'};
  align-items: flex-start;
  gap: 1.5rem;
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
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const MessageAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.isUser
    ? 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%)'
    : 'linear-gradient(135deg, var(--accent-color) 0%, #ff2b2b 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  font-size: 1.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border: 2px solid ${props => props.isUser ? 'rgba(0, 200, 83, 0.3)' : 'rgba(255, 76, 76, 0.3)'};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.isUser ? 'var(--primary-color)' : 'var(--accent-color)'};
    box-shadow: 0 0 8px ${props => props.isUser ? 'rgba(0, 200, 83, 0.5)' : 'rgba(255, 76, 76, 0.5)'};
    opacity: ${props => props.isActive ? '1' : '0'};
    transition: opacity 0.3s ease;
  }
`;

const MessageContent = styled.div`
  background: ${props => props.isUser
    ? 'linear-gradient(135deg, rgba(0, 200, 83, 0.15) 0%, rgba(0, 200, 83, 0.05) 100%)'
    : 'linear-gradient(135deg, rgba(255, 76, 76, 0.15) 0%, rgba(255, 76, 76, 0.05) 100%)'};
  padding: 1.5rem 2rem;
  border-radius: 12px;
  max-width: 70%;
  font-size: 1.5rem;
  color: var(--text-primary);
  border-left: ${props => props.isUser ? '3px solid var(--primary-color)' : '3px solid var(--accent-color)'};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  line-height: 1.6;
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
      ? 'border-left: 10px solid rgba(0, 200, 83, 0.15)'
      : 'border-right: 10px solid rgba(255, 76, 76, 0.15)'};
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.7rem;
  text-decoration: none;
  margin-bottom: 2.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  transition: all 0.3s ease;
  background: rgba(0, 200, 83, 0.05);
  border: 1px solid rgba(0, 200, 83, 0.1);
  
  svg {
    margin-right: 0.8rem;
    font-size: 1.8rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: rgba(0, 200, 83, 0.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    
    svg {
      transform: translateX(-3px);
    }
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

const VoiceAssistantDemo = () => {
  const [isListening, setIsListening] = useState(false);
  const [conversation, setConversation] = useState([
    { sender: 'assistant', content: 'Hello! I\'m your healthcare voice assistant. How can I help you today?' }
  ]);

  const handleVoiceButtonClick = () => {
    if (!isListening) {
      setIsListening(true);
      
      // Simulate user speaking
      setTimeout(() => {
        addMessage("User", "Schedule a follow-up appointment with Dr. Johnson for next week");
        
        // Simulate assistant response
        setTimeout(() => {
          addMessage("Assistant", "I found Dr. Johnson's availability for next week. She has openings on Tuesday at 10:00 AM and Thursday at 2:30 PM. Which would you prefer?");
          
          // Simulate user response
          setTimeout(() => {
            addMessage("User", "Thursday at 2:30 PM works better for me");
            
            // Simulate final assistant response
            setTimeout(() => {
              addMessage("Assistant", "Great! I've scheduled your follow-up appointment with Dr. Johnson for Thursday, July 29th at 2:30 PM. You'll receive a confirmation email shortly. Is there anything else you need help with?");
              setIsListening(false);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 2000);
    } else {
      setIsListening(false);
    }
  };
  
  const addMessage = (sender, content) => {
    setConversation(prev => [...prev, { sender, content }]);
  };

  return (
    <div className="use-case-page demo-page">
      {/* Hero Section with Wave Background */}
      <section className="use-case-hero">
        <WaveBackground>
          <div className="use-case-hero-container">
            <h1 className="use-case-hero-title">
              <GradientText fontWeight="700">Voice Assistant</GradientText> Demo
            </h1>
            <p className="use-case-hero-description">
              Experience our AI-powered Voice Assistant solution in action
            </p>
            <div className="demo-hero-badges">
              <div className="demo-badge">
                <span className="demo-badge-number">98%</span>
                <span className="demo-badge-text">Accuracy Rate</span>
              </div>
              <div className="demo-badge">
                <span className="demo-badge-number">24/7</span>
                <span className="demo-badge-text">Availability</span>
              </div>
              <div className="demo-badge">
                <span className="demo-badge-number">5+</span>
                <span className="demo-badge-text">Languages</span>
              </div>
            </div>
          </div>
        </WaveBackground>
      </section>

      {/* Demo Content */}
      <DemoContainer>
        <BackLink to="/solutions/voice-assistant">
          <FaArrowLeft /> Back to Voice Assistant
        </BackLink>
        
        <DemoSection>
          <div className="demo-header">
            <h3>Healthcare Voice Assistant</h3>
            <div className="demo-status">
              <div className="demo-status-dot"></div>
              <span>AI System Active</span>
            </div>
          </div>
          <VoiceAssistantContainer>
            <VoiceButton 
              active={isListening}
              onClick={handleVoiceButtonClick}
            >
              {isListening ? <FaStop /> : <FaMicrophone />}
            </VoiceButton>
            
            <VoiceWaveContainer>
              {[...Array(7)].map((_, index) => (
                <VoiceWave 
                  key={index}
                  active={isListening}
                  height={`${10 + Math.random() * 5}px`}
                  maxHeight={`${30 + Math.random() * 20}px`}
                />
              ))}
            </VoiceWaveContainer>
            
            <div className="voice-status">
              {isListening ? (
                <div className="listening-status">
                  <div className="listening-indicator"></div>
                  <span>Listening...</span>
                </div>
              ) : (
                <div className="idle-status">
                  <span>Click the microphone to start</span>
                </div>
              )}
            </div>
            
            <ConversationContainer>
              {conversation.map((message, index) => (
                <Message key={index} isUser={message.sender === 'User'}>
                  <MessageAvatar isUser={message.sender === 'User'}>
                    {message.sender === 'User' ? <FaUserMd /> : <FaRobot />}
                  </MessageAvatar>
                  <MessageContent isUser={message.sender === 'User'}>
                    {message.content}
                  </MessageContent>
                </Message>
              ))}
            </ConversationContainer>
          </VoiceAssistantContainer>
        </DemoSection>
      </DemoContainer>
    </div>
  );
};

export default VoiceAssistantDemo;