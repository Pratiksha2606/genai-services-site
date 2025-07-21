import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaHospital, FaChartLine, FaRobot, FaDatabase, FaArrowRight } from 'react-icons/fa';
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
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyImage = styled.div`
  height: 100%;
  min-height: 300px;
  background: linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 992px) {
    min-height: 200px;
  }
  
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
`;

const CaseStudyIcon = styled.div`
  font-size: 6rem;
  color: var(--primary-color);
  position: relative;
  z-index: 1;
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
                <CaseStudyCard hoverable>
                  <CaseStudyImage>
                    <CaseStudyIcon>
                      {caseStudy.icon}
                    </CaseStudyIcon>
                  </CaseStudyImage>
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