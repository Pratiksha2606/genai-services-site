import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaFileAlt, FaCheckCircle, FaChartLine, FaRobot, FaServer, FaShieldAlt, FaCloudUploadAlt, FaMobileAlt, FaBrain, FaMicrophone, FaUserMd, FaHospital } from 'react-icons/fa';
import '../styles/UseCase.css';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';


const PriorAuthorizationUseCase = () => {

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
                <span className="use-case-breadcrumb-current">Prior Authorization</span>
              </div>
              <h1 className="use-case-hero-title">
                AI-Powered <GradientText fontWeight="700">Prior Authorization</GradientText>
              </h1>
              <p className="use-case-hero-description">
                AI solution streamlining prior authorization, reducing burden, accelerating care, and improving outcomes.
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
                    Prior authorization requires providers to obtain insurer approval before treatments are covered, often delaying care and increasing costs.
                  </p>
                  <p>
                    Our AI solution uses NLP, machine learning, and automation to streamline this process. It analyzes documentation, policies, and approval patterns to predict requirements, pre-populate forms, and automatically approve straightforward cases.
                  </p>
                  <motion.div
                    className="use-case-image-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="use-case-image use-case-custom-image">
                      <div className="prior-auth-visual">
                        <div className="document-stack">
                          <div className="document doc1">
                            <div className="doc-header"></div>
                            <div className="doc-line"></div>
                            <div className="doc-line"></div>
                            <div className="doc-line"></div>
                          </div>
                          <div className="document doc2">
                            <div className="doc-header"></div>
                            <div className="doc-line"></div>
                            <div className="doc-line"></div>
                          </div>
                          <div className="document doc3">
                            <div className="doc-header"></div>
                            <div className="doc-line"></div>
                            <div className="doc-line"></div>
                            <div className="doc-line"></div>
                          </div>
                        </div>
                        <div className="approval-stamp">
                          <FaCheckCircle style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }} />
                        </div>
                        <div className="processing-arrow">
                          <FaArrowRight style={{ color: 'white', fontSize: '2rem' }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <p>
                    The system integrates with EHR systems and payer portals, minimizing workflow disruption while maximizing value.
                  </p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Interactive Demo</h2>
                <div className="use-case-section-content">
                  <p>See our solution in action:</p>
                  
                  <Button
                    to="/solutions/prior-authorization/demo"
                    variant="primary"
                    style={{ marginBottom: '2rem' }}
                  >
                    Show Demo
                  </Button>
                  
                  <p>Experience the streamlined authorization process firsthand.</p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Key Capabilities</h2>
                <div className="use-case-section-content">
                  <p>Key capabilities:</p>
                  <ul>
                    <li><strong>Form Completion:</strong> Extracts information from documentation to pre-populate forms.</li>
                    <li><strong>Policy Matching:</strong> Matches policies with clinical data to determine eligibility.</li>
                    <li><strong>Predictive Approvals:</strong> Predicts outcomes based on patterns and guidelines.</li>
                    <li><strong>Automated Submissions:</strong> Submits requests to payer portals and tracks status.</li>
                    <li><strong>Status Tracking:</strong> Provides real-time updates and identifies potential issues.</li>
                    <li><strong>Appeals Assistance:</strong> Generates evidence-based appeals for denied authorizations.</li>
                  </ul>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">85%</div>
                  <div className="use-case-stat-label">Reduction in Processing Time</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">92%</div>
                  <div className="use-case-stat-label">Accuracy Rate</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">$1.2M</div>
                  <div className="use-case-stat-label">Annual Savings for Average Hospital</div>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Implementation Process</h2>
                <div className="use-case-section-content">
                  <p>Implementation process:</p>
                  <ol>
                    <li><strong>Assessment:</strong> Evaluate your current processes and pain points.</li>
                    <li><strong>Customization:</strong> Tailor solution to your needs and integrate with existing systems.</li>
                    <li><strong>Training:</strong> Train AI models using your historical data.</li>
                    <li><strong>Validation:</strong> Verify performance against manual processes.</li>
                    <li><strong>Deployment:</strong> Implement in phases, starting with pilot program.</li>
                    <li><strong>Monitoring:</strong> Continuously optimize performance.</li>
                  </ol>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "The AI system transformed our practice. What took hours now takes minutes, allowing staff to focus on patient care. The reduction in delays has improved satisfaction and outcomes."
                </p>
                <div className="use-case-quote-author">Dr. Michael Chen</div>
                <div className="use-case-quote-position">CMO, Westside Medical</div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Benefits</h2>
                <div className="use-case-section-content">
                  <p><strong>For Healthcare Providers:</strong></p>
                  <ul>
                    <li>Reduced administrative burden</li>
                    <li>Faster approvals and reduced delays</li>
                    <li>Decreased denials and improved revenue</li>
                  </ul>
                  
                  <p><strong>For Payers:</strong></p>
                  <ul>
                    <li>Streamlined processes and reduced costs</li>
                    <li>Consistent application of policies</li>
                    <li>Better utilization management</li>
                  </ul>
                  
                  <p><strong>For Patients:</strong></p>
                  <ul>
                    <li>Faster access to care</li>
                    <li>Reduced out-of-pocket expenses</li>
                    <li>Better health outcomes</li>
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
                    <div className="use-case-highlight-text">85% reduction in prior authorization processing time</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">92% accuracy in predicting authorization outcomes</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Seamless integration with major EHR systems</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Direct connectivity to major payer portals</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Automated appeals generation with 65% success rate</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">$1.2M average annual savings per hospital</div>
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
                    <div className="use-case-technology-text">Machine Learning Algorithms</div>
                  </li>
                  <li className="use-case-technology">
                    <FaChartLine className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Predictive Analytics</div>
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
                    <div className="use-case-technology-text">API Integration Framework</div>
                  </li>
                  <li className="use-case-technology">
                    <FaMobileAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Mobile Status Tracking</div>
                  </li>
                </ul>
              </div>

              <Card className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to <GradientText>Transform</GradientText> Authorization?</h3>
                <p className="use-case-cta-text">Contact us to schedule a demo of our AI-powered solution.</p>
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
              <h2 className="related-use-cases-title">Related <GradientText>AI Solutions</GradientText></h2>
            </motion.div>
            <div className="related-use-cases-grid">
            <Link to="/solutions/voice-assistant" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaMicrophone className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Voice Assistant</h3>
                <p className="related-use-case-description">
                  Voice assistants helping providers document encounters, access information, and perform tasks hands-free.
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
                  Systems providing evidence-based recommendations to clinicians at point of care.
                </p>
                <div className="related-use-case-link">
                  Learn More <FaArrowRight className="related-use-case-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/hospital-operations" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaHospital className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Hospital Operations Optimization</h3>
                <p className="related-use-case-description">
                  Solutions optimizing hospital workflows, resource allocation, and capacity management.
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

export default PriorAuthorizationUseCase;