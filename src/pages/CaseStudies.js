import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaHospital, FaChartLine, FaRobot, FaDatabase, FaArrowRight, FaChartBar, FaChartPie, FaChartArea, FaCheck, FaUserMd, FaFlask, FaClock, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import '../styles/CaseStudies.css';

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

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5rem;
`;

const CaseStudyCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  padding: 0;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ResultsVisual = styled.div`
  height: 100%;
  min-height: 300px;
  background: linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  
  @media (max-width: 992px) {
    min-height: 250px;
  }
`;

const ResultsTitle = styled.h4`
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
  z-index: 2;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const CircleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  z-index: 2;
`;

const CircleWrapper = styled(motion.div)`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CircleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
`;

const CircleProgress = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${props => `conic-gradient(
    var(--primary-color) ${props.percentage}%, 
    transparent ${props.percentage}% 100%
  )`};
  clip-path: circle(50% at 50% 50%);
  transform: rotate(-90deg);
`;

const CircleContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const CircleValue = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }
`;

const CircleLabel = styled.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  max-width: 90px;
  line-height: 1.2;
`;

const CircleIcon = styled.div`
  position: absolute;
  top: -25px;
  font-size: 1.8rem;
  color: var(--primary-color);
  background-color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CaseStudyContent = styled.div`
  padding: 3rem;
`;

const CaseStudyTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const CaseStudyDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const ResultsList = styled.div`
  margin-bottom: 2rem;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  color: var(--text-primary);
  
  &:before {
    content: '•';
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 1rem;
  }
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

const CaseStudies = () => {
  return (
    <div className="case-studies-page">
      {/* Hero Section with Wave Background */}
      <HeroSection>
        <WaveBackground>
          <HeroContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="case-studies-hero-title">
                Our <GradientText fontWeight="700">Case Studies</GradientText>
              </h1>
              <p className="case-studies-hero-description">
                Explore how our solutions have helped organizations across industries achieve their goals and overcome challenges.
              </p>
            </motion.div>
          </HeroContainer>
        </WaveBackground>
      </HeroSection>

      {/* Case Studies Section */}
      <ContentSection>
        <Container>
          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">
                Success <GradientText>Stories</GradientText>
              </h2>
              <p className="section-subtitle">
                Real-world examples of how our solutions have delivered measurable results for our clients.
              </p>
            </motion.div>
          </SectionHeader>

          <CaseStudiesGrid>
            {[
              {
                icon: <FaHospital />,
                title: "AI-Powered Patient Flow Optimization for Major Hospital Network",
                description: "A leading hospital network was struggling with patient wait times and resource allocation. We implemented an AI-driven patient flow optimization system that transformed their operations.",
                results: [
                  "Reduced average wait times by 37%",
                  "Improved resource utilization by 28%",
                  "Increased patient satisfaction scores by 42%",
                  "Generated $3.2M in annual cost savings"
                ],
                visualData: [
                  { icon: <FaClock />, value: <><FaArrowDown /> Significant</>, label: "Wait Time Reduction", percentage: 37 },
                  { icon: <FaChartBar />, value: <><FaArrowUp /> Improved</>, label: "Resource Utilization", percentage: 28 },
                  { icon: <FaUserMd />, value: <><FaArrowUp /> Excellent</>, label: "Patient Satisfaction", percentage: 42 },
                  { icon: <FaChartLine />, value: <><FaArrowUp /> Millions</>, label: "Annual Savings", percentage: 80 }
                ]
              },
              {
                icon: <FaRobot />,
                title: "Automated Medical Image Analysis for Radiology Practice",
                description: "A large radiology practice needed to improve efficiency and accuracy in analyzing medical images. Our AI-powered image analysis solution provided the breakthrough they needed.",
                results: [
                  "99.2% accuracy in detecting abnormalities",
                  "43% reduction in reading time for radiologists",
                  "62% faster diagnosis for critical cases",
                  "Seamless integration with existing PACS systems"
                ],
                visualData: [
                  { icon: <FaCheck />, value: <><FaCheck /> Outstanding</>, label: "Detection Accuracy", percentage: 99 },
                  { icon: <FaClock />, value: <><FaArrowDown /> Reduced</>, label: "Reading Time", percentage: 43 },
                  { icon: <FaChartArea />, value: <><FaArrowUp /> Faster</>, label: "Diagnosis Speed", percentage: 62 },
                  { icon: <FaChartPie />, value: <><FaCheck /> Complete</>, label: "PACS Integration", percentage: 100 }
                ]
              },
              {
                icon: <FaDatabase />,
                title: "Predictive Analytics for Pharmaceutical Research",
                description: "A pharmaceutical company wanted to accelerate their drug discovery process. We developed a predictive analytics platform that revolutionized their research capabilities.",
                results: [
                  "Reduced drug candidate identification time by 65%",
                  "Improved success rate of clinical trials by 28%",
                  "Saved an estimated $45M in research costs",
                  "Accelerated time-to-market by 14 months"
                ],
                visualData: [
                  { icon: <FaClock />, value: <><FaArrowDown /> Dramatic</>, label: "Time Reduction", percentage: 65 },
                  { icon: <FaChartLine />, value: <><FaArrowUp /> Enhanced</>, label: "Success Rate", percentage: 28 },
                  { icon: <FaChartBar />, value: <><FaArrowDown /> Substantial</>, label: "Cost Savings", percentage: 90 },
                  { icon: <FaFlask />, value: <><FaArrowUp /> Accelerated</>, label: "Market Entry", percentage: 70 }
                ]
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <CaseStudyCard 
                  hoverable
                  as={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <ResultsVisual>
                    <ResultsTitle>Key Results</ResultsTitle>
                    <CircleContainer>
                      {caseStudy.visualData.map((data, i) => (
                        <CircleWrapper 
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1 + i * 0.1,
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                          }}
                        >
                          <CircleBackground />
                          <CircleProgress 
                            percentage={data.percentage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: index * 0.1 + i * 0.1 + 0.3 }}
                          />
                          <CircleIcon>{data.icon}</CircleIcon>
                          <CircleContent>
                            <CircleValue>{data.value}</CircleValue>
                            <CircleLabel>{data.label}</CircleLabel>
                          </CircleContent>
                        </CircleWrapper>
                      ))}
                    </CircleContainer>
                  </ResultsVisual>
                  <CaseStudyContent>
                    <CaseStudyTitle>{caseStudy.title}</CaseStudyTitle>
                    <CaseStudyDescription>{caseStudy.description}</CaseStudyDescription>
                    <h4 className="results-title">Results:</h4>
                    <ResultsList>
                      {caseStudy.results.map((result, i) => (
                        <ResultItem key={i}>{result}</ResultItem>
                      ))}
                    </ResultsList>
                    <Button variant="primary">
                      Read Full Case Study <FaArrowRight style={{ marginLeft: '1rem' }} />
                    </Button>
                  </CaseStudyContent>
                </CaseStudyCard>
              </motion.div>
            ))}
          </CaseStudiesGrid>
        </Container>
      </ContentSection>

      {/* CTA Section */}
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
                Ready to Achieve <GradientText>Similar Results</GradientText>?
              </h2>
              <p className="cta-description">
                Contact us today to discuss how our solutions can help your organization overcome challenges and achieve your goals.
              </p>
              <Button to="/contact" variant="primary" size="large">Get Started</Button>
            </motion.div>
          </CTAContent>
        </WaveBackground>
      </CTASection>
    </div>
  );
};

export default CaseStudies;