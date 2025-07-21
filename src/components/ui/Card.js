import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: var(--background-darker);
  border-radius: var(--border-radius);
  padding: ${props => props.padding || '2rem'};
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || '100%'};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  ${props => props.hoverable && `
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    }
  `}
  
  ${props => props.glowing && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      box-shadow: 0 0 20px 5px var(--primary-color);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }
    
    &:hover::after {
      opacity: 0.5;
    }
  `}
`;

const Card = ({ 
  children, 
  padding, 
  height, 
  width, 
  hoverable = true, 
  glowing = false,
  className,
  ...props 
}) => {
  return (
    <CardContainer 
      padding={padding} 
      height={height} 
      width={width} 
      hoverable={hoverable}
      glowing={glowing}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </CardContainer>
  );
};

export default Card;