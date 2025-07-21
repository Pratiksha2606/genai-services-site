import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-wrapper">
        <div className="logo-container">
          <Link to="/" className="logo">
            <div className="logo-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="30" height="30">
                <path d="M0 0 L200 200 L0 400 Z" fill="#FF7843"/>
                <path d="M200 200 L400 0 L400 400 Z" fill="#909090"/>
              </svg>
            </div>
            <span className="logo-text">Neutrino Tech Systems</span>
          </Link>
        </div>

        <div className="mobile-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/solutions"
              className={`nav-link ${location.pathname === '/solutions' ? 'active' : ''}`}
            >
              Solutions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/case-studies"
              className={`nav-link ${location.pathname === '/case-studies' ? 'active' : ''}`}
            >
              Case Studies
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/insights"
              className={`nav-link ${location.pathname === '/insights' ? 'active' : ''}`}
            >
              Insights
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-btn">
          <Link to="/contact" className="nav-btn-link">Get Started</Link>
        </div>
      </div>

      {isOpen && (
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <div className="mobile-nav-item">
            <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </div>
          <div className="mobile-nav-item">
            <Link to="/services" className={`mobile-nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
              Services
            </Link>
          </div>
          <div className="mobile-nav-item">
            <Link to="/solutions" className={`mobile-nav-link ${location.pathname === '/solutions' ? 'active' : ''}`}>
              Solutions
            </Link>
          </div>
          <div className="mobile-nav-item">
            <Link to="/case-studies" className={`mobile-nav-link ${location.pathname === '/case-studies' ? 'active' : ''}`}>
              Case Studies
            </Link>
          </div>
          <div className="mobile-nav-item">
            <Link to="/insights" className={`mobile-nav-link ${location.pathname === '/insights' ? 'active' : ''}`}>
              Insights
            </Link>
          </div>
          <div className="mobile-nav-item">
            <Link to="/about" className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </div>
          <div className="mobile-nav-item">
            <Link to="/contact" className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </div>
          <div className="mobile-nav-btn">
            <Link to="/contact" className="mobile-nav-btn-link">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;