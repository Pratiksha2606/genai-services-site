import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaComments, FaCheckCircle, FaServer, FaShieldAlt, FaMobileAlt, FaBrain, FaDatabase, FaNetworkWired, FaUserMd, FaRobot } from 'react-icons/fa';
import '../styles/UseCase.css';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ConversationalAssistantUseCase = () => {
  return (
    <div className="use-case-page">
      {/* Hero Section with Wave Background */}
      <section className="use-case-hero">
        <WaveBackground>
          <div className="use-case-hero-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="use-case-breadcrumb">
                <Link to="/" className="use-case-breadcrumb-link">Home</Link>
                <span className="use-case-breadcrumb-separator">/</span>
                <Link to="/solutions" className="use-case-breadcrumb-link">Solutions</Link>
                <span className="use-case-breadcrumb-separator">/</span>
                <span className="use-case-breadcrumb-current">Conversational Assistant</span>
              </div>
              <h1 className="use-case-hero-title">
                AI-Powered <GradientText fontWeight="700">Conversational Assistant</GradientText>
              </h1>
              <p className="use-case-hero-description">
                Our intelligent conversational interfaces enable natural language interactions for patients and providers, enhancing engagement, improving access to care, and streamlining healthcare experiences.
              </p>
            </motion.div>
          </div>
        </WaveBackground>
      </section>

      {/* Main Content */}
      <section className="use-case-content">
        <div className="use-case-container">
          <div className="use-case-grid">
            <div className="use-case-main">
              <div className="use-case-section">
                <h2 className="use-case-section-title">Overview</h2>
                <div className="use-case-section-content">
                  <p>
                    Healthcare interactions often involve complex processes, medical terminology, and administrative tasks that can be confusing and time-consuming for patients. Meanwhile, healthcare providers face increasing documentation burdens and struggle to efficiently address routine patient inquiries while focusing on more complex cases.
                  </p>
                  <p>
                    Our AI-powered Conversational Assistant solution leverages advanced natural language processing, contextual understanding, and healthcare-specific knowledge to enable intuitive, human-like interactions through text and voice channels. By understanding patient intent, accessing relevant information, and providing personalized responses, our solution enhances patient engagement, improves access to care, and reduces administrative burden.
                  </p>
                  <motion.div
                    className="use-case-image-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="use-case-image">
                      <FaComments className="use-case-image-icon" />
                    </div>
                  </motion.div>
                  <p>
                    The system integrates seamlessly with existing healthcare platforms, including patient portals, EHR systems, scheduling tools, and knowledge bases, ensuring a consistent and comprehensive experience across all touchpoints.
                  </p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Interactive Demo</h2>
                <div className="use-case-section-content">
                  <p>Experience how our Conversational Assistant works with this interactive demo:</p>
                  
                  <Button
                    to="/solutions/conversational-assistant/demo"
                    variant="primary"
                    style={{ marginBottom: '2rem' }}
                  >
                    Show Demo
                  </Button>
                  
                  <p>Click the button above to open our interactive Conversational Assistant demo in a new page. The demo allows you to engage in natural language conversations with our AI assistant, experiencing how it can help with appointment scheduling, medication information, symptom assessment, and other healthcare inquiries.</p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Key Capabilities</h2>
                <div className="use-case-section-content">
                  <p>Our Conversational Assistant solution offers a comprehensive set of capabilities:</p>
                  <ul>
                    <li><strong>Natural Language Understanding:</strong> Comprehends complex healthcare queries, medical terminology, and conversational nuances.</li>
                    <li><strong>Multi-channel Support:</strong> Delivers consistent experiences across web, mobile, voice, and messaging platforms.</li>
                    <li><strong>Contextual Awareness:</strong> Maintains conversation context and patient history for personalized interactions.</li>
                    <li><strong>Healthcare Knowledge Base:</strong> Accesses comprehensive medical information, protocols, and guidelines to provide accurate responses.</li>
                    <li><strong>Seamless Handoffs:</strong> Transfers conversations to human staff when needed, with full context preservation.</li>
                    <li><strong>Personalization:</strong> Tailors responses based on patient profiles, preferences, and health conditions.</li>
                    <li><strong>Proactive Engagement:</strong> Initiates conversations for appointment reminders, medication adherence, and preventive care.</li>
                  </ul>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">89%</div>
                  <div className="use-case-stat-label">Patient Satisfaction Rate</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">65%</div>
                  <div className="use-case-stat-label">Reduction in Call Center Volume</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">24/7</div>
                  <div className="use-case-stat-label">Always-On Support</div>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Implementation Process</h2>
                <div className="use-case-section-content">
                  <p>Our implementation process is designed to ensure a smooth integration with your existing systems and patient engagement strategies:</p>
                  <ol>
                    <li><strong>Assessment:</strong> We conduct a thorough assessment of your current patient engagement channels, common inquiries, and integration requirements.</li>
                    <li><strong>Use Case Definition:</strong> We work with your team to identify and prioritize the most valuable use cases for your organization and patient population.</li>
                    <li><strong>Knowledge Base Development:</strong> We develop a comprehensive knowledge base tailored to your services, policies, and patient needs.</li>
                    <li><strong>Conversation Design:</strong> Our conversation designers create natural, empathetic dialogue flows for each use case.</li>
                    <li><strong>Integration:</strong> We integrate the solution with your existing systems, including EHR, scheduling, billing, and patient portal platforms.</li>
                    <li><strong>Training:</strong> We train the AI models using your specific data and healthcare domain knowledge to ensure accuracy and relevance.</li>
                    <li><strong>Testing & Validation:</strong> We rigorously test the solution with real-world scenarios and refine based on feedback.</li>
                    <li><strong>Deployment:</strong> We deploy the solution across your selected channels with minimal disruption to existing operations.</li>
                    <li><strong>Monitoring & Optimization:</strong> We continuously monitor performance and user feedback to optimize the solution over time.</li>
                  </ol>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "The conversational assistant has transformed how we engage with our patients. It handles thousands of routine inquiries each day, allowing our staff to focus on complex cases that require human expertise. Patients love the immediate responses and 24/7 availability, and we've seen significant improvements in appointment adherence and patient satisfaction."
                </p>
                <div className="use-case-quote-author">Jennifer Thompson</div>
                <div className="use-case-quote-position">Chief Digital Officer, Regional Health Network</div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Benefits</h2>
                <div className="use-case-section-content">
                  <p><strong>For Healthcare Providers:</strong></p>
                  <ul>
                    <li>Reduced administrative burden and call center volume</li>
                    <li>Improved staff productivity and job satisfaction</li>
                    <li>Enhanced patient engagement and satisfaction</li>
                    <li>Increased appointment adherence and reduced no-shows</li>
                    <li>More efficient triage and resource allocation</li>
                    <li>Valuable insights from conversation analytics</li>
                  </ul>
                  
                  <p><strong>For Patients:</strong></p>
                  <ul>
                    <li>24/7 access to healthcare information and support</li>
                    <li>Reduced wait times for responses to inquiries</li>
                    <li>More convenient and accessible healthcare experiences</li>
                    <li>Personalized guidance and recommendations</li>
                    <li>Simplified navigation of complex healthcare processes</li>
                    <li>Increased engagement in their own care</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="use-case-sidebar">
              <div className="use-case-sidebar-section">
                <h3 className="use-case-sidebar-title">Key Highlights</h3>
                <ul className="use-case-highlights">
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">89% patient satisfaction rate</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">65% reduction in call center volume</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">24/7 patient support and engagement</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Multi-channel deployment (web, mobile, voice)</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Seamless integration with existing systems</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">HIPAA-compliant and secure</div>
                  </li>
                </ul>
              </div>

              <div className="use-case-sidebar-section">
                <h3 className="use-case-sidebar-title">Technologies Used</h3>
                <ul className="use-case-technologies">
                  <li className="use-case-technology">
                    <FaBrain className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Natural Language Processing</div>
                  </li>
                  <li className="use-case-technology">
                    <FaRobot className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Conversational AI</div>
                  </li>
                  <li className="use-case-technology">
                    <FaDatabase className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Knowledge Graph</div>
                  </li>
                  <li className="use-case-technology">
                    <FaServer className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Cloud Infrastructure</div>
                  </li>
                  <li className="use-case-technology">
                    <FaShieldAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">HIPAA-Compliant Security</div>
                  </li>
                  <li className="use-case-technology">
                    <FaNetworkWired className="use-case-technology-icon" />
                    <div className="use-case-technology-text">API Integration Framework</div>
                  </li>
                  <li className="use-case-technology">
                    <FaMobileAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Multi-Channel Deployment</div>
                  </li>
                </ul>
              </div>

              <Card className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to <GradientText>Transform</GradientText> Patient Engagement?</h3>
                <p className="use-case-cta-text">Contact us today to schedule a demonstration and discover how our Conversational Assistant solution can benefit your organization and patients.</p>
                <Button to="/contact" variant="primary" size="large">Request a Demo</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Use Cases with Wave Background */}
      <section className="related-use-cases">
        <WaveBackground>
          <div className="related-use-cases-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="related-use-cases-title">Related Healthcare <GradientText>AI Solutions</GradientText></h2>
            </motion.div>
            <div className="related-use-cases-grid">
              <Link to="/solutions/voice-assistant" className="related-use-case-card">
                <div className="related-use-case-image">
                  <FaMobileAlt className="related-use-case-image-icon" />
                </div>
                <div className="related-use-case-content">
                  <h3 className="related-use-case-title">Voice Assistant</h3>
                  <p className="related-use-case-description">
                    Intelligent voice-enabled assistants that help healthcare providers document patient encounters, access information, and perform tasks hands-free.
                  </p>
                  <div className="related-use-case-link">
                    Learn More <FaArrowRight className="related-use-case-link-icon" />
                  </div>
                </div>
              </Link>

              <Link to="/solutions/prior-authorization" className="related-use-case-card">
                <div className="related-use-case-image">
                  <FaUserMd className="related-use-case-image-icon" />
                </div>
                <div className="related-use-case-content">
                  <h3 className="related-use-case-title">Prior Authorization</h3>
                  <p className="related-use-case-description">
                    Streamline the prior authorization process with AI-powered automation, reducing administrative burden and accelerating care delivery.
                  </p>
                  <div className="related-use-case-link">
                    Learn More <FaArrowRight className="related-use-case-link-icon" />
                  </div>
                </div>
              </Link>

              <Link to="/solutions/spectra" className="related-use-case-card">
                <div className="related-use-case-image">
                  <FaDatabase className="related-use-case-image-icon" />
                </div>
                <div className="related-use-case-content">
                  <h3 className="related-use-case-title">Spectra</h3>
                  <p className="related-use-case-description">
                    Advanced analytics platform that integrates diverse healthcare data sources to provide comprehensive insights and decision support.
                  </p>
                  <div className="related-use-case-link">
                    Learn More <FaArrowRight className="related-use-case-link-icon" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </WaveBackground>
      </section>
    </div>
  );
};

export default ConversationalAssistantUseCase;