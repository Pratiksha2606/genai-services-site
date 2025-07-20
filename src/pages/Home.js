import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaRobot, FaChartLine, FaDatabase, FaCode, FaCheckCircle, FaUser } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">Transforming Business Through AI Innovation</h1>
            <p className="hero-subtitle">
              Leverage the power of artificial intelligence to drive growth, efficiency, and competitive advantage for your organization.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="hero-button-primary">Get Started</Link>
              <Link to="/solutions" className="hero-button-secondary">Explore Solutions</Link>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image" style={{
              background: 'linear-gradient(135deg, #001F3F 0%, #0066CC 70%, #00AEEF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              height: '450px',
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 102, 204, 0.3)'
            }}>
              {/* Digital circuit pattern background */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                opacity: 0.4
              }}></div>
              
              {/* Animated particles */}
              <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.7)',
                boxShadow: '0 0 10px 2px rgba(0, 174, 239, 0.7)'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '30%',
                left: '80%',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.7)',
                boxShadow: '0 0 10px 2px rgba(0, 174, 239, 0.7)'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '70%',
                left: '20%',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.7)',
                boxShadow: '0 0 10px 2px rgba(0, 174, 239, 0.7)'
              }}></div>
              
              {/* Neural network connections */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: 0.2
              }}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20%" y1="20%" x2="80%" y2="30%" stroke="white" strokeWidth="1" />
                  <line x1="80%" y1="30%" x2="40%" y2="70%" stroke="white" strokeWidth="1" />
                  <line x1="40%" y1="70%" x2="70%" y2="80%" stroke="white" strokeWidth="1" />
                  <line x1="20%" y1="20%" x2="40%" y2="70%" stroke="white" strokeWidth="1" />
                  <line x1="20%" y1="20%" x2="70%" y2="80%" stroke="white" strokeWidth="1" />
                  <line x1="80%" y1="30%" x2="70%" y2="80%" stroke="white" strokeWidth="1" />
                </svg>
              </div>
              
              {/* Central AI brain with glow effect */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 174, 239, 0.3) 0%, rgba(0, 174, 239, 0) 70%)',
                  filter: 'blur(10px)',
                  zIndex: 0
                }}></div>
                
                <FaBrain style={{
                  fontSize: '120px',
                  color: 'white',
                  filter: 'drop-shadow(0 0 15px rgba(0, 174, 239, 0.8))',
                  zIndex: 2
                }} />
                
                <div style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '5px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  zIndex: 2
                }}>
                  Next-Gen AI Technology
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Our AI Capabilities</h2>
        <p className="section-subtitle">
          We offer a comprehensive suite of AI solutions designed to address your most complex business challenges.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaBrain />
            </div>
            <h3 className="feature-title">Machine Learning</h3>
            <p className="feature-description">
              Develop intelligent systems that learn from data, identify patterns, and make decisions with minimal human intervention.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaRobot />
            </div>
            <h3 className="feature-title">Computer Vision</h3>
            <p className="feature-description">
              Enable machines to interpret and understand visual information from the world, automating visual inspection and analysis.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3 className="feature-title">Predictive Analytics</h3>
            <p className="feature-description">
              Forecast future outcomes and trends based on historical data, enabling proactive decision-making and strategy.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaDatabase />
            </div>
            <h3 className="feature-title">Big Data Processing</h3>
            <p className="feature-description">
              Process and analyze massive datasets to extract valuable insights and drive data-informed business decisions.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaCode />
            </div>
            <h3 className="feature-title">Natural Language Processing</h3>
            <p className="feature-description">
              Build systems that understand, interpret, and generate human language, enabling advanced communication interfaces.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaRobot />
            </div>
            <h3 className="feature-title">Generative AI</h3>
            <p className="feature-description">
              Create new content, designs, and solutions using AI that can generate text, images, code, and more autonomously.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="solutions-container">
          <div className="solutions-grid">
            <div className="solutions-image-container">
              <div className="solutions-image" style={{
                background: 'linear-gradient(135deg, #001F3F 0%, #0066CC 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                height: '400px',
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  opacity: 0.3
                }}></div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1
                }}>
                  <FaChartLine style={{ fontSize: '80px', color: 'white', marginBottom: '20px' }} />
                  <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    position: 'absolute',
                    zIndex: -1
                  }}></div>
                </div>
              </div>
            </div>
            <div className="solutions-content">
              <h2 className="solutions-title">Enterprise AI Solutions</h2>
              <p className="solutions-description">
                Our enterprise-grade AI solutions are designed to integrate seamlessly with your existing systems and processes, delivering immediate value and long-term competitive advantage.
              </p>
              <ul className="solutions-list">
                <li className="solutions-list-item">
                  <div className="solutions-list-icon">
                    <FaCheckCircle />
                  </div>
                  <p className="solutions-list-text">
                    Custom AI strategy aligned with your business objectives
                  </p>
                </li>
                <li className="solutions-list-item">
                  <div className="solutions-list-icon">
                    <FaCheckCircle />
                  </div>
                  <p className="solutions-list-text">
                    End-to-end implementation from concept to deployment
                  </p>
                </li>
                <li className="solutions-list-item">
                  <div className="solutions-list-icon">
                    <FaCheckCircle />
                  </div>
                  <p className="solutions-list-text">
                    Scalable architecture that grows with your business
                  </p>
                </li>
                <li className="solutions-list-item">
                  <div className="solutions-list-icon">
                    <FaCheckCircle />
                  </div>
                  <p className="solutions-list-text">
                    Continuous monitoring and optimization for peak performance
                  </p>
                </li>
              </ul>
              <Link to="/solutions" className="solutions-button">Explore Our Solutions</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">Client Success Stories</h2>
        <p className="section-subtitle">
          See how our AI solutions have transformed businesses across industries.
        </p>
        <div className="testimonials-container">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-content">
                "The predictive analytics solution implemented by AI Solutions has revolutionized our inventory management, reducing stockouts by 35% and improving customer satisfaction scores."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-image" style={{
                  background: 'linear-gradient(135deg, #0066CC 0%, #00AEEF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px'
                }}>
                  <FaUser style={{ color: 'white', fontSize: '24px' }} />
                </div>
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">Sarah Johnson</h4>
                  <p className="testimonial-author-title">CTO, Global Retail Inc.</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-content">
                "Their computer vision system has transformed our quality control process, identifying defects with 99.8% accuracy and reducing manual inspection costs by over 60%."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-image" style={{
                  background: 'linear-gradient(135deg, #0066CC 0%, #00AEEF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px'
                }}>
                  <FaUser style={{ color: 'white', fontSize: '24px' }} />
                </div>
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">Michael Chen</h4>
                  <p className="testimonial-author-title">Operations Director, Precision Manufacturing</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-content">
                "The NLP solution developed by AI Solutions has enabled us to analyze customer feedback at scale, uncovering insights that have directly influenced our product roadmap."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-image" style={{
                  background: 'linear-gradient(135deg, #0066CC 0%, #00AEEF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px'
                }}>
                  <FaUser style={{ color: 'white', fontSize: '24px' }} />
                </div>
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">Jessica Rodriguez</h4>
                  <p className="testimonial-author-title">VP of Product, SaaS Innovations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Your Business with AI?</h2>
          <p className="cta-description">
            Contact us today to schedule a consultation with our AI experts and discover how our solutions can drive growth and innovation for your organization.
          </p>
          <Link to="/contact" className="cta-button">Get Started</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;