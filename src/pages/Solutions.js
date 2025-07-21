import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaBrain, FaXRay, FaDna, FaHospital, FaUserMd, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
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
  height: 200px;
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
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
  }
`;

const SolutionIcon = styled.div`
  font-size: 5rem;
  color: var(--primary-color);
  position: relative;
  z-index: 1;
`;

const SolutionContent = styled.div`
  padding: 2.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
  return (
    <div className="solutions-page">
      {/* Hero Section with Wave Background */}
      <HeroSection>
        <WaveBackground>
          <HeroContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="solutions-hero-title">
                AI Solutions for <GradientText fontWeight="700">Healthcare</GradientText>
              </h1>
              <p className="solutions-hero-description">
                Transforming healthcare delivery with cutting-edge artificial intelligence solutions that improve patient outcomes, enhance operational efficiency, and accelerate medical research.
              </p>
            </motion.div>
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
                Our AI solutions for healthcare are designed to address the most pressing challenges in the industry, from diagnosis and treatment to patient care and administrative efficiency.
              </p>
            </motion.div>
          </SectionHeader>

          <SolutionsGrid>
            {[
              {
                icon: <FaXRay />,
                title: "Medical Imaging Analysis",
                description: "AI-powered analysis of medical images for faster, more accurate diagnosis of conditions across radiology, pathology, and more.",
                link: "/solutions/medical-imaging"
              },
              {
                icon: <FaBrain />,
                title: "Predictive Diagnostics",
                description: "Advanced algorithms that predict disease onset and progression, enabling earlier intervention and personalized treatment plans.",
                link: "/solutions/predictive-diagnostics"
              },
              {
                icon: <FaDna />,
                title: "Genomic Analysis",
                description: "AI tools for analyzing genomic data to identify disease markers, predict drug responses, and enable precision medicine.",
                link: "/solutions/genomic-analysis"
              },
              {
                icon: <FaHeartbeat />,
                title: "Remote Patient Monitoring",
                description: "Intelligent systems for continuous monitoring of patient vital signs and health metrics, with real-time alerts for critical changes.",
                link: "/solutions/patient-monitoring"
              },
              {
                icon: <FaHospital />,
                title: "Hospital Operations Optimization",
                description: "AI solutions for optimizing hospital workflows, resource allocation, and capacity management to improve efficiency and reduce costs.",
                link: "/solutions/hospital-operations"
              },
              {
                icon: <FaUserMd />,
                title: "Clinical Decision Support",
                description: "AI-powered systems that provide evidence-based recommendations to clinicians at the point of care, improving decision-making.",
                link: "/solutions/clinical-decision-support"
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card as={Link} to={solution.link} hoverable>
                  <SolutionImage>
                    <SolutionIcon>
                      {solution.icon}
                    </SolutionIcon>
                  </SolutionImage>
                  <SolutionContent>
                    <h3 className="solution-title">{solution.title}</h3>
                    <p className="solution-description">
                      {solution.description}
                    </p>
                    <div className="solution-link">
                      Learn More <FaArrowRight className="solution-link-icon" />
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
                Explore our most impactful healthcare AI implementations and discover how they're transforming patient care and clinical outcomes.
              </p>
            </motion.div>
          </SectionHeader>

          <HealthcareGrid>
            {[
              {
                icon: <FaXRay />,
                title: "AI-Powered Radiology Assistant",
                description: "Our AI-powered radiology assistant helps radiologists detect abnormalities in medical images with greater accuracy and efficiency.",
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
                description: "Our predictive analytics platform identifies patients at risk of developing chronic conditions, enabling early intervention.",
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
                <Card as={Link} to={useCase.link} hoverable>
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
                        <FeatureItem key={i}>
                          <FeatureIcon>
                            <FaCheckCircle />
                          </FeatureIcon>
                          <p className="healthcare-feature-text">{feature}</p>
                        </FeatureItem>
                      ))}
                    </div>
                    <div className="healthcare-link">
                      View Case Study <FaArrowRight className="healthcare-link-icon" />
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