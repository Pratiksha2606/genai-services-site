import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
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
  background: ${props => props.imageUrl ? `url(${props.imageUrl})` : 'linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%)'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  position: relative;
  overflow: hidden;
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
  background: ${props => props.imageUrl ? `url(${props.imageUrl})` : 'linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%)'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  position: relative;
  overflow: hidden;
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
              <HistoryImage imageUrl="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
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
                imageUrl: "/images/leadership/siddharth_bhayani.png",
                bio: "With over 15 years of experience in healthcare technology, Siddharth founded Neutrino Tech Systems with a vision to transform healthcare through innovative AI solutions. His leadership has driven the company's growth and established its reputation for excellence in the industry."
              },
              {
                name: "Aakash Shroff",
                title: "CTO, Co-Founder, Director",
                imageUrl: "/images/leadership/aakash_shroff.png",
                bio: "Aakash brings deep technical expertise in AI, machine learning, and healthcare informatics. As CTO, he leads the development of Neutrino's cutting-edge solutions, ensuring they leverage the latest advancements in technology while maintaining the highest standards of quality and security."
              },
              {
                name: "Krupali Sheth",
                title: "VP- Business Development & Customer Success",
                imageUrl: "/images/leadership/krupali_sheth.png",
                bio: "Krupali leads our business development and customer success initiatives, focusing on building strong relationships with healthcare organizations and ensuring our solutions deliver measurable value. Her client-centric approach has been instrumental in driving adoption and satisfaction among our customers."
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
                  <LeaderImage imageUrl={leader.imageUrl} />
                  <LeaderContent>
                    <LeaderName>{leader.name}</LeaderName>
                    <LeaderTitle>{leader.title}</LeaderTitle>
                    <p style={{ fontSize: '1.4rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                      {leader.bio}
                    </p>
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
                Join our team of innovators at Neutrino Tech Systems and be part of a company that's transforming healthcare through AI. We offer a collaborative environment where creativity thrives, professional growth is encouraged, and your work makes a meaningful impact on patient care worldwide.
              </p>
              <p className="join-us-description" style={{ marginTop: '2rem' }}>
                Based in Texas, USA, with global offices in India and Costa Rica, we provide opportunities to work with cutting-edge technologies and collaborate with healthcare organizations around the world. Our diverse and inclusive culture values different perspectives and fosters innovation.
              </p>
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Card as="a" href="/contact" style={{ display: 'inline-block', padding: '1.5rem 3rem', textDecoration: 'none', background: 'var(--primary-color)', color: 'var(--text-dark)', borderRadius: 'var(--border-radius)', fontWeight: '600', fontSize: '1.6rem', transition: 'all 0.3s ease' }}>
                  View Open Positions
                </Card>
              </div>
            </motion.div>
          </Container>
        </WaveBackground>
      </ContentSection>
    </div>
  );
};

export default About;
