import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import PriorAuthorizationDemo from './pages/PriorAuthorizationDemo';
import VoiceAssistantDemo from './pages/VoiceAssistantDemo';
import SpectraDemo from './pages/SpectraDemo';
import PCOVDemo from './pages/PCOVDemo';
import ConversationalAssistantDemo from './pages/ConversationalAssistantDemo';
import PriorAuthorizationUseCase from './pages/PriorAuthorizationUseCase';
import VoiceAssistantUseCase from './pages/VoiceAssistantUseCase';
import SpectraUseCase from './pages/SpectraUseCase';
import PCOVUseCase from './pages/PCOVUseCase';
import ConversationalAssistantUseCase from './pages/ConversationalAssistantUseCase';
import DarkModeToggle from './components/ui/DarkModeToggle';
import ChatBot from './components/ui/ChatBot';
import ScrollToTop from './components/ui/ScrollToTop';
import GlobalStyles from './styles/GlobalStyles';
// Footer wrapper component that conditionally renders the footer
const FooterWrapper = () => {
  const location = useLocation();
  const isDemoPage = location.pathname.includes('/demo');
  
  return !isDemoPage ? <Footer /> : null;
};

function AppContent() {
  return (
    <>
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
        <Route path="/solutions/prior-authorization/demo" element={<PriorAuthorizationDemo />} />
        <Route path="/solutions/voice-assistant/demo" element={<VoiceAssistantDemo />} />
        <Route path="/solutions/spectra/demo" element={<SpectraDemo />} />
        <Route path="/solutions/pcov/demo" element={<PCOVDemo />} />
        <Route path="/solutions/conversational-assistant/demo" element={<ConversationalAssistantDemo />} />
        <Route path="/solutions/prior-authorization" element={<PriorAuthorizationUseCase />} />
        <Route path="/solutions/voice-assistant" element={<VoiceAssistantUseCase />} />
        <Route path="/solutions/spectra" element={<SpectraUseCase />} />
        <Route path="/solutions/pcov" element={<PCOVUseCase />} />
        <Route path="/solutions/conversational-assistant" element={<ConversationalAssistantUseCase />} />
        {/* Add more routes as we create more pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div style={{ padding: '100px 20px', textAlign: 'center' }}>Page Not Found</div>} />
      </Routes>
      <FooterWrapper />
      <ChatBot />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
