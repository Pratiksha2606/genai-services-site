import React, { useEffect, useRef } from 'react';
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
  display: flex;
  overflow-x: auto;
  gap: 3rem;
  margin-bottom: 6rem;
  padding: 2rem 0;
  position: relative;
  width: 100%;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--background-darker);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 10px;
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
  width: 350px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
`;

const InsightImage = styled.div`
  height: 200px;
  background: ${props => props.imageUrl ? `url(${props.imageUrl})` : 'linear-gradient(135deg, var(--wave-dark-blue) 0%, var(--wave-medium-blue) 70%, var(--wave-light-blue) 100%)'};
  background-size: cover;
  background-position: center;
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
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
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
  const carouselRef = useRef(null);
  const [position, setPosition] = React.useState(0);
  
  useEffect(() => {
    // Set up a timer to move the cards automatically
    const timer = setInterval(() => {
      setPosition(prev => prev - 10); // Move 10px to the left every interval
    }, 50); // Update every 50ms for smooth animation
    
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sample data for featured insights
  const featuredInsights = [
    {
      id: 1,
      title: "The Future of AI in Healthcare: Trends and Predictions",
      description: "Explore how artificial intelligence is transforming healthcare delivery, from diagnosis to treatment planning and beyond.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "Read Full Article"
    },
    {
      id: 2,
      title: "Ethical Considerations in Medical AI Implementation",
      description: "Examining the ethical challenges and considerations when implementing AI solutions in healthcare environments.",
      imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "Read Full Article"
    }
  ];

  // Sample data for insights
  const insights = [
    {
      id: 1,
      type: "Whitepaper",
      title: "AI-Powered Predictive Analytics in Healthcare",
      imageUrl: "https://images.unsplash.com/photo-1581093458791-9d8e8d1b1e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <FaNewspaper />,
      cta: "Download Whitepaper"
    },
    {
      id: 2,
      type: "Podcast",
      title: "The Role of Machine Learning in Medical Diagnosis",
      imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <FaHeadphones />,
      cta: "Listen Now"
    },
    {
      id: 3,
      type: "Case Study",
      title: "How Hospital X Reduced Readmissions by 35%",
      imageUrl: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <FaChartLine />,
      cta: "Read Case Study"
    },
    {
      id: 4,
      type: "Webinar",
      title: "Securing Patient Data in the Age of AI",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <FaShieldAlt />,
      cta: "Watch Recording"
    },
    {
      id: 5,
      type: "Blog",
      title: "5 Ways AI is Transforming Medical Imaging",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <FaRobot />,
      cta: "Read Article"
    },
    {
      id: 6,
      type: "Interview",
      title: "Insights from Healthcare AI Pioneers",
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <FaUsers />,
      cta: "Watch Interview"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <WaveBackground>
          <HeroContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                <GradientText>Insights</GradientText> & Resources
              </h1>
              <p className="hero-subtitle">
                Explore our latest research, whitepapers, case studies, and thought leadership on AI in healthcare.
              </p>
              <div className="hero-cta">
                <Button variant="primary" size="large">Subscribe to Updates</Button>
                <Button variant="secondary" size="large">Browse by Topic</Button>
              </div>
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
                  <InsightImage imageUrl={insight.imageUrl} style={{ borderRadius: 'var(--border-radius) var(--border-radius) 0 0' }} />
                  <FeaturedInsightContent>
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

          <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '6rem' }}>
            <div 
              style={{
                display: 'flex',
                gap: '3rem',
                transform: `translateX(${position % (350 * insights.length) === 0 ? 0 : position % (350 * insights.length)}px)`,
                transition: 'transform 0.5s linear',
                width: 'max-content'
              }}
            >
              {/* Duplicate the insights to create an infinite loop effect */}
              {[...insights, ...insights].map((insight, index) => (
                <motion.div
                  key={`${insight.id}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 10,
                    transition: { duration: 0.2 }
                  }}
                  style={{ minWidth: '350px', flex: '0 0 auto' }}
                >
                  <InsightCard hoverable>
                    <InsightImage imageUrl={insight.imageUrl} />
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
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '1.6rem', color: 'var(--primary-color)' }}>
              Auto-moving carousel
            </div>
          </div>
          
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