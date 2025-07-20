import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import MedicalImagingUseCase from './pages/MedicalImagingUseCase';
import PredictiveDiagnosticsUseCase from './pages/PredictiveDiagnosticsUseCase';
import GenomicAnalysisUseCase from './pages/GenomicAnalysisUseCase';
import PatientMonitoringUseCase from './pages/PatientMonitoringUseCase';
import HospitalOperationsUseCase from './pages/HospitalOperationsUseCase';
import ClinicalDecisionSupportUseCase from './pages/ClinicalDecisionSupportUseCase';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
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
        <Route path="/services" element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>Services Page Coming Soon</div>} />
        <Route path="/case-studies" element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>Case Studies Page Coming Soon</div>} />
        <Route path="/about" element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>About Page Coming Soon</div>} />
        <Route path="/contact" element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>Contact Page Coming Soon</div>} />
        <Route path="*" element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
