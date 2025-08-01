import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowRight, FaImage, FaCheckCircle, FaChartLine, FaRobot, FaServer, FaShieldAlt, FaCloudUploadAlt, FaMobileAlt, FaBrain, FaDna, FaHeartbeat } from 'react-icons/fa';
import '../styles/UseCase.css';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const MedicalImagingUseCase = () => {
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
                <span className="use-case-breadcrumb-current">Medical Imaging Analysis</span>
              </div>
              <h1 className="use-case-hero-title">
                AI-Powered <GradientText fontWeight="700">Medical Imaging Analysis</GradientText>
              </h1>
              <p className="use-case-hero-description">
                AI solutions helping radiologists detect abnormalities with greater accuracy and efficiency, improving diagnostics and patient outcomes.
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
                    Medical imaging provides essential visual information for diagnosis, but increasing volume and complexity create challenges for radiologists.
                  </p>
                  <p>
                    Our AI solution assists in interpreting X-rays, CT scans, MRIs, and ultrasounds. It automates abnormality detection, enhances accuracy, reduces interpretation time, and prioritizes urgent cases.
                  </p>
                  <motion.div
                    className="use-case-image-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="use-case-image use-case-custom-image">
                      <div className="medical-imaging-visual">
                        <div className="scan-display">
                          <div className="scan-screen">
                            <div className="scan-grid">
                              <div className="scan-highlight pulse-highlight"></div>
                            </div>
                          </div>
                          <div className="scan-controls">
                            <div className="control-button"></div>
                            <div className="control-button"></div>
                            <div className="control-button"></div>
                          </div>
                        </div>
                        <div className="ai-overlay">
                          <div className="ai-detection"></div>
                          <div className="ai-badge">
                            <FaBrain style={{ color: 'var(--primary-color)', fontSize: '1.8rem' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <p>
                    The system integrates with existing PACS and RIS infrastructure, ensuring minimal workflow disruption while maximizing value.
                  </p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Key Capabilities</h2>
                <div className="use-case-section-content">
                  <p>Key capabilities:</p>
                  <ul>
                    <li><strong>Abnormality Detection:</strong> Identifies potential nodules, masses, fractures, and other findings.</li>
                    <li><strong>Quantitative Analysis:</strong> Provides measurements of anatomical structures and features.</li>
                    <li><strong>Prioritization:</strong> Flags critical findings for immediate attention.</li>
                    <li><strong>Comparative Analysis:</strong> Compares current images with prior studies to track changes.</li>
                    <li><strong>Structured Reporting:</strong> Generates preliminary reports with findings and recommendations.</li>
                    <li><strong>Quality Assurance:</strong> Ensures image quality meets standards.</li>
                  </ul>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">99.2%</div>
                  <div className="use-case-stat-label">Detection Accuracy</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">43%</div>
                  <div className="use-case-stat-label">Reduction in Reading Time</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">28%</div>
                  <div className="use-case-stat-label">Increase in Diagnostic Confidence</div>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Implementation Process</h2>
                <div className="use-case-section-content">
                  <p>Implementation process:</p>
                  <ol>
                    <li><strong>Assessment:</strong> Evaluate your imaging infrastructure and needs.</li>
                    <li><strong>Customization:</strong> Tailor solution to your requirements and integrate with existing systems.</li>
                    <li><strong>Training:</strong> Fine-tune AI models using your historical imaging data.</li>
                    <li><strong>Validation:</strong> Verify performance against radiologist interpretations.</li>
                    <li><strong>Deployment:</strong> Implement in phases, starting with pilot program.</li>
                    <li><strong>Monitoring:</strong> Continuously optimize performance.</li>
                  </ol>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "The AI system transformed our radiology department with reduced interpretation time and increased diagnostic confidence. It has helped identify critical findings that might have been missed, potentially saving lives."
                </p>
                <div className="use-case-quote-author">Dr. Sarah Johnson</div>
                <div className="use-case-quote-position">Chief of Radiology, MMC</div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Benefits</h2>
                <div className="use-case-section-content">
                  <p><strong>For Radiologists:</strong></p>
                  <ul>
                    <li>Reduced interpretation time</li>
                    <li>Enhanced diagnostic accuracy</li>
                    <li>Prioritization of urgent cases</li>
                  </ul>
                  
                  <p><strong>For Healthcare Organizations:</strong></p>
                  <ul>
                    <li>Improved efficiency and resource use</li>
                    <li>Reduced turnaround times</li>
                    <li>Enhanced quality of care</li>
                  </ul>
                  
                  <p><strong>For Patients:</strong></p>
                  <ul>
                    <li>Faster diagnosis and treatment</li>
                    <li>Fewer repeat imaging needs</li>
                    <li>Better treatment planning</li>
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
                    <div className="use-case-highlight-text">99.2% accuracy in detecting abnormalities</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">43% reduction in image reading time</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Seamless integration with existing PACS/RIS</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Support for multiple imaging modalities</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Automated structured reporting</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Continuous learning and improvement</div>
                  </li>
                </ul>
              </div>

              <div className="use-case-sidebar-section">
                <h3 className="use-case-sidebar-title">Technologies Used</h3>
                <ul className="use-case-technologies">
                  <li className="use-case-technology">
                    <FaBrain className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Deep Learning Neural Networks</div>
                  </li>
                  <li className="use-case-technology">
                    <FaRobot className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Computer Vision Algorithms</div>
                  </li>
                  <li className="use-case-technology">
                    <FaChartLine className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Advanced Data Analytics</div>
                  </li>
                  <li className="use-case-technology">
                    <FaServer className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Scalable Cloud Infrastructure</div>
                  </li>
                  <li className="use-case-technology">
                    <FaShieldAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">HIPAA-Compliant Security</div>
                  </li>
                  <li className="use-case-technology">
                    <FaCloudUploadAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">DICOM Integration</div>
                  </li>
                  <li className="use-case-technology">
                    <FaMobileAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Mobile Viewing Capabilities</div>
                  </li>
                </ul>
              </div>

              <Card className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to <GradientText>Transform</GradientText> Imaging?</h3>
                <p className="use-case-cta-text">Contact us to schedule a demo of our AI-powered imaging solution.</p>
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
            <Link to="/solutions/predictive-diagnostics" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaBrain className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Predictive Diagnostics</h3>
                <p className="related-use-case-description">
                  Algorithms predicting disease onset and progression for earlier intervention and personalized treatment.
                </p>
                <div className="related-use-case-link">
                  Learn More <FaArrowRight className="related-use-case-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/genomic-analysis" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaDna className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Genomic Analysis</h3>
                <p className="related-use-case-description">
                  AI tools analyzing genomic data to identify markers, predict drug responses, and enable precision medicine.
                </p>
                <div className="related-use-case-link">
                  Learn More <FaArrowRight className="related-use-case-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/patient-monitoring" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaHeartbeat className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Remote Patient Monitoring</h3>
                <p className="related-use-case-description">
                  Systems for monitoring patient vital signs and health metrics with real-time alerts for critical changes.
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

export default MedicalImagingUseCase;