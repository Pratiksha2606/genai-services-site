import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaImage, FaCheckCircle, FaHeartbeat, FaChartLine, FaMobileAlt, FaWifi, FaCloudUploadAlt, FaBell } from 'react-icons/fa';
import '../styles/UseCase.css';

const PatientMonitoringUseCase = () => {
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
            <span className="use-case-breadcrumb-current">Remote Patient Monitoring</span>
          </div>
          <h1 className="use-case-hero-title">AI-Powered Remote Patient Monitoring</h1>
          <p className="use-case-hero-description">
            Our intelligent remote monitoring solutions use AI to continuously track patient vital signs and health metrics, providing real-time alerts for critical changes and enabling proactive care.
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
                    Remote patient monitoring is transforming healthcare delivery by extending care beyond traditional clinical settings. Our AI-powered Remote Patient Monitoring solution enables continuous tracking of patient health metrics, early detection of deterioration, and timely interventions.
                  </p>
                  <p>
                    By leveraging IoT devices, wearable sensors, and advanced AI algorithms, our solution provides healthcare providers with real-time insights into patient health status, enabling proactive care management and reducing hospital readmissions.
                  </p>
                  <div className="use-case-image-container">
                    <div className="use-case-image">
                      <FaImage className="use-case-image-icon" />
                    </div>
                  </div>
                  <p>
                    The system integrates seamlessly with existing electronic health record (EHR) systems and clinical workflows, making it easy for healthcare providers to implement and use as part of their standard care protocols.
                  </p>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">54%</div>
                  <div className="use-case-stat-label">Reduction in Readmissions</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">72%</div>
                  <div className="use-case-stat-label">Earlier Intervention</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">$4.2M</div>
                  <div className="use-case-stat-label">Annual Cost Savings</div>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "The remote patient monitoring platform has been a game-changer for our chronic disease management program. We're now able to detect subtle changes in patient conditions days before they would typically present at the hospital, allowing for early interventions that prevent serious complications."
                </p>
                <div className="use-case-quote-author">Dr. Emily Thompson</div>
                <div className="use-case-quote-position">Director of Telehealth, Community Health Network</div>
              </div>
            </div>

            <div className="use-case-sidebar">
              <div className="use-case-sidebar-section">
                <h3 className="use-case-sidebar-title">Key Highlights</h3>
                <ul className="use-case-highlights">
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Continuous monitoring of vital signs</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">AI-powered anomaly detection</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Real-time alerts for critical changes</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Seamless EHR integration</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Patient-friendly mobile application</div>
                  </li>
                </ul>
              </div>

              <div className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to Transform Your Patient Care?</h3>
                <p className="use-case-cta-text">Contact us today to schedule a demonstration and discover how our AI-powered Remote Patient Monitoring solution can benefit your organization.</p>
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

            <Link to="/solutions/predictive-diagnostics" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaChartLine className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Predictive Diagnostics</h3>
                <p className="related-use-case-description">
                  Advanced algorithms that predict disease onset and progression, enabling earlier intervention and personalized treatment plans.
                </p>
                <div className="related-use-case-link">
                  Learn More <FaArrowRight className="related-use-case-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/hospital-operations" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaBell className="related-use-case-image-icon" />
              </div>
              <div className="related-use-case-content">
                <h3 className="related-use-case-title">Hospital Operations Optimization</h3>
                <p className="related-use-case-description">
                  AI solutions for optimizing hospital workflows, resource allocation, and capacity management to improve efficiency and reduce costs.
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

export default PatientMonitoringUseCase;