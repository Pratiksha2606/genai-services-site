import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaImage, FaCheckCircle, FaChartLine, FaRobot, FaServer, FaShieldAlt, FaCloudUploadAlt, FaMobileAlt, FaBrain, FaDna, FaHeartbeat } from 'react-icons/fa';
import '../styles/UseCase.css';

const MedicalImagingUseCase = () => {
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
            <span className="use-case-breadcrumb-current">Medical Imaging Analysis</span>
          </div>
          <h1 className="use-case-hero-title">AI-Powered Medical Imaging Analysis</h1>
          <p className="use-case-hero-description">
            Our advanced AI solutions for medical imaging help radiologists and clinicians detect abnormalities with greater accuracy and efficiency, improving diagnostic capabilities and patient outcomes.
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
                    Medical imaging is a critical component of modern healthcare, providing essential visual information for diagnosis and treatment planning. However, the increasing volume and complexity of medical images present significant challenges for radiologists and clinicians.
                  </p>
                  <p>
                    Our AI-powered Medical Imaging Analysis solution leverages deep learning algorithms to assist healthcare professionals in interpreting medical images across various modalities, including X-rays, CT scans, MRIs, and ultrasounds. By automating the detection and classification of abnormalities, our solution enhances diagnostic accuracy, reduces interpretation time, and helps prioritize urgent cases.
                  </p>
                  <div className="use-case-image-container">
                    <div className="use-case-image">
                      <FaImage className="use-case-image-icon" />
                    </div>
                  </div>
                  <p>
                    The system is designed to integrate seamlessly with existing PACS (Picture Archiving and Communication System) and RIS (Radiology Information System) infrastructure, ensuring minimal disruption to established workflows while providing maximum value to healthcare providers and patients.
                  </p>
                </div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Key Capabilities</h2>
                <div className="use-case-section-content">
                  <p>Our Medical Imaging Analysis solution offers a comprehensive set of capabilities:</p>
                  <ul>
                    <li><strong>Abnormality Detection:</strong> Automatically identifies potential abnormalities in medical images, including nodules, masses, fractures, and other pathological findings.</li>
                    <li><strong>Quantitative Analysis:</strong> Provides precise measurements and quantitative assessments of anatomical structures and pathological features.</li>
                    <li><strong>Prioritization:</strong> Flags critical findings for immediate attention, helping radiologists prioritize urgent cases.</li>
                    <li><strong>Comparative Analysis:</strong> Compares current images with prior studies to identify changes over time, aiding in disease progression monitoring.</li>
                    <li><strong>Structured Reporting:</strong> Generates preliminary structured reports with key findings, measurements, and suggested follow-up recommendations.</li>
                    <li><strong>Quality Assurance:</strong> Ensures image quality meets diagnostic standards and flags suboptimal images for retaking if necessary.</li>
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
                  <p>Our implementation process is designed to ensure a smooth integration with your existing systems and workflows:</p>
                  <ol>
                    <li><strong>Assessment:</strong> We conduct a thorough assessment of your current imaging infrastructure, workflows, and specific needs.</li>
                    <li><strong>Customization:</strong> Our team customizes the solution to address your specific requirements and integrates it with your existing PACS/RIS systems.</li>
                    <li><strong>Training:</strong> The AI models are trained and fine-tuned using your historical imaging data to ensure optimal performance for your patient population.</li>
                    <li><strong>Validation:</strong> We validate the system's performance against radiologist interpretations to ensure accuracy and reliability.</li>
                    <li><strong>Deployment:</strong> The solution is deployed in a phased approach, starting with a pilot program and expanding to full implementation.</li>
                    <li><strong>Monitoring & Optimization:</strong> We continuously monitor the system's performance and make adjustments to optimize accuracy and efficiency.</li>
                  </ol>
                </div>
              </div>

              <div className="use-case-quote">
                <p className="use-case-quote-text">
                  "The AI-powered imaging analysis system has transformed our radiology department. We've seen a significant reduction in interpretation time and an increase in diagnostic confidence. Most importantly, it has helped us identify critical findings that might have been missed, potentially saving lives."
                </p>
                <div className="use-case-quote-author">Dr. Sarah Johnson</div>
                <div className="use-case-quote-position">Chief of Radiology, Metropolitan Medical Center</div>
              </div>

              <div className="use-case-section">
                <h2 className="use-case-section-title">Benefits</h2>
                <div className="use-case-section-content">
                  <p><strong>For Radiologists and Clinicians:</strong></p>
                  <ul>
                    <li>Reduced interpretation time, allowing for higher throughput</li>
                    <li>Enhanced diagnostic accuracy and confidence</li>
                    <li>Prioritization of urgent cases</li>
                    <li>Reduction in eye fatigue and burnout</li>
                    <li>Structured preliminary reports that streamline documentation</li>
                  </ul>
                  
                  <p><strong>For Healthcare Organizations:</strong></p>
                  <ul>
                    <li>Improved operational efficiency and resource utilization</li>
                    <li>Reduced turnaround times for image interpretation</li>
                    <li>Enhanced quality of care and patient outcomes</li>
                    <li>Potential reduction in liability through improved diagnostic accuracy</li>
                    <li>Competitive advantage in the healthcare marketplace</li>
                  </ul>
                  
                  <p><strong>For Patients:</strong></p>
                  <ul>
                    <li>Faster diagnosis and treatment initiation</li>
                    <li>Reduced need for repeat imaging</li>
                    <li>Improved diagnostic accuracy leading to better treatment planning</li>
                    <li>Enhanced overall quality of care</li>
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

              <div className="use-case-cta">
                <h3 className="use-case-cta-title">Ready to Transform Your Imaging Capabilities?</h3>
                <p className="use-case-cta-text">Contact us today to schedule a demonstration and discover how our AI-powered Medical Imaging Analysis solution can benefit your organization.</p>
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
            <Link to="/solutions/predictive-diagnostics" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaBrain className="related-use-case-image-icon" />
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

            <Link to="/solutions/genomic-analysis" className="related-use-case-card">
              <div className="related-use-case-image">
                <FaDna className="related-use-case-image-icon" />
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
                <FaHeartbeat className="related-use-case-image-icon" />
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

export default MedicalImagingUseCase;