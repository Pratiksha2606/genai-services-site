import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #0066CC;
    --secondary-color: #001F3F;
    --accent-color: #00AEEF;
    --background-light: #FFFFFF;
    --background-dark: #F5F7FA;
    --text-primary: #333333;
    --text-secondary: #666666;
    --text-light: #FFFFFF;
    --success-color: #28A745;
    --warning-color: #FFC107;
    --error-color: #DC3545;
    --border-radius: 4px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
    --max-width: 1200px;
    --header-height: 80px;
    --footer-height: 300px;
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
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--text-primary);
    background-color: var(--background-light);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
  }

  a:hover {
    color: var(--accent-color);
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
    margin-bottom: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--secondary-color);
  }

  h1 {
    font-size: 4.2rem;
  }

  h2 {
    font-size: 3.6rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  section {
    padding: 8rem 0;
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
      padding: 6rem 0;
    }
  }

  @media (max-width: 576px) {
    html {
      font-size: 50%;
    }

    section {
      padding: 4rem 0;
    }
  }
`;

export default GlobalStyles;