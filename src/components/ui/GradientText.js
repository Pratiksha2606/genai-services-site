import React from 'react';
import styled from 'styled-components';

const GradientSpan = styled.span`
  background: ${props => props.gradient || 'linear-gradient(90deg, var(--primary-color), var(--accent-color))'};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-weight: ${props => props.fontWeight || 'inherit'};
  font-size: ${props => props.fontSize || 'inherit'};
`;

const GradientText = ({ 
  children, 
  gradient, 
  fontWeight, 
  fontSize, 
  className 
}) => {
  return (
    <GradientSpan 
      gradient={gradient} 
      fontWeight={fontWeight} 
      fontSize={fontSize} 
      className={className}
    >
      {children}
    </GradientSpan>
  );
};

export default GradientText;