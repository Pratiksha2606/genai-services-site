import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaProjectDiagram, FaCheckCircle, FaChartLine, FaServer, FaShieldAlt, FaCloudUploadAlt, FaMobileAlt, FaBrain, FaDatabase, FaNetworkWired, FaUserMd, FaHospital, FaFileAlt } from 'react-icons/fa';
import '../styles/UseCase.css';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const SpectraUseCase = () => {
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
                <span className="use-case-breadcrumb-current">Spectra</span>
              </div>
              <h1 className="use-case-hero-title">
                <GradientText fontWeight="700">Spectra</GradientText> Analytics Platform
              </h1>
              <p className="use-case-hero-description">
                Our advanced analytics platform integrates diverse healthcare data sources to provide comprehensive insights and decision support, enabling data-driven healthcare transformation.
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
                    Healthcare organizations are awash in data from electronic health records, claims, financial systems, operational platforms, and patient-generated sources. However, this data often exists in silos, making it difficult to derive meaningful insights that can drive improvements in clinical outcomes, operational efficiency, and financial performance.
                  </p>
                  <p>
                    Spectra is our comprehensive healthcare analytics platform that integrates data from disparate sources into a unified, intelligent system. Using advanced AI and machine learning algorithms, Spectra transforms raw data into actionable insights, predictive models, and automated workflows that enable healthcare organizations to make data-driven decisions across clinical, operational, and financial domains.
                  </p>
                  <motion.div
                    className="use-case-image-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="use-case-image use-case-custom-image">
                      <div className="spectra-visual">
                        <div className="data-sources">
                          <div className="data-source source1">
                            <FaDatabase style={{ color: 'white', fontSize: '1.4rem' }} />
                            <div className="source-label">EHR</div>
                          </div>
                          <div className="data-source source2">
                            <FaFileAlt style={{ color: 'white', fontSize: '1.4rem' }} />
                            <div className="source-label">Claims</div>
                          </div>
                          <div className="data-source source3">
                            <FaChartLine style={{ color: 'white', fontSize: '1.4rem' }} />
                            <div className="source-label">Finance</div>
                          </div>
                        </div>
                        <div className="data-flow">
                          <div className="flow-line line1"></div>
                          <div className="flow-line line2"></div>
                          <div className="flow-line line3"></div>
                        </div>
                        <div className="analytics-engine">
                          <div className="engine-core">
                            <FaProjectDiagram style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }} />
                          </div>
                          <div className="engine-pulse"></div>
                        </div>
                        <div className="insights-display">
                          <div className="insight-item">
                            <div className="insight-bar"></div>
                          </div>
                          <div className="insight-item">
                            <div className="insight-bar"></div>
                          </div>
                          <div className="insight-item">
                            <div className="insight-bar"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <p>
                    The platform is designed to be highly scalable, secure, and customizable, allowing healthcare organizations of all sizes to harness the power of their data without requiring extensive data science expertise or infrastructure investments.
                  </p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Interactive Demo</h2>
                <div className="use-case-section-content">
                  <p>Experience how our Spectra Analytics Platform works with this interactive demo:</p>
                  
                  <Button
                    to="/solutions/spectra/demo"
                    variant="primary"
                    style={{ marginBottom: '2rem' }}
                  >
                    Show Demo
                  </Button>
                  
                  <p>Click the button above to open our interactive Spectra Analytics Platform demo in a new page. The demo allows you to explore the comprehensive analytics dashboard, visualize healthcare data, and experience how the platform integrates diverse data sources to provide actionable insights.</p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Key Capabilities</h2>
                <div className="use-case-section-content">
                  <p>Our Spectra Analytics Platform offers a comprehensive set of capabilities:</p>
                  <ul>
                    <li><strong>Data Integration:</strong> Seamlessly combines data from EHRs, claims, financial systems, operational platforms, and patient-generated sources.</li>
                    <li><strong>Advanced Analytics:</strong> Applies machine learning and AI algorithms to identify patterns, trends, and correlations in healthcare data.</li>
                    <li><strong>Predictive Modeling:</strong> Forecasts patient outcomes, resource utilization, and financial performance to enable proactive interventions.</li>
                    <li><strong>Interactive Dashboards:</strong> Provides intuitive, role-based visualizations that make complex data accessible and actionable.</li>
                    <li><strong>Automated Workflows:</strong> Triggers actions and notifications based on data patterns and predefined rules.</li>
                    <li><strong>Natural Language Processing:</strong> Extracts insights from unstructured clinical notes and patient communications.</li>
                  </ul>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">85%</div>
                  <div className="use-case-stat-label">Reduction in Report Creation Time</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">92%</div>
                  <div className="use-case-stat-label">Prediction Accuracy</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">$3.2M</div>
                  <div className="use-case-stat-label">Average Annual Savings</div>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Implementation Process</h2>
                <div className="use-case-section-content">
                  <p>Our implementation process is designed to ensure a smooth integration with your existing systems and workflows:</p>
                  <ol>
                    <li><strong>Assessment:</strong> We conduct a thorough assessment of your current data landscape, analytics needs, and strategic objectives.</li>
                    <li><strong>Data Strategy:</strong> We develop a comprehensive data strategy that addresses data governance, quality, integration, and security.</li>
                    <li><strong>Platform Configuration:</strong> Our team configures the Spectra platform to meet your specific requirements and use cases.</li>
                    <li><strong>Data Integration:</strong> We establish secure connections to your data sources and implement ETL processes to ensure data quality and consistency.</li>
                    <li><strong>Model Development:</strong> We develop and validate predictive models and analytics algorithms tailored to your specific needs.</li>
                    <li><strong>Dashboard Creation:</strong> We design intuitive dashboards and reports that provide actionable insights to different stakeholders.</li>
                    <li><strong>Training & Adoption:</strong> We provide comprehensive training and change management support to ensure successful adoption.</li>
                    <li><strong>Ongoing Support:</strong> Our team provides continuous support, optimization, and enhancement of the platform based on your evolving needs.</li>
                  </ol>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "Spectra has transformed how we use data at our health system. What used to take weeks of manual analysis now happens automatically in real-time. We've been able to identify opportunities for improvement that were previously invisible to us, resulting in better patient outcomes and significant cost savings."
                </p>
                <div className="use-case-quote-author">Sarah Johnson</div>
                <div className="use-case-quote-position">Chief Analytics Officer, Metropolitan Health System</div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Benefits</h2>
                <div className="use-case-section-content">
                  <p><strong>Clinical Benefits:</strong></p>
                  <ul>
                    <li>Improved patient outcomes through data-driven clinical decision support</li>
                    <li>Enhanced population health management and risk stratification</li>
                    <li>More effective care coordination and care management</li>
                    <li>Reduced clinical variation and improved adherence to best practices</li>
                    <li>Earlier identification of adverse events and complications</li>
                  </ul>
                  
                  <p><strong>Operational Benefits:</strong></p>
                  <ul>
                    <li>Optimized resource allocation and capacity management</li>
                    <li>Streamlined workflows and reduced administrative burden</li>
                    <li>Improved supply chain management and inventory optimization</li>
                    <li>Enhanced staff productivity and satisfaction</li>
                    <li>More efficient patient flow and reduced wait times</li>
                  </ul>
                  
                  <p><strong>Financial Benefits:</strong></p>
                  <ul>
                    <li>Reduced costs through operational efficiencies and waste reduction</li>
                    <li>Improved revenue cycle management and cash flow</li>
                    <li>More accurate financial forecasting and budgeting</li>
                    <li>Enhanced contract performance and payer negotiations</li>
                    <li>Better management of value-based care arrangements</li>
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
                    <div className="use-case-highlight-text">Unified data platform integrating all healthcare data sources</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">92% accuracy in predictive models</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">85% reduction in report creation time</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">$3.2M average annual savings for clients</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Seamless integration with major EHR systems</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">HIPAA-compliant and HITRUST certified</div>
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
                    <div className="use-case-technology-text">Advanced Analytics</div>
                  </li>
                  <li className="use-case-technology">
                    <FaDatabase className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Big Data Architecture</div>
                  </li>
                  <li className="use-case-technology">
                    <FaServer className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Cloud Infrastructure</div>
                  </li>
                  <li className="use-case-technology">
                    <FaShieldAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Enterprise Security</div>
                  </li>
                  <li className="use-case-technology">
                    <FaNetworkWired className="use-case-technology-icon" />
                    <div className="use-case-technology-text">API Integration Framework</div>
                  </li>
                  <li className="use-case-technology">
                    <FaMobileAlt className="use-case-technology-icon" />
                    <div className="use-case-technology-text">Mobile Accessibility</div>
                  </li>
                </ul>
              </div>

              <Card className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to <GradientText>Transform</GradientText> Your Healthcare Data?</h3>
                <p className="use-case-cta-text">Contact us today to schedule a demonstration and discover how our Spectra Analytics Platform can benefit your organization.</p>
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
              <Link to="/solutions/pcov" className="related-use-case-card">
                <div className="related-use-case-image">
                  <FaChartLine className="related-use-case-image-icon" />
                </div>
                <div className="related-use-case-content">
                  <h3 className="related-use-case-title">PCOV</h3>
                  <p className="related-use-case-description">
                    Patient-Centered Outcome Validation system that measures and analyzes treatment effectiveness based on real-world patient outcomes.
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
                  <h3 className="related-use-case-title">Hospital Operations</h3>
                  <p className="related-use-case-description">
                    AI solutions for optimizing hospital workflows, resource allocation, and capacity management to improve efficiency and reduce costs.
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

export default SpectraUseCase;