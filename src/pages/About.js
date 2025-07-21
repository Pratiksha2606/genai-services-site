import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBuilding, FaGlobeAmericas, FaUsers } from 'react-icons/fa';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import '../styles/About.css';

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

const HistorySection = styled.section`
  padding: 10rem 0;
  background-color: var(--background-darker);
`;

const HistoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const HistoryContent = styled.div`
  padding: 2rem;
`;

const HistoryImage = styled.div`
  height: 400px;
  background: linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  position: relative;
  overflow: hidden;
  
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

const HistoryIcon = styled.div`
  font-size: 8rem;
  color: var(--primary-color);
  position: relative;
  z-index: 1;
`;

const LeadershipSection = styled.section`
  padding: 10rem 0;
  background-color: var(--background-dark);
`;

const LeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const LeaderImage = styled.div`
  height: 300px;
  background: linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  position: relative;
  overflow: hidden;
  
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

const LeaderContent = styled.div`
  padding: 2.5rem;
  text-align: center;
`;

const LeaderName = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const LeaderTitle = styled.p`
  font-size: 1.6rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section with Wave Background */}
      <HeroSection>
        <WaveBackground>
          <HeroContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="about-hero-title">
                About <GradientText fontWeight="700">Neutrino Tech Systems</GradientText>
              </h1>
              <p className="about-hero-description">
                As a leading provider of IT services and solutions, we strive to deliver the best-in-class solutions tailored to meet our clients' unique needs.
              </p>
            </motion.div>
          </HeroContainer>
        </WaveBackground>
      </HeroSection>

      {/* Who We Are Section */}
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
                Who <GradientText>We Are</GradientText>
              </h2>
            </motion.div>
          </SectionHeader>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="about-description">
              As a leading provider of IT services and solutions, we strive to deliver the best-in-class solutions tailored to meet our clients' unique needs. Our passionate determination drives us to achieve exceptional results for our clients, enabling forward-looking businesses to become intelligent enterprises that foster growth and innovation. We are a Great Place to Work, with a collaborative and positive environment that supports the personal and professional growth of our associates.
            </p>
          </motion.div>
        </Container>
      </ContentSection>

      {/* History Section */}
      <HistorySection>
        <Container>
          <HistoryGrid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <HistoryImage>
                <HistoryIcon>
                  <FaBuilding />
                </HistoryIcon>
              </HistoryImage>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <HistoryContent>
                <h2 className="history-title">
                  The Year, <GradientText>2018</GradientText>
                </h2>
                <p className="history-description">
                  Established in 2018 and headquartered in Texas, USA, Neutrino Tech Systems is a pioneering force in delivering cutting-edge IT services and solutions.
                </p>
                <p className="history-description">
                  With a global presence in India, the USA, and Costa Rica, we help healthcare organizations worldwide enhance patient care and improve outcomes.
                </p>
              </HistoryContent>
            </motion.div>
          </HistoryGrid>
        </Container>
      </HistorySection>

      {/* Leadership Section */}
      <LeadershipSection>
        <Container>
          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">
                Meet Our <GradientText>Leaders</GradientText>
              </h2>
            </motion.div>
          </SectionHeader>

          <LeadershipGrid>
            {[
              {
                name: "Siddharth Bhayani",
                title: "CEO, Founder",
                image: <FaUsers />
              },
              {
                name: "Aakash Shroff",
                title: "CTO, Co-Founder, Director",
                image: <FaUsers />
              },
              {
                name: "Krupali Sheth",
                title: "VP- Business Development & Customer Success",
                image: <FaUsers />
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card hoverable>
                  <LeaderImage>
                    {leader.image}
                  </LeaderImage>
                  <LeaderContent>
                    <LeaderName>{leader.name}</LeaderName>
                    <LeaderTitle>{leader.title}</LeaderTitle>
                  </LeaderContent>
                </Card>
              </motion.div>
            ))}
          </LeadershipGrid>
        </Container>
      </LeadershipSection>

      {/* Join Us Section */}
      <ContentSection>
        <WaveBackground>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="join-us-container"
            >
              <h2 className="join-us-title">
                Come, <GradientText>Join Us</GradientText>
              </h2>
              <p className="join-us-description">
                Neutrino Tech Systems in USA
              </p>
            </motion.div>
          </Container>
        </WaveBackground>
      </ContentSection>
    </div>
  );
};

export default About;