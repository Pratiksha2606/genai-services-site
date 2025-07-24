import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaRobot, FaChartLine, FaDatabase, FaCode, FaCheckCircle, FaUser, FaLaptopCode, FaChartBar, FaCamera, FaThumbsUp, FaFileAlt, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import '../styles/Home.css';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Styled Components
const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding-top: 10rem;
    padding-bottom: 5rem;
  }
`;

const HeroImageContainer = styled.div`
  background: linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-lg);
  height: 450px;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const NeuralNode = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px 2px rgba(255, 120, 70, 0.7);
  animation: pulse 3s infinite alternate;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1.5);
      opacity: 0.3;
    }
  }
`;

const NeuralConnections = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
`;

const CentralIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
`;

const IconGlow = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 120, 70, 0.3) 0%, rgba(255, 120, 70, 0) 70%);
  filter: blur(10px);
  z-index: 0;
`;

const TechLabel = styled.div`
  margin-top: 20px;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 2;
  border-left: 3px solid var(--primary-color);
`;

const FeaturesSection = styled.section`
  padding: 10rem 0;
  background-color: var(--background-darker);
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
`;

const FeatureIcon = styled.div`
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  display: inline-block;
`;

const SolutionsSection = styled.section`
  padding: 10rem 0;
  position: relative;
  overflow: hidden;
`;

const TestimonialsSection = styled.section`
  padding: 10rem 0;
  background-color: var(--background-darker);
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 5rem;
`;

const CTASection = styled.section`
  padding: 10rem 0;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Home = () => {
  return (
    <main>
      {/* Hero Section with Wave Background */}
      <HeroSection>
        <WaveBackground>
          <HeroContent>
            <motion.div
              className="hero-text-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Transforming Business Through <GradientText fontWeight="700">AI Innovation</GradientText>
              </h1>
              <p className="hero-subtitle">
                Leverage AI to drive growth, efficiency, and competitive advantage for your business.
              </p>
              <div className="hero-buttons">
                <Button to="/contact" variant="primary" size="large">Get Started</Button>
                <Button to="/solutions" variant="secondary" size="large">Explore Solutions</Button>
              </div>
            </motion.div>
            
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HeroImageContainer>
                {/* Neural network nodes */}
                {[...Array(6)].map((_, i) => (
                  <NeuralNode
                    key={i}
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      width: `${6 + Math.random() * 8}px`,
                      height: `${6 + Math.random() * 8}px`,
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  />
                ))}
                
                {/* Neural network connections */}
                <NeuralConnections>
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20%" y1="20%" x2="80%" y2="30%" stroke="white" strokeWidth="1" />
                    <line x1="80%" y1="30%" x2="40%" y2="70%" stroke="white" strokeWidth="1" />
                    <line x1="40%" y1="70%" x2="70%" y2="80%" stroke="white" strokeWidth="1" />
                    <line x1="20%" y1="20%" x2="40%" y2="70%" stroke="white" strokeWidth="1" />
                    <line x1="20%" y1="20%" x2="70%" y2="80%" stroke="white" strokeWidth="1" />
                    <line x1="80%" y1="30%" x2="70%" y2="80%" stroke="white" strokeWidth="1" />
                  </svg>
                </NeuralConnections>
                
                {/* Advanced AI visualization with improved lighting */}
                <CentralIcon>
                  {/* Enhanced glow effect without dark strips */}
                  <IconGlow style={{
                    width: '350px',
                    height: '350px',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(0, 200, 83, 0.25) 30%, rgba(0, 149, 255, 0.15) 60%, rgba(255, 120, 70, 0) 80%)',
                    filter: 'blur(15px)'
                  }} />
                  
                  <motion.div
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{ position: 'relative' }}
                  >
                    {/* 3D Holographic AI Visualization */}
                    <div style={{ position: 'relative' }}>
                      {/* Outer ring with improved lighting */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{
                          position: 'absolute',
                          width: '200px',
                          height: '200px',
                          borderRadius: '50%',
                          border: '2px solid rgba(255, 255, 255, 0.7)',
                          boxShadow: '0 0 20px rgba(0, 200, 83, 0.5), inset 0 0 20px rgba(0, 200, 83, 0.3)',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)'
                        }}
                      />
                      
                      {/* Middle ring with improved lighting */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{
                          position: 'absolute',
                          width: '150px',
                          height: '150px',
                          borderRadius: '50%',
                          border: '2px solid rgba(255, 255, 255, 0.7)',
                          boxShadow: '0 0 15px rgba(0, 149, 255, 0.5), inset 0 0 15px rgba(0, 149, 255, 0.3)',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%) rotate(45deg)',
                          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)'
                        }}
                      />
                      
                      {/* Inner ring with improved lighting */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        style={{
                          position: 'absolute',
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          border: '2px solid rgba(255, 255, 255, 0.7)',
                          boxShadow: '0 0 15px rgba(255, 120, 70, 0.5), inset 0 0 15px rgba(255, 120, 70, 0.3)',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%) rotate(30deg)',
                        }}
                      />
                      
                      {/* Core element with improved lighting */}
                      <motion.div
                        animate={{
                          boxShadow: [
                            '0 0 25px rgba(255, 255, 255, 0.9), 0 0 40px rgba(0, 200, 83, 0.8)',
                            '0 0 25px rgba(255, 255, 255, 0.9), 0 0 40px rgba(0, 149, 255, 0.8)',
                            '0 0 25px rgba(255, 255, 255, 0.9), 0 0 40px rgba(255, 120, 70, 0.8)',
                            '0 0 25px rgba(255, 255, 255, 0.9), 0 0 40px rgba(0, 200, 83, 0.8)'
                          ]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{
                          position: 'absolute',
                          width: '70px',
                          height: '70px',
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(230, 230, 230, 0.9) 100%)',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2
                        }}
                      />
                      
                      {/* Pulsing dots with improved lighting */}
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            opacity: [0.4, 1, 0.4],
                            scale: [0.8, 1.2, 0.8]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.25
                          }}
                          style={{
                            position: 'absolute',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: i % 3 === 0 ? 'rgba(0, 200, 83, 0.9)' :
                                       i % 3 === 1 ? 'rgba(0, 149, 255, 0.9)' :
                                       'rgba(255, 120, 70, 0.9)',
                            boxShadow: i % 3 === 0 ? '0 0 10px rgba(0, 200, 83, 0.8)' :
                                       i % 3 === 1 ? '0 0 10px rgba(0, 149, 255, 0.8)' :
                                       '0 0 10px rgba(255, 120, 70, 0.8)',
                            top: `${50 + 45 * Math.sin(i * (Math.PI / 6))}%`,
                            left: `${50 + 45 * Math.cos(i * (Math.PI / 6))}%`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 3
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  
                  <TechLabel style={{
                    background: 'linear-gradient(90deg, rgba(0, 200, 83, 0.2), rgba(255, 255, 255, 0.15), rgba(0, 200, 83, 0.2))',
                    borderLeft: '3px solid var(--primary-color)',
                    borderRight: '3px solid var(--primary-color)',
                    borderRadius: '30px',
                    padding: '12px 25px',
                    boxShadow: '0 0 20px rgba(0, 200, 83, 0.3)'
                  }}>
                    Advanced AI Ecosystem
                  </TechLabel>
                </CentralIcon>
              </HeroImageContainer>
            </motion.div>
          </HeroContent>
        </WaveBackground>
      </HeroSection>

      {/* Features Section with Cards */}
      <FeaturesSection>
        <div className="container">
          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">Our <GradientText>AI Capabilities</GradientText></h2>
              <p className="section-subtitle">
                AI solutions designed to address your complex business challenges.
              </p>
            </motion.div>
          </SectionHeader>
          
          <FeaturesGrid>
            {[
              {
                icon: <FaRobot />,
                title: "Conversational AI",
                description: "Build chatbots and virtual assistants that understand and respond to natural language with human-like interactions."
              },
              {
                icon: <FaCamera />,
                title: "Multimodal AI",
                description: "Combine text and image processing for captioning, visual Q&A, and content understanding."
              },
              {
                icon: <FaChartLine />,
                title: "Predictive Analytics",
                description: "Forecast trends and outcomes using historical data for proactive decision-making."
              },
              {
                icon: <FaThumbsUp />,
                title: "AI-Powered Recommendations",
                description: "Deliver personalized suggestions based on user behavior and preferences."
              },
              {
                icon: <FaFileAlt />,
                title: "Document Intelligence",
                description: "Extract information from documents, classify types, and automate form processing."
              },
              {
                icon: <FaSearch />,
                title: "Search and Retrieval (RAG)",
                description: "Implement advanced search with retrieval-augmented generation for accurate responses."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card hoverable glowing>
                  <FeatureIcon>
                    {feature.icon}
                  </FeatureIcon>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </FeaturesGrid>
        </div>
      </FeaturesSection>

      {/* Solutions Section with Wave Background */}
      <SolutionsSection>
        <WaveBackground>
          <div className="container">
            <div className="solutions-grid">
              <motion.div
                className="solutions-image-container"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card height="400px" glowing>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    position: 'relative'
                  }}>
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        position: 'absolute',
                        width: '250px',
                        height: '250px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 120, 70, 0.3)',
                      }}
                    />
                    <motion.div
                      animate={{
                        rotate: [360, 0],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        position: 'absolute',
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 120, 70, 0.2)',
                      }}
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <FaChartBar style={{ fontSize: '80px', color: 'var(--primary-color)' }} />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                className="solutions-content"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="solutions-title">Enterprise <GradientText>AI Solutions</GradientText></h2>
                <p className="solutions-description">
                  Our AI solutions integrate with your existing systems, delivering immediate value and long-term competitive advantage.
                </p>
                <ul className="solutions-list">
                  {[
                    "Custom AI strategy for your business goals",
                    "End-to-end implementation and deployment",
                    "Scalable architecture for growth",
                    "Continuous monitoring and optimization"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="solutions-list-item"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="solutions-list-icon">
                        <FaCheckCircle />
                      </div>
                      <p className="solutions-list-text">{item}</p>
                    </motion.li>
                  ))}
                </ul>
                <Button to="/solutions" variant="primary" size="large">Explore Our Solutions</Button>
              </motion.div>
            </div>
          </div>
        </WaveBackground>
      </SolutionsSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <div className="container">
          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">Client <GradientText>Success Stories</GradientText></h2>
              <p className="section-subtitle">
                How our AI solutions transform businesses across industries.
              </p>
            </motion.div>
          </SectionHeader>
          
          <TestimonialsGrid>
            {[
              {
                content: "The predictive analytics solution revolutionized our inventory management, reducing stockouts by 35% and improving customer satisfaction.",
                author: "Sarah Johnson",
                title: "CTO, Global Retail Inc."
              },
              {
                content: "Their computer vision system transformed our quality control, identifying defects with 99.8% accuracy and reducing costs by 60%.",
                author: "Michael Chen",
                title: "Operations Director, Precision Manufacturing"
              },
              {
                content: "The NLP solution enabled us to analyze customer feedback at scale, uncovering insights that directly influenced our product roadmap.",
                author: "Jessica Rodriguez",
                title: "VP of Product, SaaS Innovations"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-author-image" style={{
                      background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
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
                      <h4 className="testimonial-author-name">{testimonial.author}</h4>
                      <p className="testimonial-author-title">{testimonial.title}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </TestimonialsGrid>
        </div>
      </TestimonialsSection>

      {/* CTA Section with Wave Background */}
      <CTASection>
        <WaveBackground>
          <CTAContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="cta-title">Ready to <GradientText>Transform</GradientText> Your Business?</h2>
              <p className="cta-description">
                Contact us to schedule a consultation and discover how our AI solutions can drive growth and innovation.
              </p>
              <Button to="/contact" variant="primary" size="large">Get Started</Button>
            </motion.div>
          </CTAContent>
        </WaveBackground>
      </CTASection>
    </main>
  );
};

export default Home;