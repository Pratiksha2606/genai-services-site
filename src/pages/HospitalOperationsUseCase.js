import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaImage, FaCheckCircle, FaHospital, FaChartLine, FaCalendarAlt, FaUserMd, FaBed, FaClock } from 'react-icons/fa';
import '../styles/UseCase.css';

const HospitalOperationsUseCase = () => {
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
            <span className="use-case-breadcrumb-current">Hospital Operations Optimization</span>
          </div>
          <h1 className="use-case-hero-title">AI-Powered Hospital Operations Optimization</h1>
          <p className="use-case-hero-description">
            Our intelligent operations solutions use AI to optimize hospital workflows, resource allocation, and capacity management, improving efficiency and reducing costs while enhancing patient care.
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
                    Hospital operations involve complex, interconnected workflows that impact both operational efficiency and patient outcomes. Our AI-powered Hospital Operations Optimization solution helps healthcare facilities streamline processes, allocate resources effectively, and improve overall performance.
                  </p>
                  <p>
                    By analyzing historical data, real-time inputs, and predictive models, our solution provides actionable insights for patient flow management, staff scheduling, resource utilization, and capacity planning, enabling data-driven decision-making at all levels of hospital administration.
                  </p>
                  <div className="use-case-image-container">
                    <div className="use-case-image">
                      <FaImage className="use-case-image-icon" />
                    </div>
                  </div>
                  <p>
                    The system integrates with existing hospital information systems (HIS), electronic health records (EHR), and other operational platforms, providing a unified view of hospital performance and enabling coordinated optimization across departments.
                  </p>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">32%</div>
                  <div className="use-case-stat-label">Reduction in Wait Times</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">24%</div>
                  <div className="use-case-stat-label">Improved Resource Utilization</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">$5.8M</div>
                  <div className="use-case-stat-label">Annual Cost Savings</div>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "The hospital operations platform has transformed how we manage our facility. We've seen dramatic improvements in patient flow, reduced wait times in the ED, and more efficient use of our resources. The predictive capabilities have been particularly valuable for staffing and capacity planning."
                </p>
                <div className="use-case-quote-author">James Wilson</div>
                <div className="use-case-quote-position">Chief Operations Officer, Metropolitan Hospital</div>
              </div>
            </div>

            <div className="use-case-sidebar">
              <div className="use-case-sidebar-section">
                <h3 className="use-case-sidebar-title">Key Highlights</h3>
                <ul className="use-case-highlights">
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Intelligent patient flow management</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Predictive capacity planning</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Optimized staff scheduling</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Resource utilization analytics</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Real-time operational dashboards</div>
                  </li>
                </ul>
              </div>

              <div className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to Transform Your Hospital Operations?</h3>
                <p className="use-case-cta-text">Contact us today to schedule a demonstration and discover how our AI-powered Hospital Operations Optimization solution can benefit your organization.</p>
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
      </section>
    </div>
  );
};

export default HospitalOperationsUseCase;