import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaFacebookF, FaYoutube, FaCheckCircle } from 'react-icons/fa';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import '../styles/Contact.css';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  background: linear-gradient(135deg, rgba(10, 26, 47, 0.6) 0%, rgba(6, 19, 37, 0.8) 100%);
  padding: 3rem;
  border-radius: var(--border-radius-lg);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover label {
    color: var(--primary-color);
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  transition: all 0.3s ease;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: var(--primary-color);
    border-radius: 50%;
    margin-right: 8px;
    opacity: 0.7;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  font-size: 1.6rem;
  background-color: rgba(6, 19, 37, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(255, 120, 70, 0.2), inset 0 2px 5px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  &:hover {
    border-color: rgba(255, 120, 70, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  font-size: 1.6rem;
  background-color: rgba(6, 19, 37, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  transition: all 0.3s ease;
  min-height: 180px;
  resize: vertical;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(255, 120, 70, 0.2), inset 0 2px 5px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  &:hover {
    border-color: rgba(255, 120, 70, 0.3);
  }
`;

const ContactInfo = styled.div`
  width: 100%;
`;

const ContactCard = styled(Card)`
  margin-bottom: 3rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(10, 26, 47, 0.6) 0%, rgba(6, 19, 37, 0.8) 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at center, rgba(255, 120, 70, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ContactTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text-primary);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  font-size: 2.2rem;
  color: var(--primary-color);
  margin-right: 1.5rem;
  min-width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 120, 70, 0.1);
  padding: 1.5rem;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(255, 120, 70, 0.2);
`;

const ContactText = styled.div`
  font-size: 1.6rem;
  color: var(--text-secondary);
`;

const OfficesSection = styled.section`
  padding: 10rem 0;
  background-color: var(--background-darker);
`;

const OfficesGrid = styled.div`
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

const OfficeIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  color: var(--text-primary);
  font-size: 2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: var(--text-dark);
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
`;
// Success message component
const SuccessMessage = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
  color: white;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: center;
  
  h3 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    color: white;
  }
  
  p {
    font-size: 1.6rem;
    margin-bottom: 0;
  }
  
  svg {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    color: white;
  }
`;

// Floating contact button
const FloatingContact = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
`;

const FloatingButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(255, 120, 70, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(255, 120, 70, 0.4);
  }
`;

const QuickContactOptions = styled(motion.div)`
  position: absolute;
  bottom: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
`;

const QuickOption = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--background-darker);
  border-radius: 30px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.4rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  svg {
    margin-right: 0.8rem;
    font-size: 1.8rem;
    color: var(--primary-color);
  }
  
  &:hover {
    transform: translateX(-5px);
    background: var(--background-dark);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showQuickOptions, setShowQuickOptions] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Show success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };
  
  const toggleQuickOptions = () => {
    setShowQuickOptions(!showQuickOptions);
  };

  return (
    <div className="contact-page">
      {/* Hero Section with Wave Background */}
      <HeroSection>
        <WaveBackground>
          <HeroContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="contact-hero-title">
                Get In <GradientText fontWeight="700">Touch</GradientText>
              </h1>
              <p className="contact-hero-description">
                We'd love to hear from you. Contact us for any inquiries, partnership opportunities, or to learn more about our services.
              </p>
            </motion.div>
          </HeroContainer>
        </WaveBackground>
      </HeroSection>

      {/* Contact Form Section */}
      <ContentSection>
        <Container>
          <ContactGrid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="message">Comment or Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <Button
                  as="button"
                  type="submit"
                  variant="primary"
                  size="large"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%)',
                    boxShadow: '0 8px 20px rgba(255, 120, 70, 0.3)',
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 12px 25px rgba(255, 120, 70, 0.4)'
                  }}
                  whileTap={{
                    y: 0,
                    boxShadow: '0 5px 15px rgba(255, 120, 70, 0.3)'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <FaEnvelope /> Send Message
                  </span>
                </Button>
              </ContactForm>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ContactInfo>
                <ContactCard>
                  <ContactTitle>Contact Us</ContactTitle>
                  <ContactItem>
                    <ContactIcon>
                      <FaEnvelope />
                    </ContactIcon>
                    <ContactText>
                      <strong>Email (Business)</strong><br />
                      sales@neutrinotechsystems.com
                    </ContactText>
                  </ContactItem>
                  <ContactItem>
                    <ContactIcon>
                      <FaEnvelope />
                    </ContactIcon>
                    <ContactText>
                      <strong>Email (Careers)</strong><br />
                      careers@neutrinotechsystems.com
                    </ContactText>
                  </ContactItem>
                </ContactCard>

                <ContactCard>
                  <ContactTitle>Social Media</ContactTitle>
                  <SocialLinks>
                    <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </SocialLink>
                    <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </SocialLink>
                    <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF />
                    </SocialLink>
                    <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <FaYoutube />
                    </SocialLink>
                  </SocialLinks>
                </ContactCard>
              </ContactInfo>
            </motion.div>
          </ContactGrid>
        </Container>
      </ContentSection>

      {/* Offices Section */}
      <OfficesSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-header"
          >
            <h2 className="section-title">
              Our <GradientText>Offices</GradientText>
            </h2>
          </motion.div>

          <OfficesGrid>
            {[
              {
                location: "USA",
                address: "434 Ridgetop Bend, Cedar Park, TX - 78613, United States."
              },
              {
                location: "Costa Rica",
                address: "San Jose, Montes De Oca, San Pedro, Sigma Business Center, Torre A, Costa Rica."
              },
              {
                location: "India",
                address: "A2, Bramhacorp Business Park, 27th Floor, Wadgaon Sheri, Pune - 14, India."
              }
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card hoverable>
                  <OfficeIcon>
                    <FaMapMarkerAlt />
                  </OfficeIcon>
                  <h3 className="office-location">{office.location}</h3>
                  <p className="office-address">{office.address}</p>
                </Card>
              </motion.div>
            ))}
          </OfficesGrid>
        </Container>
      </OfficesSection>
      
      {/* Floating Contact Button */}
      <FloatingContact>
        <FloatingButton onClick={toggleQuickOptions}>
          <FaPhone />
        </FloatingButton>
        
        <QuickContactOptions
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showQuickOptions ? 1 : 0,
            y: showQuickOptions ? 0 : 20,
            pointerEvents: showQuickOptions ? 'auto' : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          <QuickOption href="mailto:sales@neutrinotechsystems.com">
            <FaEnvelope /> Email Us
          </QuickOption>
          <QuickOption href="tel:+1234567890">
            <FaPhone /> Call Us
          </QuickOption>
          <QuickOption href="https://linkedin.com/company/neutrinotech" target="_blank">
            <FaLinkedin /> LinkedIn
          </QuickOption>
        </QuickContactOptions>
      </FloatingContact>
      
      {/* Success Message */}
      {showSuccess && (
        <SuccessMessage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
          >
            <FaCheckCircle />
          </motion.div>
          <h3>Message Sent!</h3>
          <p>Thank you for your message. We'll get back to you soon.</p>
        </SuccessMessage>
      )}
    </div>
  );
};

export default Contact;