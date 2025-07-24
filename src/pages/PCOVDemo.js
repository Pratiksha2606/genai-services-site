import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaUserCheck, FaChartLine, FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';
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
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      var(--primary-color) 0%,
      transparent 100%
    );
    opacity: 0.3;
  }
`;

const Tab = styled.div`
  padding: 1.2rem 2.5rem;
  font-size: 1.7rem;
  cursor: pointer;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  border-bottom: 3px solid ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-primary)'};
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--primary-color);
    transform: translateX(${props => props.active ? '0' : '-100%'});
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: translateX(0);
  }
  
  ${props => props.active && `
    font-weight: 600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--primary-color);
      box-shadow: 0 0 10px var(--primary-color);
    }
  `}
`;

const OutcomeCard = styled.div`
  background: var(--background-dark);
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  border-left: 5px solid ${props =>
    props.status === 'positive' ? 'var(--primary-color)' :
    props.status === 'negative' ? 'var(--accent-color)' :
    'var(--wave-medium-blue)'};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: radial-gradient(
      circle at center,
      ${props =>
        props.status === 'positive' ? 'rgba(0, 200, 83, 0.03)' :
        props.status === 'negative' ? 'rgba(255, 76, 76, 0.03)' :
        'rgba(0, 149, 255, 0.03)'} 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const OutcomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const OutcomeTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    color: ${props => 
      props.status === 'positive' ? 'var(--primary-color)' : 
      props.status === 'negative' ? 'var(--accent-color)' : 
      'var(--wave-medium-blue)'};
  }
`;

const OutcomeStatus = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${props => 
    props.status === 'positive' ? 'var(--primary-color)' : 
    props.status === 'negative' ? 'var(--accent-color)' : 
    'var(--wave-medium-blue)'};
  padding: 0.5rem 1rem;
  background: ${props => 
    props.status === 'positive' ? 'rgba(0, 200, 83, 0.1)' : 
    props.status === 'negative' ? 'rgba(255, 76, 76, 0.1)' : 
    'rgba(0, 149, 255, 0.1)'};
  border-radius: 4px;
`;

const OutcomeDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const OutcomeMetric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MetricLabel = styled.div`
  font-size: 1.4rem;
  color: var(--text-secondary);
`;

const MetricValue = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const OutcomeDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1.4rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ChartContainer = styled.div`
  height: 200px;
  margin: 2rem 0;
  padding: 0 2rem;
  position: relative;
`;

const ChartLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  bottom: ${props => props.position || '0'};
  
  &::after {
    content: '${props => props.label || ''}';
    position: absolute;
    left: 0;
    top: -15px;
    font-size: 1.2rem;
    color: var(--text-secondary);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? 'var(--primary-color)' : 'var(--background-dark)'};
  color: ${props => props.active ? 'var(--text-dark)' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.05)'};
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

const PCOVDemo = () => {
  const [activeTab, setActiveTab] = useState('outcomes');
  const [timeFilter, setTimeFilter] = useState('6months');
  const [typeFilter, setTypeFilter] = useState('all');

  return (
    <div className="use-case-page demo-page">
      {/* Hero Section with Wave Background */}
      <section className="use-case-hero">
        <WaveBackground>
          <div className="use-case-hero-container">
            <h1 className="use-case-hero-title">
              <GradientText fontWeight="700">PCOV</GradientText> Demo
            </h1>
            <p className="use-case-hero-description">
              Experience our Patient-Centered Outcome Validation system in action
            </p>
            <div className="demo-hero-badges">
              <div className="demo-badge">
                <span className="demo-badge-number">92%</span>
                <span className="demo-badge-text">Effectiveness</span>
              </div>
              <div className="demo-badge">
                <span className="demo-badge-number">42%</span>
                <span className="demo-badge-text">Satisfaction Increase</span>
              </div>
              <div className="demo-badge">
                <span className="demo-badge-number">28%</span>
                <span className="demo-badge-text">Cost Efficiency</span>
              </div>
            </div>
          </div>
        </WaveBackground>
      </section>

      {/* Demo Content */}
      <DemoContainer>
        <BackLink to="/solutions/pcov">
          <FaArrowLeft /> Back to PCOV
        </BackLink>
        
        <DemoSection>
          <div className="demo-header">
            <h3>Patient-Centered Outcome Validation Dashboard</h3>
            <div className="demo-status">
              <div className="demo-status-dot"></div>
              <span>Live Data</span>
            </div>
          </div>
          
          <TabContainer>
            <Tab active={activeTab === 'outcomes'} onClick={() => setActiveTab('outcomes')}>
              Outcomes
            </Tab>
            <Tab active={activeTab === 'trends'} onClick={() => setActiveTab('trends')}>
              Trends
            </Tab>
            <Tab active={activeTab === 'comparisons'} onClick={() => setActiveTab('comparisons')}>
              Comparisons
            </Tab>
          </TabContainer>
          
          <FilterContainer>
            <FilterGroup>
              <FilterButton className="animated-button" active={typeFilter === 'all'} onClick={() => setTypeFilter('all')}>
                All Outcomes
              </FilterButton>
              <FilterButton className="animated-button" active={typeFilter === 'positive'} onClick={() => setTypeFilter('positive')}>
                <FaCheckCircle style={{ marginRight: '5px' }} /> Positive
              </FilterButton>
              <FilterButton className="animated-button" active={typeFilter === 'negative'} onClick={() => setTypeFilter('negative')}>
                <FaTimesCircle style={{ marginRight: '5px' }} /> Negative
              </FilterButton>
              <FilterButton className="animated-button" active={typeFilter === 'neutral'} onClick={() => setTypeFilter('neutral')}>
                <FaInfoCircle style={{ marginRight: '5px' }} /> Neutral
              </FilterButton>
            </FilterGroup>
            
            <FilterGroup>
              <FilterButton className="animated-button" active={timeFilter === '3months'} onClick={() => setTimeFilter('3months')}>
                3 Months
              </FilterButton>
              <FilterButton className="animated-button" active={timeFilter === '6months'} onClick={() => setTimeFilter('6months')}>
                6 Months
              </FilterButton>
              <FilterButton className="animated-button" active={timeFilter === '1year'} onClick={() => setTimeFilter('1year')}>
                1 Year
              </FilterButton>
            </FilterGroup>
          </FilterContainer>
          
          {activeTab === 'outcomes' && (
            <>
              <OutcomeCard status="positive">
                <OutcomeHeader>
                  <OutcomeTitle status="positive">
                    <FaCheckCircle /> Diabetes Management Program
                  </OutcomeTitle>
                  <OutcomeStatus status="positive">Positive Outcome</OutcomeStatus>
                </OutcomeHeader>
                <OutcomeDetails>
                  <OutcomeMetric>
                    <MetricLabel>Patient Satisfaction</MetricLabel>
                    <MetricValue>92%</MetricValue>
                  </OutcomeMetric>
                  <OutcomeMetric>
                    <MetricLabel>HbA1c Improvement</MetricLabel>
                    <MetricValue>-1.8%</MetricValue>
                  </OutcomeMetric>
                  <OutcomeMetric>
                    <MetricLabel>Hospital Readmissions</MetricLabel>
                    <MetricValue>-42%</MetricValue>
                  </OutcomeMetric>
                  <OutcomeMetric>
                    <MetricLabel>Cost Reduction</MetricLabel>
                    <MetricValue>$2,450 per patient</MetricValue>
                  </OutcomeMetric>
                </OutcomeDetails>
                <OutcomeDescription>
                  The diabetes management program has shown significant positive outcomes across all key metrics. Patients reported high satisfaction with the program, and clinical outcomes show substantial improvements in HbA1c levels. Hospital readmissions for diabetes-related complications decreased by 42%, resulting in significant cost savings.
                </OutcomeDescription>
              </OutcomeCard>
              
              <OutcomeCard status="neutral">
                <OutcomeHeader>
                  <OutcomeTitle status="neutral">
                    <FaInfoCircle /> Hypertension Treatment Protocol
                  </OutcomeTitle>
                  <OutcomeStatus status="neutral">Mixed Results</OutcomeStatus>
                </OutcomeHeader>
                <OutcomeDetails>
                  <OutcomeMetric>
                    <MetricLabel>Patient Satisfaction</MetricLabel>
                    <MetricValue>78%</MetricValue>
                  </OutcomeMetric>
                  <OutcomeMetric>
                    <MetricLabel>BP Control Rate</MetricLabel>
                    <MetricValue>+15%</MetricValue>
                  </OutcomeMetric>
                  <OutcomeMetric>
                    <MetricLabel>Medication Adherence</MetricLabel>
                    <MetricValue>+8%</MetricValue>
                  </OutcomeMetric>
                  <OutcomeMetric>
                    <MetricLabel>Cost Impact</MetricLabel>
                    <MetricValue>+$320 per patient</MetricValue>
                  </OutcomeMetric>
                </OutcomeDetails>
                <OutcomeDescription>
                  The hypertension treatment protocol shows mixed results. While clinical outcomes improved with better blood pressure control rates and medication adherence, patient satisfaction was moderate. The protocol resulted in a slight increase in per-patient costs, primarily due to increased medication and monitoring requirements.
                </OutcomeDescription>
              </OutcomeCard>
              
              <OutcomeCard status="negative">
                <OutcomeHeader>
                  <OutcomeTitle status="negative">
                    <FaTimesCircle /> Chronic Pain Management Approach
                  </OutcomeTitle>
                  <OutcomeStatus status="negative">Needs Improvement</OutcomeStatus>
                </OutcomeHeader>
                <OutcomeDetails>
                  <OutcomeMetric>
                    <MetricLabel>Patient Satisfaction</MetricLabel>
                    <MetricValue>45%</MetricValue>
                  </OutcomeMetric>
                  <OutcomeMetric>
                    <MetricLabel>Pain Score Improvement</MetricLabel>
                    <MetricValue>-0.8 (scale 1-10)</MetricValue>
                  </OutcomeMetric>
                  <OutcomeMetric>
                    <MetricLabel>Functional Improvement</MetricLabel>
                    <MetricValue>+12%</MetricValue>
                  </OutcomeMetric>
                  <OutcomeMetric>
                    <MetricLabel>Cost Impact</MetricLabel>
                    <MetricValue>+$1,850 per patient</MetricValue>
                  </OutcomeMetric>
                </OutcomeDetails>
                <OutcomeDescription>
                  The chronic pain management approach shows suboptimal outcomes. Patient satisfaction is low, and pain score improvements are minimal. While there was some functional improvement, the high cost of the program without corresponding clinical benefits suggests a need for significant revision of the approach.
                </OutcomeDescription>
              </OutcomeCard>
            </>
          )}
          
          {activeTab === 'trends' && (
            <ChartContainer>
              <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="0" x2="800" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="0" y1="200" x2="800" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                
                {/* X-axis labels */}
                <text x="0" y="220" fill="var(--text-secondary)" fontSize="12">Jan</text>
                <text x="133" y="220" fill="var(--text-secondary)" fontSize="12">Feb</text>
                <text x="266" y="220" fill="var(--text-secondary)" fontSize="12">Mar</text>
                <text x="400" y="220" fill="var(--text-secondary)" fontSize="12">Apr</text>
                <text x="533" y="220" fill="var(--text-secondary)" fontSize="12">May</text>
                <text x="666" y="220" fill="var(--text-secondary)" fontSize="12">Jun</text>
                <text x="800" y="220" fill="var(--text-secondary)" fontSize="12">Jul</text>
                
                {/* Patient Satisfaction Line */}
                <polyline
                  points="0,100 133,90 266,80 400,60 533,50 666,40 800,30"
                  fill="none"
                  stroke="var(--primary-color)"
                  strokeWidth="3"
                />
                
                {/* Clinical Outcomes Line */}
                <polyline
                  points="0,150 133,140 266,120 400,110 533,90 666,70 800,60"
                  fill="none"
                  stroke="var(--accent-color)"
                  strokeWidth="3"
                />
                
                {/* Cost Efficiency Line */}
                <polyline
                  points="0,170 133,160 266,150 400,130 533,120 666,100 800,90"
                  fill="none"
                  stroke="var(--wave-medium-blue)"
                  strokeWidth="3"
                />
                
                {/* Legend */}
                <circle cx="650" cy="20" r="5" fill="var(--primary-color)" />
                <text x="660" y="25" fill="var(--text-secondary)" fontSize="12">Patient Satisfaction</text>
                
                <circle cx="650" cy="40" r="5" fill="var(--accent-color)" />
                <text x="660" y="45" fill="var(--text-secondary)" fontSize="12">Clinical Outcomes</text>
                
                <circle cx="650" cy="60" r="5" fill="var(--wave-medium-blue)" />
                <text x="660" y="65" fill="var(--text-secondary)" fontSize="12">Cost Efficiency</text>
              </svg>
            </ChartContainer>
          )}
          
          {activeTab === 'comparisons' && (
            <div style={{ padding: '2rem 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '3rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '500', marginBottom: '1rem' }}>Traditional Approach</div>
                  <div style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%', 
                    background: 'conic-gradient(var(--accent-color) 0% 65%, var(--wave-dark-blue) 65% 100%)',
                    margin: '0 auto',
                    position: 'relative'
                  }}>
                    <div style={{ 
                      position: 'absolute', 
                      top: '50%', 
                      left: '50%', 
                      transform: 'translate(-50%, -50%)',
                      fontSize: '2.4rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)'
                    }}>
                      65%
                    </div>
                  </div>
                  <div style={{ marginTop: '1.5rem', fontSize: '1.4rem', color: 'var(--text-secondary)' }}>
                    Overall Effectiveness
                  </div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '500', marginBottom: '1rem' }}>PCOV Approach</div>
                  <div style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%', 
                    background: 'conic-gradient(var(--primary-color) 0% 92%, var(--wave-dark-blue) 92% 100%)',
                    margin: '0 auto',
                    position: 'relative'
                  }}>
                    <div style={{ 
                      position: 'absolute', 
                      top: '50%', 
                      left: '50%', 
                      transform: 'translate(-50%, -50%)',
                      fontSize: '2.4rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)'
                    }}>
                      92%
                    </div>
                  </div>
                  <div style={{ marginTop: '1.5rem', fontSize: '1.4rem', color: 'var(--text-secondary)' }}>
                    Overall Effectiveness
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                <div style={{ background: 'var(--background-dark)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Patient Satisfaction</div>
                  <div style={{ fontSize: '2.4rem', fontWeight: '500', color: 'var(--primary-color)' }}>+42%</div>
                </div>
                <div style={{ background: 'var(--background-dark)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Clinical Outcomes</div>
                  <div style={{ fontSize: '2.4rem', fontWeight: '500', color: 'var(--primary-color)' }}>+35%</div>
                </div>
                <div style={{ background: 'var(--background-dark)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Cost Efficiency</div>
                  <div style={{ fontSize: '2.4rem', fontWeight: '500', color: 'var(--primary-color)' }}>+28%</div>
                </div>
              </div>
            </div>
          )}
        </DemoSection>
      </DemoContainer>
    </div>
  );
};

export default PCOVDemo;