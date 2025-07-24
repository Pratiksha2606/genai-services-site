import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--background-darker);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: var(--box-shadow);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const DarkModeToggle = () => {
  // Default to dark mode since our theme is dark by default
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Apply the initial theme
    applyTheme(isDarkMode);
    
    // Check if user has a preference stored
    const storedTheme = localStorage.getItem('darkMode');
    if (storedTheme !== null) {
      setIsDarkMode(storedTheme === 'true');
      applyTheme(storedTheme === 'true');
    }
  }, [isDarkMode]); // Added isDarkMode as a dependency

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    applyTheme(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const applyTheme = (dark) => {
    const root = document.documentElement;
    
    if (dark) {
      // Dark theme (default)
      root.style.setProperty('--background-dark', '#0A1A2F');
      root.style.setProperty('--background-darker', '#061325');
      root.style.setProperty('--background-light', '#F8F9FA');
      root.style.setProperty('--text-primary', '#F8F9FA');
      root.style.setProperty('--text-secondary', '#B8C4D0');
      root.style.setProperty('--text-dark', '#0A1A2F');
      root.style.setProperty('--wave-dark-blue', '#061325');
      root.style.setProperty('--wave-medium-blue', '#0A1A2F');
      root.style.setProperty('--wave-light-blue', '#1E3A5F');
    } else {
      // Enhanced Light theme
      root.style.setProperty('--background-dark', '#FFFFFF');
      root.style.setProperty('--background-darker', '#F0F4F8');
      root.style.setProperty('--background-light', '#E9ECEF');
      root.style.setProperty('--text-primary', '#0A1A2F');
      root.style.setProperty('--text-secondary', '#495057');
      root.style.setProperty('--text-dark', '#F8F9FA');
      root.style.setProperty('--wave-dark-blue', '#F0F4F8');
      root.style.setProperty('--wave-medium-blue', '#E1E8EF');
      root.style.setProperty('--wave-light-blue', '#D1DFEC');
      
      // Add box shadow to cards in light mode for better definition
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
        card.style.border = '1px solid rgba(0, 0, 0, 0.05)';
      });
    }
    
    // Apply theme class to body for additional CSS targeting
    if (dark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <ToggleContainer onClick={toggleTheme} aria-label="Toggle dark mode">
      {isDarkMode ? (
        <FaSun color="var(--primary-color)" size={24} />
      ) : (
        <FaMoon color="var(--primary-color)" size={24} />
      )}
    </ToggleContainer>
  );
};

export default DarkModeToggle;