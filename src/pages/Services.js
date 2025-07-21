import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaCode, FaDatabase, FaRobot, FaChartLine, FaServer, FaShieldAlt, FaCloud, FaMobileAlt } from 'react-icons/fa';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import '../styles/Services.css';

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

const ServicesGrid = styled.div`
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

const ServiceIcon = styled.div`
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
`;

const ProcessSection = styled.section`
  padding: 10rem 0;
  background-color: var(--background-darker);
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ProcessStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;

const StepNumber = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--text-dark);
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex-grow: 1;
`;

const StepTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const StepDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--text-secondary);
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

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section with Wave Background */}
      <HeroSection>
        <WaveBackground>
          <HeroContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="services-hero-title">
                Our <GradientText fontWeight="700">Services</GradientText>
              </h1>
              <p className="services-hero-description">
                We offer a comprehensive range of IT services and solutions designed to help your business thrive in the digital age.
              </p>
            </motion.div>
          </HeroContainer>
        </WaveBackground>
      </HeroSection>

      {/* Services Section */}
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
                What We <GradientText>Offer</GradientText>
              </h2>
              <p className="section-subtitle">
                Our services are designed to address your most complex business challenges and help you achieve your goals.
              </p>
            </motion.div>
          </SectionHeader>

          <ServicesGrid>
            {[
              {
                icon: <FaCode />,
                title: "Custom Software Development",
                description: "Tailored software solutions designed to meet your specific business needs and requirements."
              },
              {
                icon: <FaDatabase />,
                title: "Data Analytics & BI",
                description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions."
              },
              {
                icon: <FaRobot />,
                title: "AI & Machine Learning",
                description: "Harness the power of artificial intelligence to automate processes and gain competitive advantage."
              },
              {
                icon: <FaCloud />,
                title: "Cloud Services",
                description: "Seamless cloud migration, management, and optimization services for improved scalability and efficiency."
              },
              {
                icon: <FaMobileAlt />,
                title: "Mobile App Development",
                description: "Cross-platform mobile applications that deliver exceptional user experiences across all devices."
              },
              {
                icon: <FaShieldAlt />,
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your business from evolving cyber threats."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card hoverable>
                  <ServiceIcon>
                    {service.icon}
                  </ServiceIcon>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </ServicesGrid>
        </Container>
      </ContentSection>

      {/* Process Section */}
      <ProcessSection>
        <Container>
          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">
                Our <GradientText>Process</GradientText>
              </h2>
              <p className="section-subtitle">
                We follow a structured approach to ensure successful delivery of every project.
              </p>
            </motion.div>
          </SectionHeader>

          <ProcessSteps>
            {[
              {
                number: "01",
                title: "Discovery & Planning",
                description: "We begin by understanding your business objectives, requirements, and challenges to create a comprehensive project plan."
              },
              {
                number: "02",
                title: "Design & Development",
                description: "Our expert team designs and develops tailored solutions using the latest technologies and best practices."
              },
              {
                number: "03",
                title: "Testing & Quality Assurance",
                description: "Rigorous testing ensures that your solution meets the highest standards of quality and performance."
              },
              {
                number: "04",
                title: "Deployment & Integration",
                description: "We seamlessly deploy and integrate your solution into your existing systems and workflows."
              },
              {
                number: "05",
                title: "Support & Maintenance",
                description: "Our ongoing support and maintenance services ensure that your solution continues to perform optimally."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <ProcessStep>
                  <StepNumber>{step.number}</StepNumber>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepContent>
                </ProcessStep>
              </motion.div>
            ))}
          </ProcessSteps>
        </Container>
      </ProcessSection>

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
                Ready to <GradientText>Transform</GradientText> Your Business?
              </h2>
              <p className="cta-description">
                Contact us today to schedule a consultation with our experts and discover how our services can help you achieve your goals.
              </p>
              <Button to="/contact" variant="primary" size="large">Get Started</Button>
            </motion.div>
          </CTAContent>
        </WaveBackground>
      </CTASection>
    </div>
  );
};

export default Services;