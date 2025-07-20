import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaImage, FaCheckCircle, FaUserMd, FaChartLine, FaClipboardCheck, FaTabletAlt, FaDatabase, FaLaptopMedical } from 'react-icons/fa';
import '../styles/UseCase.css';

const ClinicalDecisionSupportUseCase = () => {
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
            <span className="use-case-breadcrumb-current">Clinical Decision Support</span>
          </div>
          <h1 className="use-case-hero-title">AI-Powered Clinical Decision Support</h1>
          <p className="use-case-hero-description">
            Our intelligent clinical decision support solutions use AI to provide evidence-based recommendations to clinicians at the point of care, improving decision-making and patient outcomes.
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
                    Clinical decision-making is complex, requiring the integration of patient data, medical knowledge, and best practices. Our AI-powered Clinical Decision Support solution helps clinicians make more informed decisions by providing evidence-based recommendations at the point of care.
                  </p>
                  <p>
                    By analyzing patient data, medical literature, clinical guidelines, and treatment outcomes, our solution delivers personalized recommendations for diagnosis, treatment planning, medication management, and preventive care, enhancing clinical decision-making and improving patient outcomes.
                  </p>
                  <div className="use-case-image-container">
                    <div className="use-case-image">
                      <FaImage className="use-case-image-icon" />
                    </div>
                  </div>
                  <p>
                    The system integrates seamlessly with existing electronic health record (EHR) systems and clinical workflows, making it easy for healthcare providers to access AI-powered insights within their familiar work environment.
                  </p>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">37%</div>
                  <div className="use-case-stat-label">Reduction in Medical Errors</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">28%</div>
                  <div className="use-case-stat-label">Improved Adherence to Guidelines</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">22%</div>
                  <div className="use-case-stat-label">Decrease in Treatment Costs</div>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "The clinical decision support system has become an indispensable tool in our practice. It helps us stay current with the latest evidence, consider all relevant factors in complex cases, and avoid potential errors. Most importantly, it has improved our patients' outcomes while making our workflows more efficient."
                </p>
                <div className="use-case-quote-author">Dr. Robert Chen</div>
                <div className="use-case-quote-position">Chief Medical Information Officer, Regional Health System</div>
              </div>
            </div>

            <div className="use-case-sidebar">
              <div className="use-case-sidebar-section">
                <h3 className="use-case-sidebar-title">Key Highlights</h3>
                <ul className="use-case-highlights">
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Evidence-based clinical recommendations</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Personalized treatment suggestions</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Medication interaction alerts</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Seamless EHR integration</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Continuous learning from outcomes</div>
                  </li>
                </ul>
              </div>

              <div className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to Transform Clinical Decision-Making?</h3>
                <p className="use-case-cta-text">Contact us today to schedule a demonstration and discover how our AI-powered Clinical Decision Support solution can benefit your organization.</p>
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
                <FaLaptopMedical className="related-use-case-image-icon" />
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

export default ClinicalDecisionSupportUseCase;