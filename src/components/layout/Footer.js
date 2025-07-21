import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo-container">
              <div className="footer-logo-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="50" height="50">
                  <path d="M0 0 L200 200 L0 400 Z" fill="#FF7843"/>
                  <path d="M200 200 L400 0 L400 400 Z" fill="#909090"/>
                </svg>
              </div>
              <h2 className="footer-logo">Neutrino Tech Systems</h2>
            </div>
            <p className="footer-text">
              Transforming businesses through innovative AI solutions. We help organizations leverage the power of artificial intelligence to drive growth, efficiency, and competitive advantage.
            </p>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Solutions</h3>
            <ul className="footer-link-list">
              <li className="footer-link-item">
                <Link to="/solutions/machine-learning" className="footer-link">Machine Learning</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/solutions/computer-vision" className="footer-link">Computer Vision</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/solutions/natural-language-processing" className="footer-link">Natural Language Processing</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/solutions/predictive-analytics" className="footer-link">Predictive Analytics</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/solutions/generative-ai" className="footer-link">Generative AI</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-link-list">
              <li className="footer-link-item">
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/leadership" className="footer-link">Leadership</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/careers" className="footer-link">Careers</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/news" className="footer-link">News & Insights</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/partners" className="footer-link">Partners</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <p className="contact-text">123 AI Boulevard, Tech City, TC 10101</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <p className="contact-text">+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <p className="contact-text">info@aisolutions.com</p>
            </div>
            <form className="newsletter-form">
              <input type="email" className="newsletter-input" placeholder="Subscribe to our newsletter" />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>

        <hr className="divider" />

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Neutrino Tech Systems. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/terms-of-service" className="footer-bottom-link">Terms of Service</Link>
            <Link to="/cookie-policy" className="footer-bottom-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;