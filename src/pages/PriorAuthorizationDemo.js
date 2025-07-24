import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaFileAlt } from 'react-icons/fa';
import '../styles/UseCase.css';
import WaveBackground from '../components/ui/WaveBackground';
import GradientText from '../components/ui/GradientText';

// Demo component
const DemoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
`;

const DemoSection = styled.div`
  margin: 3rem 0;
  padding: 3rem;
  background: var(--background-darker);
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle at center,
      rgba(0, 200, 83, 0.03) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const DemoForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  
  &:hover label {
    color: var(--primary-color);
  }
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--primary-color);
    opacity: 0.7;
  }
`;

const Input = styled.input`
  padding: 1.2rem 1.5rem;
  background: var(--background-dark);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 200, 83, 0.1), inset 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const Select = styled.select`
  padding: 1.2rem 1.5rem;
  background: var(--background-dark);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 200, 83, 0.1), inset 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  option {
    background: var(--background-darker);
    color: var(--text-primary);
    padding: 1rem;
  }
`;

const DemoButton = styled.button`
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
  color: var(--text-dark);
  border: none;
  border-radius: 8px;
  font-size: 1.7rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 200, 83, 0.3);
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 200, 83, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(0, 200, 83, 0.3);
  }
  
  &:disabled {
    background: var(--background-dark);
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

const ResultContainer = styled.div`
  margin-top: 3rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(0, 200, 83, 0.15) 0%, rgba(0, 200, 83, 0.05) 100%);
  border-radius: 12px;
  border-left: 5px solid var(--primary-color);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top right,
      rgba(0, 200, 83, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
  
  h3 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    
    &::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--primary-color);
      box-shadow: 0 0 15px var(--primary-color);
    }
  }
  
  p {
    font-size: 1.5rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    
    strong {
      color: var(--text-primary);
      font-weight: 600;
    }
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.6rem;
  text-decoration: none;
  margin-bottom: 2rem;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

const PriorAuthorizationDemo = () => {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="use-case-page demo-page">
      {/* Hero Section with Wave Background */}
      <section className="use-case-hero">
        <WaveBackground>
          <div className="use-case-hero-container">
            <h1 className="use-case-hero-title">
              <GradientText fontWeight="700">Prior Authorization</GradientText> Demo
            </h1>
            <p className="use-case-hero-description">
              Experience our AI-powered Prior Authorization solution in action
            </p>
            <div className="demo-hero-badges">
              <div className="demo-badge">
                <span className="demo-badge-number">93%</span>
                <span className="demo-badge-text">Approval Rate</span>
              </div>
              <div className="demo-badge">
                <span className="demo-badge-number">12s</span>
                <span className="demo-badge-text">Average Processing Time</span>
              </div>
              <div className="demo-badge">
                <span className="demo-badge-number">24/7</span>
                <span className="demo-badge-text">Availability</span>
              </div>
            </div>
          </div>
        </WaveBackground>
      </section>

      {/* Demo Content */}
      <DemoContainer>
        <BackLink to="/solutions/prior-authorization">
          <FaArrowLeft /> Back to Prior Authorization
        </BackLink>
        
        <DemoSection>
          <div className="demo-header">
            <h3>Prior Authorization Request</h3>
            <div className="demo-status">
              <div className="demo-status-dot"></div>
              <span>AI System Active</span>
            </div>
          </div>
          <DemoForm as="form" onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="patient">Patient Name</Label>
              <Input type="text" id="patient" defaultValue="John Smith" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input type="text" id="dob" defaultValue="05/12/1975" />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="insurance">Insurance Provider</Label>
              <Select id="insurance">
                <option value="bluecross">Blue Cross Blue Shield</option>
                <option value="aetna">Aetna</option>
                <option value="cigna">Cigna</option>
                <option value="united">UnitedHealthcare</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="procedure">Procedure/Service</Label>
              <Select id="procedure">
                <option value="mri">MRI - Brain</option>
                <option value="ct">CT Scan - Chest</option>
                <option value="medication">Specialty Medication</option>
                <option value="surgery">Outpatient Surgery</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="diagnosis">Diagnosis Code</Label>
              <Input type="text" id="diagnosis" defaultValue="G43.909" />
            </FormGroup>
            
            <DemoButton type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'Submit Authorization Request'}
            </DemoButton>
          </DemoForm>
          
          {showResult && (
            <ResultContainer>
              <div className="result-header">
                <div className="result-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="var(--primary-color)"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Authorization Approved</h3>
                  <p className="result-subtitle">AI-powered decision based on clinical guidelines and policy rules</p>
                </div>
              </div>
              <div className="result-details">
                <div className="result-row">
                  <div className="result-label">Authorization Number:</div>
                  <div className="result-value">AUTH-2025-78945</div>
                </div>
                <div className="result-row">
                  <div className="result-label">Approved Date:</div>
                  <div className="result-value">07/22/2025</div>
                </div>
                <div className="result-row">
                  <div className="result-label">Expiration Date:</div>
                  <div className="result-value">10/22/2025</div>
                </div>
                <div className="result-row">
                  <div className="result-label">Approved Service:</div>
                  <div className="result-value">MRI - Brain</div>
                </div>
                <div className="result-row">
                  <div className="result-label">Processing Time:</div>
                  <div className="result-value highlight">12 seconds</div>
                </div>
              </div>
              <div className="result-footer">
                <p>This authorization has been automatically approved by our AI system based on the patient's clinical information and insurance policy guidelines.</p>
              </div>
            </ResultContainer>
          )}
        </DemoSection>
      </DemoContainer>
    </div>
  );
};

export default PriorAuthorizationDemo;