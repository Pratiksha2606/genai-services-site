import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaBrain, FaXRay, FaDna, FaHospital, FaUserMd, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import '../styles/Solutions.css';

const Solutions = () => {
  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero-overlay"></div>
        <div className="solutions-hero-container">
          <h1 className="solutions-hero-title">AI Solutions for Healthcare</h1>
          <p className="solutions-hero-description">
            Transforming healthcare delivery with cutting-edge artificial intelligence solutions that improve patient outcomes, enhance operational efficiency, and accelerate medical research.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="solutions-content">
        <div className="solutions-container">
          <div className="solutions-intro">
            <h2 className="solutions-intro-title">Revolutionizing Healthcare with AI</h2>
            <p className="solutions-intro-description">
              Our AI solutions for healthcare are designed to address the most pressing challenges in the industry, from diagnosis and treatment to patient care and administrative efficiency.
            </p>
          </div>

          <div className="solutions-grid">
            <Link to="/solutions/medical-imaging" className="solution-card">
              <div className="solution-image">
                <FaXRay className="solution-image-icon" />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Medical Imaging Analysis</h3>
                <p className="solution-description">
                  AI-powered analysis of medical images for faster, more accurate diagnosis of conditions across radiology, pathology, and more.
                </p>
                <div className="solution-link">
                  Learn More <FaArrowRight className="solution-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/predictive-diagnostics" className="solution-card">
              <div className="solution-image">
                <FaBrain className="solution-image-icon" />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Predictive Diagnostics</h3>
                <p className="solution-description">
                  Advanced algorithms that predict disease onset and progression, enabling earlier intervention and personalized treatment plans.
                </p>
                <div className="solution-link">
                  Learn More <FaArrowRight className="solution-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/genomic-analysis" className="solution-card">
              <div className="solution-image">
                <FaDna className="solution-image-icon" />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Genomic Analysis</h3>
                <p className="solution-description">
                  AI tools for analyzing genomic data to identify disease markers, predict drug responses, and enable precision medicine.
                </p>
                <div className="solution-link">
                  Learn More <FaArrowRight className="solution-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/patient-monitoring" className="solution-card">
              <div className="solution-image">
                <FaHeartbeat className="solution-image-icon" />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Remote Patient Monitoring</h3>
                <p className="solution-description">
                  Intelligent systems for continuous monitoring of patient vital signs and health metrics, with real-time alerts for critical changes.
                </p>
                <div className="solution-link">
                  Learn More <FaArrowRight className="solution-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/hospital-operations" className="solution-card">
              <div className="solution-image">
                <FaHospital className="solution-image-icon" />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Hospital Operations Optimization</h3>
                <p className="solution-description">
                  AI solutions for optimizing hospital workflows, resource allocation, and capacity management to improve efficiency and reduce costs.
                </p>
                <div className="solution-link">
                  Learn More <FaArrowRight className="solution-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/clinical-decision-support" className="solution-card">
              <div className="solution-image">
                <FaUserMd className="solution-image-icon" />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Clinical Decision Support</h3>
                <p className="solution-description">
                  AI-powered systems that provide evidence-based recommendations to clinicians at the point of care, improving decision-making.
                </p>
                <div className="solution-link">
                  Learn More <FaArrowRight className="solution-link-icon" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Healthcare Use Cases Section */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="healthcare-header">
            <h2 className="healthcare-title">Featured Healthcare AI Use Cases</h2>
            <p className="healthcare-description">
              Explore our most impactful healthcare AI implementations and discover how they're transforming patient care and clinical outcomes.
            </p>
          </div>

          <div className="healthcare-grid">
            <Link to="/solutions/medical-imaging/case-study" className="healthcare-card">
              <div className="healthcare-image">
                <FaXRay className="healthcare-image-icon" />
              </div>
              <div className="healthcare-content">
                <h3 className="healthcare-card-title">AI-Powered Radiology Assistant</h3>
                <p className="healthcare-card-description">
                  Our AI-powered radiology assistant helps radiologists detect abnormalities in medical images with greater accuracy and efficiency.
                </p>
                <div className="healthcare-features">
                  <div className="healthcare-feature">
                    <FaCheckCircle className="healthcare-feature-icon" />
                    <p className="healthcare-feature-text">99.2% accuracy in detecting lung nodules</p>
                  </div>
                  <div className="healthcare-feature">
                    <FaCheckCircle className="healthcare-feature-icon" />
                    <p className="healthcare-feature-text">43% reduction in reading time</p>
                  </div>
                  <div className="healthcare-feature">
                    <FaCheckCircle className="healthcare-feature-icon" />
                    <p className="healthcare-feature-text">Integrated with major PACS systems</p>
                  </div>
                </div>
                <div className="healthcare-link">
                  View Case Study <FaArrowRight className="healthcare-link-icon" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/predictive-diagnostics/case-study" className="healthcare-card">
              <div className="healthcare-image">
                <FaBrain className="healthcare-image-icon" />
              </div>
              <div className="healthcare-content">
                <h3 className="healthcare-card-title">Early Disease Detection Platform</h3>
                <p className="healthcare-card-description">
                  Our predictive analytics platform identifies patients at risk of developing chronic conditions, enabling early intervention.
                </p>
                <div className="healthcare-features">
                  <div className="healthcare-feature">
                    <FaCheckCircle className="healthcare-feature-icon" />
                    <p className="healthcare-feature-text">85% accuracy in predicting diabetes onset</p>
                  </div>
                  <div className="healthcare-feature">
                    <FaCheckCircle className="healthcare-feature-icon" />
                    <p className="healthcare-feature-text">$3.2M annual savings for a 500-bed hospital</p>
                  </div>
                  <div className="healthcare-feature">
                    <FaCheckCircle className="healthcare-feature-icon" />
                    <p className="healthcare-feature-text">Seamless EHR integration</p>
                  </div>
                </div>
                <div className="healthcare-link">
                  View Case Study <FaArrowRight className="healthcare-link-icon" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Healthcare with AI?</h2>
          <p className="cta-description">
            Contact us today to schedule a consultation with our healthcare AI experts and discover how our solutions can improve patient outcomes and operational efficiency.
          </p>
          <Link to="/contact" className="cta-button">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;