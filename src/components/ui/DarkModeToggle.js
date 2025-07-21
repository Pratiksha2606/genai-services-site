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
  }, []);

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
      root.style.setProperty('--text-primary', '#F8F9FA');
      root.style.setProperty('--text-secondary', '#B8C4D0');
    } else {
      // Light theme
      root.style.setProperty('--background-dark', '#F8F9FA');
      root.style.setProperty('--background-darker', '#E9ECEF');
      root.style.setProperty('--text-primary', '#0A1A2F');
      root.style.setProperty('--text-secondary', '#495057');
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