import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowRight, FaLinkedin, FaHeadphones, FaNewspaper, FaChartLine, FaShieldAlt, FaRobot, FaUsers } from 'react-icons/fa';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import '../styles/Insights.css';

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

const InsightsGrid = styled.div`
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

const FeaturedInsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 6rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const InsightCard = styled(Card)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const InsightImage = styled.div`
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
`;

const InsightContent = styled.div`
  padding: 2.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const InsightType = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const InsightTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const InsightDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const InsightLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-top: auto;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

const FeaturedInsightCard = styled(Card)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FeaturedInsightContent = styled.div`
  padding: 3rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const FeaturedInsightTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const FeaturedInsightDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  flex-grow: 1;
`;

const IconContainer = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
`;

const Insights = () => {
  // Featured insights data
  const featuredInsights = [
    {
      id: 1,
      title: "From AI projects to profits",
      description: "The initial gen AI euphoria has given way to a more nuanced, realistic understanding of its potential and challenges.",
      link: "How agentic AI can sustain financial returns",
      icon: <FaChartLine />
    },
    {
      id: 2,
      title: "Cybersecurity 2028",
      description: "As AI reshapes operations, CISOs face a critical challenge: build AI-resilient defenses or fall victim to AI-enabled threats.",
      link: "Your workforce, built for the AI frontier",
      icon: <FaShieldAlt />
    },
    {
      id: 3,
      title: "Orchestrating agentic AI for intelligent business operation",
      description: "With agentic AI, organizations must shift from directing how work gets done to controlling what is delivered.",
      link: "Automation evolution is underway",
      icon: <FaRobot />
    },
    {
      id: 4,
      title: "Global C-suite Series",
      description: "5 mindshifts to supercharge business growth",
      link: "Move from productivity to performance with agentic AI",
      icon: <FaUsers />
    }
  ];

  // Regular insights data
  const insights = [
    {
      id: 1,
      type: "IBV report",
      title: "Banking in the AI era: The risk management of AI and with AI",
      cta: "Get insights",
      icon: <FaNewspaper />
    },
    {
      id: 2,
      type: "LinkedIn blog by Pushpinder Singh",
      title: "5 playbook moves for supply chain resilience",
      cta: "Read on LinkedIn",
      icon: <FaLinkedin />
    },
    {
      id: 3,
      type: "Transformers Podcast",
      title: "AI for good, with Frank Sweeney, CIO, Arizona DCS",
      cta: "Listen",
      icon: <FaHeadphones />
    },
    {
      id: 4,
      type: "Think Blog",
      title: "Generative AI in Automotive",
      cta: "Read more",
      icon: <FaNewspaper />
    },
    {
      id: 5,
      type: "Research Paper",
      title: "The Future of Healthcare with AI-Powered Diagnostics",
      cta: "Download PDF",
      icon: <FaNewspaper />
    },
    {
      id: 6,
      type: "Case Study",
      title: "How AI Transformed Patient Care at Leading Hospitals",
      cta: "View Case Study",
      icon: <FaNewspaper />
    }
  ];

  return (
    <div className="insights-page">
      {/* Hero Section with Wave Background */}
      <HeroSection>
        <WaveBackground>
          <HeroContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="insights-hero-title">
                Latest <GradientText fontWeight="700">News & Insights</GradientText>
              </h1>
              <p className="insights-hero-description">
                Stay updated with the latest trends, research, and insights in AI and healthcare technology.
              </p>
            </motion.div>
          </HeroContainer>
        </WaveBackground>
      </HeroSection>

      {/* Featured Insights Section */}
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
                Featured <GradientText>Insights</GradientText>
              </h2>
              <p className="section-subtitle">
                Explore our latest research and thought leadership on AI and healthcare innovation.
              </p>
            </motion.div>
          </SectionHeader>

          <FeaturedInsightsGrid>
            {featuredInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <FeaturedInsightCard hoverable>
                  <FeaturedInsightContent>
                    <IconContainer>
                      {insight.icon}
                    </IconContainer>
                    <FeaturedInsightTitle>{insight.title}</FeaturedInsightTitle>
                    <FeaturedInsightDescription>{insight.description}</FeaturedInsightDescription>
                    <InsightLink>
                      {insight.link} <FaArrowRight />
                    </InsightLink>
                  </FeaturedInsightContent>
                </FeaturedInsightCard>
              </motion.div>
            ))}
          </FeaturedInsightsGrid>

          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">
                Latest <GradientText>Resources</GradientText>
              </h2>
              <p className="section-subtitle">
                Discover our most recent publications, blogs, podcasts, and more.
              </p>
            </motion.div>
          </SectionHeader>

          <InsightsGrid>
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <InsightCard hoverable>
                  <InsightImage>
                    {insight.icon}
                  </InsightImage>
                  <InsightContent>
                    <InsightType>
                      {insight.icon} {insight.type}
                    </InsightType>
                    <InsightTitle>{insight.title}</InsightTitle>
                    <InsightLink>
                      {insight.cta} <FaArrowRight />
                    </InsightLink>
                  </InsightContent>
                </InsightCard>
              </motion.div>
            ))}
          </InsightsGrid>

          <div className="insights-cta">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ textAlign: 'center' }}
            >
              <Button variant="primary" size="large">View All Insights</Button>
            </motion.div>
          </div>
        </Container>
      </ContentSection>
    </div>
  );
};

export default Insights;