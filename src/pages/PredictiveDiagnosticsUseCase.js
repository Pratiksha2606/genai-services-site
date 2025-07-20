import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaImage, FaCheckCircle, FaBrain, FaChartLine, FaDatabase, FaServer, FaShieldAlt, FaCloudUploadAlt } from 'react-icons/fa';
import '../styles/UseCase.css';

const PredictiveDiagnosticsUseCase = () => {
  return (
    <div className="use-case-page">
      {/* Hero Section */}
      <section className="use-case-hero">
        <div className="use-case-hero-overlay"></div>
        <div className="use-case-hero-container">
          <div className="use-case-breadcrumb">
            <Link to="/" className="use-case-breadcrumb-link">Home</Link>
            <span className="use-case-breadcrumb-separator">/</span>
            <Link to="/solutions" className="use-case-breadcrumb-link">Solutions</Link>
            <span className="use-case-breadcrumb-separator">/</span>
            <span className="use-case-breadcrumb-current">Predictive Diagnostics</span>
          </div>
          <h1 className="use-case-hero-title">AI-Powered Predictive Diagnostics</h1>
          <p className="use-case-hero-description">
            Our advanced predictive diagnostics solutions use AI to identify disease risks before symptoms appear, enabling earlier intervention and personalized treatment plans.
          </p>
        </div>
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
                    Early disease detection is critical for improving patient outcomes and reducing healthcare costs. Our AI-powered Predictive Diagnostics solution analyzes patient data to identify disease risks and predict progression, enabling proactive healthcare interventions.
                  </p>
                  <p>
                    By leveraging machine learning algorithms trained on vast datasets of patient records, lab results, genetic information, and lifestyle factors, our solution can identify subtle patterns and risk factors that might be missed by traditional diagnostic methods.
                  </p>
                  <div className="use-case-image-container">
                    <div className="use-case-image">
                      <FaImage className="use-case-image-icon" />
                    </div>
                  </div>
                  <p>
                    The system integrates seamlessly with existing electronic health record (EHR) systems, making it easy for healthcare providers to implement and use as part of their standard workflows.
                  </p>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">85%</div>
                  <div className="use-case-stat-label">Prediction Accuracy</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">67%</div>
                  <div className="use-case-stat-label">Earlier Detection</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">$3.2M</div>
                  <div className="use-case-stat-label">Annual Savings</div>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "The predictive diagnostics platform has revolutionized how we approach patient care. We're now able to identify high-risk patients much earlier and implement preventive measures before conditions worsen, resulting in better outcomes and significant cost savings."
                </p>
                <div className="use-case-quote-author">Dr. Michael Chen</div>
                <div className="use-case-quote-position">Chief Medical Officer, Regional Health Network</div>
              </div>
            </div>

            <div className="use-case-sidebar">
              <div className="use-case-sidebar-section">
                <h3 className="use-case-sidebar-title">Key Highlights</h3>
                <ul className="use-case-highlights">
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">85% accuracy in predicting disease onset</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Seamless EHR integration</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Personalized risk assessments</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Early intervention recommendations</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Continuous learning from outcomes</div>
                  </li>
                </ul>
              </div>

              <div className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to Transform Your Predictive Capabilities?</h3>
                <p className="use-case-cta-text">Contact us today to schedule a demonstration and discover how our AI-powered Predictive Diagnostics solution can benefit your organization.</p>
                <Link to="/contact" className="use-case-cta-button">Request a Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      <section className="related-use-cases">
        <div className="related-use-cases-container">
          <h2 className="related-use-cases-title">Related Healthcare AI Solutions</h2>
          <div className="related-use-cases-grid">
            <Link to="/solutions/medical-imaging" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaImage className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Medical Imaging Analysis</h3>
                <p className="related-use-case-description">
                  AI-powered analysis of medical images for faster, more accurate diagnosis of conditions across radiology, pathology, and more.
                </p>
                <div className="related-use-case-link">
                  Learn More <FaArrowRight className="related-use-case-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/genomic-analysis" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaDatabase className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Genomic Analysis</h3>
                <p className="related-use-case-description">
                  AI tools for analyzing genomic data to identify disease markers, predict drug responses, and enable precision medicine.
                </p>
                <div className="related-use-case-link">
                  Learn More <FaArrowRight className="related-use-case-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/patient-monitoring" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaChartLine className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Remote Patient Monitoring</h3>
                <p className="related-use-case-description">
                  Intelligent systems for continuous monitoring of patient vital signs and health metrics, with real-time alerts for critical changes.
                </p>
                <div className="related-use-case-link">
                  Learn More <FaArrowRight className="related-use-case-link-icon" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PredictiveDiagnosticsUseCase;