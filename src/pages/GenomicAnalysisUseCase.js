import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaImage, FaCheckCircle, FaDna, FaChartLine, FaDatabase, FaServer, FaFlask, FaLaptopMedical } from 'react-icons/fa';
import '../styles/UseCase.css';

const GenomicAnalysisUseCase = () => {
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
            <span className="use-case-breadcrumb-current">Genomic Analysis</span>
          </div>
          <h1 className="use-case-hero-title">AI-Powered Genomic Analysis</h1>
          <p className="use-case-hero-description">
            Our advanced genomic analysis solutions leverage AI to interpret complex genetic data, identify disease markers, predict drug responses, and enable precision medicine.
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
                    Genomic data holds immense potential for personalized healthcare, but its complexity and volume present significant challenges for analysis and interpretation. Our AI-powered Genomic Analysis solution transforms raw genetic data into actionable clinical insights.
                  </p>
                  <p>
                    By applying advanced machine learning algorithms to genomic sequences, our solution can identify disease-associated variants, predict drug responses, and enable truly personalized treatment plans tailored to each patient's unique genetic profile.
                  </p>
                  <div className="use-case-image-container">
                    <div className="use-case-image">
                      <FaImage className="use-case-image-icon" />
                    </div>
                  </div>
                  <p>
                    The system integrates with existing laboratory information management systems (LIMS) and electronic health records (EHR), making it easy for healthcare providers to incorporate genomic insights into clinical decision-making.
                  </p>
                </div>
              </div>

              <div className="use-case-stats">
                <div className="use-case-stat">
                  <div className="use-case-stat-value">93%</div>
                  <div className="use-case-stat-label">Variant Classification Accuracy</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">78%</div>
                  <div className="use-case-stat-label">Improved Treatment Response</div>
                </div>
                <div className="use-case-stat">
                  <div className="use-case-stat-value">65%</div>
                  <div className="use-case-stat-label">Reduction in Analysis Time</div>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "The genomic analysis platform has transformed our approach to cancer treatment. We're now able to identify specific genetic markers that predict treatment response, allowing us to select the most effective therapies for each patient while avoiding treatments unlikely to be beneficial."
                </p>
                <div className="use-case-quote-author">Dr. Jessica Rodriguez</div>
                <div className="use-case-quote-position">Director of Precision Oncology, University Medical Center</div>
              </div>
            </div>

            <div className="use-case-sidebar">
              <div className="use-case-sidebar-section">
                <h3 className="use-case-sidebar-title">Key Highlights</h3>
                <ul className="use-case-highlights">
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Rapid analysis of whole genome sequences</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Identification of disease-associated variants</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Pharmacogenomic insights for medication selection</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Integration with clinical decision support</div>
                  </li>
                  <li className="use-case-highlight">
                    <FaCheckCircle className="use-case-highlight-icon" />
                    <div className="use-case-highlight-text">Continuous learning from new research</div>
                  </li>
                </ul>
              </div>

              <div className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to Transform Your Genomic Capabilities?</h3>
                <p className="use-case-cta-text">Contact us today to schedule a demonstration and discover how our AI-powered Genomic Analysis solution can benefit your organization.</p>
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

            <Link to="/solutions/patient-monitoring" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaLaptopMedical className="related-use-case-image-icon" />
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

export default GenomicAnalysisUseCase;