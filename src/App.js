import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Insights from './pages/Insights';
import About from './pages/About';
import Contact from './pages/Contact';
import MedicalImagingUseCase from './pages/MedicalImagingUseCase';
import PredictiveDiagnosticsUseCase from './pages/PredictiveDiagnosticsUseCase';
import GenomicAnalysisUseCase from './pages/GenomicAnalysisUseCase';
import PatientMonitoringUseCase from './pages/PatientMonitoringUseCase';
import HospitalOperationsUseCase from './pages/HospitalOperationsUseCase';
import ClinicalDecisionSupportUseCase from './pages/ClinicalDecisionSupportUseCase';
import DarkModeToggle from './components/ui/DarkModeToggle';
import ScrollToTop from './components/ui/ScrollToTop';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/medical-imaging" element={<MedicalImagingUseCase />} />
        <Route path="/solutions/predictive-diagnostics" element={<PredictiveDiagnosticsUseCase />} />
        <Route path="/solutions/genomic-analysis" element={<GenomicAnalysisUseCase />} />
        <Route path="/solutions/patient-monitoring" element={<PatientMonitoringUseCase />} />
        <Route path="/solutions/hospital-operations" element={<HospitalOperationsUseCase />} />
        <Route path="/solutions/clinical-decision-support" element={<ClinicalDecisionSupportUseCase />} />
        {/* Add more routes as we create more pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
