import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUserCheck, FaCheckCircle, FaChartLine, FaServer, FaShieldAlt, FaCloudUploadAlt, FaMobileAlt, FaBrain, FaDatabase, FaNetworkWired, FaUserMd, FaHospital, FaProjectDiagram, FaFileAlt } from 'react-icons/fa';
import '../styles/UseCase.css';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const PCOVUseCase = () => {
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
                <span className="use-case-breadcrumb-current">PCOV</span>
              </div>
              <h1 className="use-case-hero-title">
                <GradientText fontWeight="700">Patient-Centered Outcome Validation</GradientText> (PCOV)
              </h1>
              <p className="use-case-hero-description">
                PCOV system measures treatment effectiveness based on real-world outcomes, enabling personalized medicine and value-based care.
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
                    Traditional approaches rely on clinical trial data and population statistics, which may not reflect how individual patients respond in real-world settings.
                  </p>
                  <p>
                    PCOV addresses this by collecting and analyzing patient-reported outcomes, clinical metrics, and functional assessments. Using advanced analytics and machine learning, it provides understanding of treatment effectiveness at individual and population levels.
                  </p>
                  <motion.div
                    className="use-case-image-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="use-case-image use-case-custom-image">
                      <div className="pcov-visual">
                        <div className="patient-circle">
                          <div className="patient-icon">
                            <FaUserCheck style={{ color: 'white', fontSize: '2.5rem' }} />
                          </div>
                        </div>
                        <div className="data-streams">
                          <div className="data-stream stream1"></div>
                          <div className="data-stream stream2"></div>
                          <div className="data-stream stream3"></div>
                        </div>
                        <div className="outcome-metrics">
                          <div className="metric metric1">
                            <div className="metric-bar"></div>
                            <div className="metric-label">A</div>
                          </div>
                          <div className="metric metric2">
                            <div className="metric-bar"></div>
                            <div className="metric-label">B</div>
                          </div>
                          <div className="metric metric3">
                            <div className="metric-bar"></div>
                            <div className="metric-label">C</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <p>
                    The system helps providers make informed decisions, payers implement value-based models, and patients participate in their care through feedback and insights.
                  </p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Interactive Demo</h2>
                <div className="use-case-section-content">
                  <p>See how our PCOV system works:</p>
                  
                  <Button
                    to="/solutions/pcov/demo"
                    variant="primary"
                    style={{ marginBottom: '2rem' }}
                  >
                    Show Demo
                  </Button>
                  
                  <p>Explore patient outcome data, analyze treatment effectiveness, and see how our system validates real-world outcomes.</p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Key Capabilities</h2>
                <div className="use-case-section-content">
                  <p>Key capabilities:</p>
                  <ul>
                    <li><strong>Outcome Measurement:</strong> Captures clinical, functional, and patient-reported outcomes.</li>
                    <li><strong>Data Integration:</strong> Combines data from EHRs, wearables, apps, and surveys.</li>
                    <li><strong>Outcome Prediction:</strong> Predicts patient responses to treatment options.</li>
                    <li><strong>Effectiveness Validation:</strong> Validates treatments against real-world outcomes.</li>
                    <li><strong>Value-based Care:</strong> Supports value-based payment models.</li>
                    <li><strong>Patient Engagement:</strong> Enables progress tracking and feedback.</li>
                  </ul>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">78%</div>
                  <div className="use-case-stat-label">Improvement in Treatment Selection</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">42%</div>
                  <div className="use-case-stat-label">Reduction in Treatment Failures</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">$2.4M</div>
                  <div className="use-case-stat-label">Annual Savings per 100 Patients</div>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Implementation Process</h2>
                <div className="use-case-section-content">
                  <p>Implementation process:</p>
                  <ol>
                    <li><strong>Assessment:</strong> Evaluate current practices and objectives.</li>
                    <li><strong>Framework Design:</strong> Design outcome measurement framework for your needs.</li>
                    <li><strong>Data Integration:</strong> Connect to existing data sources.</li>
                    <li><strong>Configuration:</strong> Configure platform for your workflows.</li>
                    <li><strong>Model Development:</strong> Develop predictive models using your data.</li>
                    <li><strong>Training:</strong> Train staff on system use.</li>
                    <li><strong>Rollout:</strong> Implement in phases with pilot programs.</li>
                    <li><strong>Optimization:</strong> Monitor and improve over time.</li>
                  </ol>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "PCOV has transformed our care delivery. We understand which treatments work best for which patients and can demonstrate value with real data. Our patients feel heard and empowered in their care journey."
                </p>
                <div className="use-case-quote-author">Dr. Rebecca Martinez</div>
                <div className="use-case-quote-position">Chief Quality Officer, IHP</div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Benefits</h2>
                <div className="use-case-section-content">
                  <p><strong>For Healthcare Providers:</strong></p>
                  <ul>
                    <li>Informed decisions based on real-world data</li>
                    <li>Improved outcomes and reduced failures</li>
                    <li>Better value demonstration to payers</li>
                  </ul>
                  
                  <p><strong>For Payers:</strong></p>
                  <ul>
                    <li>Data-driven value-based payment models</li>
                    <li>Accurate treatment value assessment</li>
                    <li>Reduced spending on ineffective treatments</li>
                  </ul>
                  
                  <p><strong>For Patients:</strong></p>
                  <ul>
                    <li>Personalized treatment recommendations</li>
                    <li>Better understanding of outcomes</li>
                    <li>Active participation in care decisions</li>
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
                    <div className="use-case-highlight-text">78% improvement in treatment selection accuracy</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">42% reduction in treatment failures</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">$2.4M annual savings per 100 patients</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Comprehensive outcome measurement across multiple domains</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Seamless integration with existing clinical workflows</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Patient-centered approach with active engagement tools</div>
                  </li>
                </ul>
              </div>

              <div className="use-case-sidebar-section">
                <h3 className="use-case-sidebar-title">Technologies Used</h3>
                <ul className="use-case-technologies">
                  <li className="use-case-technology">
                    <FaBrain className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Machine Learning Algorithms</div>
                  </li>
                  <li className="use-case-technology">
                    <FaChartLine className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Predictive Analytics</div>
                  </li>
                  <li className="use-case-technology">
                    <FaDatabase className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Real-world Data Platform</div>
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
                    <div className="use-case-technology-text">Patient Engagement Apps</div>
                  </li>
                </ul>
              </div>

              <Card className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to <GradientText>Transform</GradientText> Outcomes?</h3>
                <p className="use-case-cta-text">Contact us to schedule a demo of our PCOV system.</p>
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
              <Link to="/solutions/spectra" className="related-use-case-card">
                <div className="related-use-case-image">
                  <FaProjectDiagram className="related-use-case-image-icon" />
                </div>
                <div className="related-use-case-content">
                  <h3 className="related-use-case-title">Spectra</h3>
                  <p className="related-use-case-description">
                    Analytics platform integrating healthcare data for insights and decision support.
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
                    AI systems providing evidence-based recommendations to clinicians at point of care.
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
                    Streamline prior authorization with AI automation, reducing burden and accelerating care.
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

export default PCOVUseCase;
