import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMicrophone, FaCheckCircle, FaChartLine, FaRobot, FaServer, FaShieldAlt, FaCloudUploadAlt, FaMobileAlt, FaBrain, FaFileAlt, FaComments, FaUserMd } from 'react-icons/fa';
import '../styles/UseCase.css';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const VoiceAssistantUseCase = () => {
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
                <span className="use-case-breadcrumb-current">Voice Assistant</span>
              </div>
              <h1 className="use-case-hero-title">
                AI-Powered <GradientText fontWeight="700">Voice Assistant</GradientText>
              </h1>
              <p className="use-case-hero-description">
                Our intelligent voice-enabled assistant helps healthcare providers document patient encounters, access information, and perform tasks hands-free, improving workflow efficiency and patient care.
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
                    Healthcare providers spend a significant amount of time on documentation and administrative tasks, often at the expense of direct patient care. Traditional methods of data entry and information retrieval can be cumbersome, time-consuming, and disruptive to the patient-provider relationship.
                  </p>
                  <p>
                    Our AI-powered Voice Assistant solution leverages advanced speech recognition, natural language processing, and contextual understanding to enable hands-free interaction with clinical systems. By allowing providers to use natural voice commands to document encounters, retrieve patient information, order tests, and perform other clinical tasks, our solution significantly reduces administrative burden and allows for more focused patient care.
                  </p>
                  <motion.div
                    className="use-case-image-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="use-case-image">
                      <FaMicrophone className="use-case-image-icon" />
                    </div>
                  </motion.div>
                  <p>
                    The system integrates seamlessly with existing EHR systems and clinical workflows, ensuring minimal disruption while providing maximum value to healthcare providers and patients.
                  </p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Interactive Demo</h2>
                <div className="use-case-section-content">
                  <p>Experience how our Voice Assistant solution works with this interactive demo:</p>
                  
                  <Button
                    to="/solutions/voice-assistant/demo"
                    variant="primary"
                    style={{ marginBottom: '2rem' }}
                  >
                    Show Demo
                  </Button>
                  
                  <p>Click the button above to open our interactive Voice Assistant demo in a new page. The demo allows you to experience the voice-enabled assistant firsthand, demonstrating how healthcare providers can use voice commands to perform tasks and document patient encounters.</p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Key Capabilities</h2>
                <div className="use-case-section-content">
                  <p>Our Voice Assistant solution offers a comprehensive set of capabilities:</p>
                  <ul>
                    <li><strong>Clinical Documentation:</strong> Automatically transcribes and structures patient encounters, including history, physical exams, assessments, and plans.</li>
                    <li><strong>Information Retrieval:</strong> Provides quick access to patient records, lab results, medication lists, and clinical guidelines through voice commands.</li>
                    <li><strong>Order Entry:</strong> Enables voice-activated ordering of medications, labs, imaging studies, and referrals.</li>
                    <li><strong>Clinical Decision Support:</strong> Offers evidence-based recommendations and alerts based on patient data and clinical context.</li>
                    <li><strong>Workflow Automation:</strong> Streamlines routine tasks such as scheduling, messaging, and form completion.</li>
                    <li><strong>Ambient Intelligence:</strong> Passively listens during patient encounters to generate clinical notes without explicit commands.</li>
                  </ul>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">70%</div>
                  <div className="use-case-stat-label">Reduction in Documentation Time</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">98%</div>
                  <div className="use-case-stat-label">Speech Recognition Accuracy</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">2.5h</div>
                  <div className="use-case-stat-label">Daily Time Saved Per Provider</div>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Implementation Process</h2>
                <div className="use-case-section-content">
                  <p>Our implementation process is designed to ensure a smooth integration with your existing systems and workflows:</p>
                  <ol>
                    <li><strong>Assessment:</strong> We conduct a thorough assessment of your current clinical workflows, documentation processes, and EHR system.</li>
                    <li><strong>Customization:</strong> Our team customizes the solution to address your specific requirements, specialty-specific terminology, and common workflows.</li>
                    <li><strong>Integration:</strong> We integrate the voice assistant with your EHR and other clinical systems to enable seamless data exchange.</li>
                    <li><strong>Training:</strong> The AI models are trained on your specific clinical vocabulary, documentation templates, and provider speech patterns.</li>
                    <li><strong>Deployment:</strong> The solution is deployed in a phased approach, starting with a pilot group and expanding to full implementation.</li>
                    <li><strong>Optimization:</strong> We continuously monitor the system's performance and make adjustments to optimize accuracy and efficiency.</li>
                  </ol>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "The voice assistant has completely transformed how I practice medicine. I can now focus on my patients instead of my computer screen. Documentation that used to take hours now happens automatically during the visit, and I can retrieve information instantly without disrupting the patient encounter. It's given me back the joy of practicing medicine."
                </p>
                <div className="use-case-quote-author">Dr. Emily Rodriguez</div>
                <div className="use-case-quote-position">Family Medicine Physician, Lakeside Medical Group</div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Benefits</h2>
                <div className="use-case-section-content">
                  <p><strong>For Healthcare Providers:</strong></p>
                  <ul>
                    <li>Reduced documentation burden and administrative workload</li>
                    <li>More time for direct patient care and clinical decision-making</li>
                    <li>Improved clinical documentation quality and completeness</li>
                    <li>Enhanced workflow efficiency and productivity</li>
                    <li>Reduced burnout and improved job satisfaction</li>
                  </ul>
                  
                  <p><strong>For Healthcare Organizations:</strong></p>
                  <ul>
                    <li>Increased provider productivity and patient throughput</li>
                    <li>Improved documentation quality for better coding and billing</li>
                    <li>Enhanced regulatory compliance and quality reporting</li>
                    <li>Reduced provider burnout and turnover</li>
                    <li>Competitive advantage in provider recruitment and retention</li>
                  </ul>
                  
                  <p><strong>For Patients:</strong></p>
                  <ul>
                    <li>More attentive and engaged provider interactions</li>
                    <li>Reduced wait times and more efficient visits</li>
                    <li>More comprehensive and accurate clinical documentation</li>
                    <li>Improved continuity of care through better information sharing</li>
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
                    <div className="use-case-highlight-text">70% reduction in documentation time</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">98% speech recognition accuracy</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Seamless integration with major EHR systems</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Support for 30+ medical specialties</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Ambient intelligence for passive documentation</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">2.5 hours saved daily per provider</div>
                  </li>
                </ul>
              </div>

              <div className="use-case-sidebar-section">
                <h3 className="use-case-sidebar-title">Technologies Used</h3>
                <ul className="use-case-technologies">
                  <li className="use-case-technology">
                    <FaBrain className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Advanced Speech Recognition</div>
                  </li>
                  <li className="use-case-technology">
                    <FaRobot className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Natural Language Processing</div>
                  </li>
                  <li className="use-case-technology">
                    <FaChartLine className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Contextual Understanding</div>
                  </li>
                  <li className="use-case-technology">
                    <FaServer className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Secure Cloud Infrastructure</div>
                  </li>
                  <li className="use-case-technology">
                    <FaShieldAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">HIPAA-Compliant Security</div>
                  </li>
                  <li className="use-case-technology">
                    <FaCloudUploadAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">EHR Integration Framework</div>
                  </li>
                  <li className="use-case-technology">
                    <FaMobileAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Multi-Device Support</div>
                  </li>
                </ul>
              </div>

              <Card className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to <GradientText>Transform</GradientText> Your Clinical Workflow?</h3>
                <p className="use-case-cta-text">Contact us today to schedule a demonstration and discover how our AI-powered Voice Assistant solution can benefit your organization.</p>
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
            <Link to="/solutions/conversational-assistant" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaComments className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Conversational Assistant</h3>
                <p className="related-use-case-description">
                  AI-powered conversational interfaces that enable natural language interactions for patients and providers, enhancing engagement and access to care.
                </p>
                <div className="related-use-case-link">
                  Learn More <FaArrowRight className="related-use-case-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/prior-authorization" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaFileAlt className="related-use-case-image-icon" />
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

            <Link to="/solutions/clinical-decision-support" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaUserMd className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Clinical Decision Support</h3>
                <p className="related-use-case-description">
                  AI-powered systems that provide evidence-based recommendations to clinicians at the point of care, improving decision-making.
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

export default VoiceAssistantUseCase;