import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* New color theme inspired by the Neutrino image */
    --primary-color: #FF7846; /* Coral/Orange accent */
    --primary-color-rgb: 255, 120, 70; /* RGB values for primary color */
    --primary-color-dark: #E56335; /* Darker version of primary color for hover states */
    --secondary-color: #0A1A2F; /* Deep blue */
    --accent-color: #4ECDC4; /* Teal accent */
    
    /* Background colors */
    --background-dark: #0A1A2F; /* Deep blue background */
    --background-darker: #061325; /* Darker blue for contrast */
    --background-light: #F8F9FA; /* Light background for contrast */
    
    /* Text colors */
    --text-primary: #F8F9FA; /* Light text for dark backgrounds */
    --text-secondary: #B8C4D0; /* Muted light text */
    --text-dark: #0A1A2F; /* Dark text for light backgrounds */
    --text-accent: #FF7846; /* Accent text color */
    
    /* Utility colors */
    --success-color: #28A745;
    --warning-color: #FFC107;
    --error-color: #DC3545;
    
    /* UI elements */
    --border-radius: 8px;
    --border-radius-lg: 12px;
    --box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    --transition: all 0.3s ease;
    
    /* Layout */
    --max-width: 1200px;
    --header-height: 80px;
    --footer-height: 300px;
    
    /* Wave pattern colors */
    --wave-dark-blue: #061325;
    --wave-medium-blue: #0A1A2F;
    --wave-light-blue: #1E3A5F;
    --wave-coral: #FF7846;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--text-primary);
    background-color: var(--background-dark);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; /* Prevent horizontal scroll from wave animations */
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
    position: relative;
  }

  a:hover {
    color: var(--accent-color);
  }
  
  /* Animated underline effect for links */
  a.animated-link {
    position: relative;
  }
  
  a.animated-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  a.animated-link:hover::after {
    width: 100%;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    transition: var(--transition);
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-primary);
  }
  
  h1 {
    font-size: 3.6rem;
  }
  
  h2 {
    font-size: 3rem;
  }
  
  h3 {
    font-size: 2.4rem;
  }
  
  h4 {
    font-size: 2rem;
  }
  
  h5 {
    font-size: 1.8rem;
  }
  
  h6 {
    font-size: 1.6rem;
  }

  p {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
  }
  
  section {
    padding: 6rem 0;
  }

  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 55%;
    }
  
    section {
      padding: 4rem 0;
    }
  }
  
  @media (max-width: 576px) {
    html {
      font-size: 50%;
    }
  
    section {
      padding: 3rem 0;
    }
  }

  /* Wave background animation for sections with wave-bg class */
  .wave-bg {
    position: relative;
    overflow: hidden;
  }

  .wave-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 50%, var(--wave-light-blue) 100%);
    z-index: -2;
  }

  .wave-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23FF7846' fill-opacity='0.2' d='M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 50% 100%;
    background-repeat: repeat-x;
    z-index: -1;
    opacity: 0.3;
    animation: wave-animation 15s linear infinite;
  }

  @keyframes wave-animation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* Glowing effect for elements with glow class */
  .glow {
    position: relative;
  }

  .glow::after {
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

  .glow:hover::after {
    opacity: 0.5;
  }

  /* Card styles */
  .card {
    background: var(--background-darker);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  /* Button styles */
  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    font-size: 1.6rem;
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: var(--text-dark);
  }

  .btn-primary:hover {
    background-color: var(--primary-color);
    opacity: 0.9;
    transform: translateY(-2px);
  }

  .btn-secondary {
    background-color: transparent;
    color: var(--text-primary);
    border: 2px solid var(--primary-color);
  }

  .btn-secondary:hover {
    background-color: var(--primary-color);
    color: var(--text-dark);
    transform: translateY(-2px);
  }

  /* Dark mode toggle */
  .dark-mode-toggle {
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
  }

  .dark-mode-toggle svg {
    color: var(--text-primary);
    font-size: 2.4rem;
  }

  /* Gradient text */
  .gradient-text {
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  
  /* Light theme specific styles */
  body.light-theme {
    /* Adjust card styles for light theme */
    .card {
      background: var(--background-darker);
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
    
    /* Adjust button styles for light theme */
    .btn-secondary {
      color: var(--text-primary);
      border: 2px solid var(--primary-color);
    }
    
    /* Adjust wave background for light theme */
    .wave-bg::before {
      background: linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 50%, var(--wave-light-blue) 100%);
      opacity: 0.7;
    }
    
    /* Improve contrast for text on light backgrounds */
    h1, h2, h3, h4, h5, h6 {
      color: var(--text-primary);
    }
    
    /* Adjust form elements for light theme */
    input, select, textarea {
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: white;
      color: var(--text-primary);
    }
    
    /* Adjust links for light theme */
    a {
      color: var(--primary-color);
    }
    
    a:hover {
      color: var(--primary-color-dark);
    }
  }
  
  /* Dark theme specific styles */
  body.dark-theme {
    /* These are already the default styles, but explicitly defining them for clarity */
    .card {
      background: var(--background-darker);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    input, select, textarea {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: var(--background-dark);
      color: var(--text-primary);
    }
  }
`;

export default GlobalStyles;