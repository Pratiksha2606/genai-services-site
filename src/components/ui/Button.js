import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ButtonBase = styled(motion.button)`
  display: inline-block;
  padding: ${props => props.size === 'small' ? '0.8rem 1.5rem' : props.size === 'large' ? '1.2rem 2.5rem' : '1rem 2rem'};
  border-radius: var(--border-radius);
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  font-size: ${props => props.size === 'small' ? '1.4rem' : props.size === 'large' ? '1.8rem' : '1.6rem'};
  letter-spacing: 0.5px;
  
  ${props => props.variant === 'primary' && `
    background-color: var(--primary-color);
    color: var(--text-dark);
    
    &:hover {
      background-color: var(--primary-color);
      opacity: 0.9;
      transform: translateY(-2px);
    }
  `}
  
  ${props => props.variant === 'secondary' && `
    background-color: transparent;
    color: var(--text-primary);
    border: 2px solid var(--primary-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: var(--text-dark);
      transform: translateY(-2px);
    }
  `}
  
  ${props => props.variant === 'accent' && `
    background-color: var(--accent-color);
    color: var(--text-dark);
    
    &:hover {
      background-color: var(--accent-color);
      opacity: 0.9;
      transform: translateY(-2px);
    }
  `}
  
  ${props => props.variant === 'text' && `
    background-color: transparent;
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    
    &:hover {
      background-color: rgba(255, 120, 70, 0.1);
      transform: translateY(-2px);
    }
  `}
  
  ${props => props.fullWidth && `
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const LinkButton = styled(ButtonBase).attrs({ as: Link })`
  text-decoration: none;
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  to, 
  href,
  fullWidth = false,
  disabled = false,
  onClick,
  className,
  ...props 
}) => {
  // Animation variants
  const buttonVariants = {
    hover: { 
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: { 
      y: 0,
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  // If it's a link to an internal route
  if (to) {
    return (
      <LinkButton
        to={to}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={className}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        {...props}
      >
        {children}
      </LinkButton>
    );
  }
  
  // If it's a link to an external URL
  if (href) {
    return (
      <ButtonBase
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={className}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        {...props}
      >
        {children}
      </ButtonBase>
    );
  }
  
  // Regular button
  return (
    <ButtonBase
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      className={className}
      whileHover={!disabled && "hover"}
      whileTap={!disabled && "tap"}
      variants={buttonVariants}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;