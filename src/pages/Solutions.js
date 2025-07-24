import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaFileAlt, FaMicrophone, FaProjectDiagram, FaUserCheck, FaComments, FaSearch, FaXRay, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import '../styles/Solutions.css';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Styled Components
const HeroSection = styled.section`
  min-height: 50vh;
  position: relative;
  display: flex;
  align-items: center;
  padding: 8rem 0;
`;

const HeroContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ContentSection = styled.section`
  padding: 10rem 0;
  background-color: var(--background-dark);
`;

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SearchInput = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  
  input {
    width: 100%;
    padding: 1.2rem 1.5rem;
    padding-right: 4rem;
    background: var(--background-darker);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    color: var(--text-primary);
    font-size: 1.6rem;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }
  
  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 4rem;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 1.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 6rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SolutionImage = styled.div`
  height: 220px;
  background: ${props => props.imageUrl ? `url(${props.imageUrl})` : 'linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%)'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  transition: all 0.5s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
    transition: all 0.5s ease;
  }
  
  ${Card}:hover & {
    transform: scale(1.05);
    
    &::before {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%);
    }
  }
`;

const SolutionIcon = styled.div`
  font-size: 5rem;
  color: var(--primary-color);
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }
`;

const SolutionContent = styled.div`
  padding: 2.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    background-color: rgba(var(--primary-color-rgb), 0.05);
  }
  
  .solution-title {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    transition: all 0.3s ease;
    
    ${Card}:hover & {
      color: var(--primary-color);
    }
  }
  
  .solution-description {
    font-size: 1.6rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    flex-grow: 1;
  }
  
  .solution-link {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--primary-color);
    margin-top: auto;
    transition: all 0.3s ease;
    
    .solution-link-icon {
      margin-left: 0.8rem;
      transition: transform 0.3s ease;
    }
    
    ${Card}:hover & .solution-link-icon {
      transform: translateX(5px);
    }
  }
`;

const HealthcareSection = styled.section`
  padding: 10rem 0;
  background-color: var(--background-darker);
`;

const HealthcareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const HealthcareImage = styled.div`
  height: 250px;
  background: linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
  }
`;

const HealthcareIcon = styled.div`
  font-size: 6rem;
  color: var(--primary-color);
  position: relative;
  z-index: 1;
`;

const HealthcareContent = styled.div`
  padding: 3rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.2rem;
`;

const FeatureIcon = styled.div`
  color: var(--primary-color);
  margin-right: 1rem;
  font-size: 1.6rem;
  min-width: 1.6rem;
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

const Solutions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="solutions-page">
      {/* Hero Section with Wave Background */}
      <HeroSection>
        <WaveBackground>
          <HeroContainer>
            <div className="solutions-hero-grid">
              <motion.div
                className="solutions-hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="solutions-hero-title">
                  AI Solutions for <GradientText fontWeight="700">Healthcare</GradientText>
                </h1>
                <p className="solutions-hero-description">
                  AI solutions that improve patient outcomes, enhance efficiency, and accelerate medical research.
                </p>
                <div className="solutions-hero-stats">
                  <motion.div
                    className="hero-stat"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="hero-stat-value">93%</div>
                    <div className="hero-stat-label">Accuracy</div>
                  </motion.div>
                  <motion.div
                    className="hero-stat"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="hero-stat-value">40%</div>
                    <div className="hero-stat-label">Time Saved</div>
                  </motion.div>
                  <motion.div
                    className="hero-stat"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="hero-stat-value">5x</div>
                    <div className="hero-stat-label">ROI</div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="solutions-hero-visual"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="solutions-visual-container">
                  <div className="solutions-nodes">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="solution-node"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="solutions-connections">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <line x1="30%" y1="30%" x2="70%" y2="20%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <line x1="70%" y1="20%" x2="80%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <line x1="80%" y1="50%" x2="60%" y2="80%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <line x1="60%" y1="80%" x2="20%" y2="70%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <line x1="20%" y1="70%" x2="30%" y2="30%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <line x1="30%" y1="30%" x2="80%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="solutions-icons">
                    <motion.div
                      className="solution-icon-wrapper"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      style={{ top: '30%', left: '30%' }}
                    >
                      <div className="solution-icon">
                        <FaFileAlt />
                      </div>
                    </motion.div>
                    <motion.div
                      className="solution-icon-wrapper"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.5
                      }}
                      style={{ top: '20%', left: '70%' }}
                    >
                      <div className="solution-icon">
                        <FaMicrophone />
                      </div>
                    </motion.div>
                    <motion.div
                      className="solution-icon-wrapper"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                      }}
                      style={{ top: '50%', left: '80%' }}
                    >
                      <div className="solution-icon">
                        <FaProjectDiagram />
                      </div>
                    </motion.div>
                    <motion.div
                      className="solution-icon-wrapper"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1.5
                      }}
                      style={{ top: '80%', left: '60%' }}
                    >
                      <div className="solution-icon">
                        <FaUserCheck />
                      </div>
                    </motion.div>
                    <motion.div
                      className="solution-icon-wrapper"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 2
                      }}
                      style={{ top: '70%', left: '20%' }}
                    >
                      <div className="solution-icon">
                        <FaComments />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </HeroContainer>
        </WaveBackground>
      </HeroSection>

      {/* Main Content */}
      <ContentSection>
        <Container>
          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="solutions-intro-title">
                Revolutionizing Healthcare with <GradientText>AI</GradientText>
              </h2>
              <p className="solutions-intro-description">
                Solutions designed to address healthcare challenges from diagnosis to patient care and administrative efficiency.
              </p>
            </motion.div>
          </SectionHeader>

          <SearchContainer>
            <SearchInput>
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button>
                <FaSearch />
              </button>
            </SearchInput>
          </SearchContainer>
          
          <SolutionsGrid>
            {[
              {
                icon: <FaFileAlt />,
                title: "Prior Authorization",
                description: "Streamline prior authorization with AI automation, reducing burden and accelerating care delivery.",
                link: "/solutions/prior-authorization",
                imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                icon: <FaMicrophone />,
                title: "Voice Assistant",
                description: "Voice assistants that help providers document encounters, access information, and perform tasks hands-free.",
                link: "/solutions/voice-assistant",
                imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                icon: <FaProjectDiagram />,
                title: "Spectra",
                description: "Analytics platform integrating healthcare data to provide insights and decision support.",
                link: "/solutions/spectra",
                imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                icon: <FaUserCheck />,
                title: "PCOV",
                description: "System that measures and analyzes treatment effectiveness based on real-world patient outcomes.",
                link: "/solutions/pcov",
                imageUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                icon: <FaComments />,
                title: "Conversational Assistant",
                description: "Conversational interfaces enabling natural language interactions for patients and providers.",
                link: "/solutions/conversational-assistant",
                imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            ]
            .filter(solution =>
              searchQuery === '' ||
              solution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              solution.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card
                  as={motion.div}
                  whileHover={{
                    y: -10,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                    transition: { duration: 0.3 }
                  }}
                  hoverable
                >
                  <SolutionImage imageUrl={solution.imageUrl}>
                    <div className="solution-image-overlay">
                      <div className="solution-image-particles">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="solution-particle"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 3}s`,
                              width: `${5 + Math.random() * 5}px`,
                              height: `${5 + Math.random() * 5}px`
                            }}
                          />
                        ))}
                      </div>
                      <SolutionIcon>
                        {solution.icon}
                      </SolutionIcon>
                    </div>
                  </SolutionImage>
                  <SolutionContent>
                    <div className="solution-badge">AI-Powered</div>
                    <h3 className="solution-title">{solution.title}</h3>
                    <p className="solution-description">
                      {solution.description}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Link to={solution.link} className="solution-link">
                        Learn More <FaArrowRight className="solution-link-icon" />
                      </Link>
                      <Link
                        to={`${solution.link}/demo`}
                        style={{
                          padding: '0.8rem 1.5rem',
                          background: 'var(--primary-color)',
                          color: 'white',
                          borderRadius: '4px',
                          fontSize: '1.4rem',
                          fontWeight: '500',
                          display: 'inline-block',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'var(--primary-color-dark)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'var(--primary-color)'}
                      >
                        Show Demo
                      </Link>
                    </div>
                  </SolutionContent>
                </Card>
              </motion.div>
            ))}
          </SolutionsGrid>
        </Container>
      </ContentSection>

      {/* Healthcare Use Cases Section */}
      <HealthcareSection>
        <Container>
          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="healthcare-title">
                Featured Healthcare <GradientText>AI Use Cases</GradientText>
              </h2>
              <p className="healthcare-description">
                Explore how our AI implementations transform patient care and clinical outcomes.
              </p>
            </motion.div>
          </SectionHeader>

          <HealthcareGrid>
            {[
              {
                icon: <FaXRay />,
                title: "AI-Powered Radiology Assistant",
                description: "AI assistant helping radiologists detect abnormalities with greater accuracy and efficiency.",
                features: [
                  "99.2% accuracy in detecting lung nodules",
                  "43% reduction in reading time",
                  "Integrated with major PACS systems"
                ],
                link: "/solutions/medical-imaging/case-study"
              },
              {
                icon: <FaBrain />,
                title: "Early Disease Detection Platform",
                description: "Platform identifying patients at risk of chronic conditions for early intervention.",
                features: [
                  "85% accuracy in predicting diabetes onset",
                  "$3.2M annual savings for a 500-bed hospital",
                  "Seamless EHR integration"
                ],
                link: "/solutions/predictive-diagnostics/case-study"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card
                  as={motion.div}
                  whileHover={{
                    y: -10,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                    transition: { duration: 0.3 }
                  }}
                  hoverable
                >
                  <HealthcareImage>
                    <HealthcareIcon>
                      {useCase.icon}
                    </HealthcareIcon>
                  </HealthcareImage>
                  <HealthcareContent>
                    <h3 className="healthcare-card-title">{useCase.title}</h3>
                    <p className="healthcare-card-description">
                      {useCase.description}
                    </p>
                    <div className="healthcare-features">
                      {useCase.features.map((feature, i) => (
                        <FeatureItem
                          key={i}
                          as={motion.div}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <FeatureIcon>
                            <FaCheckCircle />
                          </FeatureIcon>
                          <p className="healthcare-feature-text">{feature}</p>
                        </FeatureItem>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                      <Link to={useCase.link} className="healthcare-link">
                        View Case Study <FaArrowRight className="healthcare-link-icon" />
                      </Link>
                      <Link
                        to={`${useCase.link.replace('case-study', 'demo')}`}
                        style={{
                          padding: '0.8rem 1.5rem',
                          background: 'var(--primary-color)',
                          color: 'white',
                          borderRadius: '4px',
                          fontSize: '1.4rem',
                          fontWeight: '500',
                          display: 'inline-block',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'var(--primary-color-dark)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'var(--primary-color)'}
                      >
                        Show Demo
                      </Link>
                    </div>
                  </HealthcareContent>
                </Card>
              </motion.div>
            ))}
          </HealthcareGrid>
        </Container>
      </HealthcareSection>

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
              <h2 className="cta-title">
                Ready to <GradientText>Transform</GradientText> Healthcare with AI?
              </h2>
              <p className="cta-description">
                Contact us today to schedule a consultation with our healthcare AI experts and discover how our solutions can improve patient outcomes and operational efficiency.
              </p>
              <Button to="/contact" variant="primary" size="large">Get Started</Button>
            </motion.div>
          </CTAContent>
        </WaveBackground>
      </CTASection>
    </div>
  );
};

export default Solutions;