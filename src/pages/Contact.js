import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
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
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.6rem;
  background-color: var(--background-darker);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  color: var(--text-primary);
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 120, 70, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.6rem;
  background-color: var(--background-darker);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  color: var(--text-primary);
  transition: var(--transition);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 120, 70, 0.2);
  }
`;

const ContactInfo = styled.div`
  width: 100%;
`;

const ContactCard = styled(Card)`
  margin-bottom: 3rem;
  padding: 3rem;
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
  margin-bottom: 2rem;
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-right: 1.5rem;
  min-width: 2rem;
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
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--background-darker);
  color: var(--text-primary);
  font-size: 1.8rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: var(--text-dark);
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
    alert('Thank you for your message! We will get back to you soon.');
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
                <Button as="button" type="submit" variant="primary" size="large">
                  Send Message
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
    </div>
  );
};

export default Contact;