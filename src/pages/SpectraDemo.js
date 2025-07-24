import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaProjectDiagram, FaChartLine, FaTable, FaSearch, FaFilter, FaDownload, FaSync } from 'react-icons/fa';
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

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  height: 700px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
`;

const Sidebar = styled.div`
  background: var(--background-dark);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
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
      circle at 30% 20%,
      rgba(0, 200, 83, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const SidebarItem = styled.div`
  padding: 1.2rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.5rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(3px);
  }
  
  ${props => props.active && `
    background: linear-gradient(90deg, rgba(0, 200, 83, 0.15) 0%, rgba(0, 200, 83, 0.05) 100%);
    color: var(--primary-color);
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  `}
  
  svg {
    font-size: 1.8rem;
    ${props => props.active && `
      filter: drop-shadow(0 2px 4px rgba(0, 200, 83, 0.3));
    `}
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: var(--primary-color);
    opacity: ${props => props.active ? '1' : '0'};
    transition: opacity 0.3s ease;
  }
`;

const MainContent = styled.div`
  background: var(--background-dark);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle at center,
      rgba(0, 149, 255, 0.03) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: var(--background-darker);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  width: 300px;
  
  input {
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-size: 1.4rem;
    width: 100%;
    margin-left: 0.5rem;
    
    &:focus {
      outline: none;
    }
  }
`;

const ToolButton = styled.button`
  background: var(--background-darker);
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: var(--text-secondary);
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ToolButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  flex-grow: 1;
`;

const Chart = styled.div`
  background: var(--background-darker);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  }
`;

const ChartTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
  }
`;

const ChartContent = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ChartBar = styled.div`
  width: ${props => props.width || '20px'};
  height: ${props => props.height || '100px'};
  background: ${props => props.color || 'var(--primary-color)'};
  border-radius: 4px;
  margin: 0 5px;
  position: relative;
  
  &::after {
    content: '${props => props.value || ''}';
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2rem;
    color: var(--text-secondary);
  }
`;

const ChartLine = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  bottom: ${props => props.position || '0'};
  
  &::after {
    content: '${props => props.label || ''}';
    position: absolute;
    right: 0;
    top: -15px;
    font-size: 1.2rem;
    color: var(--text-secondary);
  }
`;

const ChartCircle = styled.div`
  width: ${props => props.size || '150px'};
  height: ${props => props.size || '150px'};
  border-radius: 50%;
  background: conic-gradient(
    var(--primary-color) 0% ${props => props.value1 || '25%'}, 
    var(--accent-color) ${props => props.value1 || '25%'} ${props => props.value2 || '55%'},
    var(--wave-dark-blue) ${props => props.value2 || '55%'} ${props => props.value3 || '75%'},
    var(--wave-medium-blue) ${props => props.value3 || '75%'} 100%
  );
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--background-darker);
  }
`;

const ChartLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: var(--text-secondary);
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${props => props.color || 'var(--primary-color)'};
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

const SpectraDemo = () => {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="use-case-page demo-page">
      {/* Hero Section with Wave Background */}
      <section className="use-case-hero">
        <WaveBackground>
          <div className="use-case-hero-container">
            <h1 className="use-case-hero-title">
              <GradientText fontWeight="700">Spectra</GradientText> Demo
            </h1>
            <p className="use-case-hero-description">
              Experience our advanced analytics platform in action
            </p>
            <div className="demo-hero-badges">
              <div className="demo-badge">
                <span className="demo-badge-number">92%</span>
                <span className="demo-badge-text">Prediction Accuracy</span>
              </div>
              <div className="demo-badge">
                <span className="demo-badge-number">85%</span>
                <span className="demo-badge-text">Report Time Reduction</span>
              </div>
              <div className="demo-badge">
                <span className="demo-badge-number">$3.2M</span>
                <span className="demo-badge-text">Average Savings</span>
              </div>
            </div>
          </div>
        </WaveBackground>
      </section>

      {/* Demo Content */}
      <DemoContainer>
        <BackLink to="/solutions/spectra">
          <FaArrowLeft /> Back to Spectra
        </BackLink>
        
        <DemoSection>
          <div className="demo-header">
            <h3>Spectra Analytics Dashboard</h3>
            <div className="demo-status">
              <div className="demo-status-dot"></div>
              <span>Live Data</span>
            </div>
          </div>
          <DashboardContainer>
            <Sidebar>
              <SidebarItem active={activeView === 'dashboard'} onClick={() => setActiveView('dashboard')}>
                <FaChartLine />
                Dashboard
              </SidebarItem>
              <SidebarItem active={activeView === 'patients'} onClick={() => setActiveView('patients')}>
                <FaTable />
                Patient Analytics
              </SidebarItem>
              <SidebarItem active={activeView === 'clinical'} onClick={() => setActiveView('clinical')}>
                <FaProjectDiagram />
                Clinical Pathways
              </SidebarItem>
              <SidebarItem active={activeView === 'operational'} onClick={() => setActiveView('operational')}>
                <FaChartLine />
                Operational Metrics
              </SidebarItem>
              <SidebarItem active={activeView === 'financial'} onClick={() => setActiveView('financial')}>
                <FaChartLine />
                Financial Analytics
              </SidebarItem>
            </Sidebar>
            
            <MainContent>
              <ToolBar>
                <SearchBar>
                  <FaSearch />
                  <input type="text" placeholder="Search analytics..." />
                </SearchBar>
                
                <ToolButtonGroup>
                  <ToolButton className="animated-button">
                    <FaFilter />
                    Filter
                  </ToolButton>
                  <ToolButton className="animated-button">
                    <FaDownload />
                    Export
                  </ToolButton>
                  <ToolButton className="animated-button pulse-button">
                    <FaSync className="rotating-icon" />
                    Refresh
                  </ToolButton>
                </ToolButtonGroup>
              </ToolBar>
              
              <ChartContainer>
                <Chart>
                  <ChartTitle>Patient Outcomes by Treatment</ChartTitle>
                  <ChartContent>
                    <ChartBar height="120px" value="78%" color="var(--primary-color)" />
                    <ChartBar height="150px" value="92%" color="var(--primary-color)" />
                    <ChartBar height="100px" value="65%" color="var(--primary-color)" />
                    <ChartBar height="180px" value="95%" color="var(--primary-color)" />
                    <ChartBar height="130px" value="82%" color="var(--primary-color)" />
                    
                    <ChartLine position="25%" label="Target" />
                    <ChartLine position="75%" label="Benchmark" />
                  </ChartContent>
                  <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                    Treatment Types
                  </div>
                </Chart>
                
                <Chart>
                  <ChartTitle>Resource Utilization</ChartTitle>
                  <ChartContent>
                    <ChartCircle value1="35%" value2="65%" value3="85%" />
                  </ChartContent>
                  <ChartLegend>
                    <LegendItem>
                      <LegendColor color="var(--primary-color)" />
                      Staff (35%)
                    </LegendItem>
                    <LegendItem>
                      <LegendColor color="var(--accent-color)" />
                      Equipment (30%)
                    </LegendItem>
                    <LegendItem>
                      <LegendColor color="var(--wave-dark-blue)" />
                      Facilities (20%)
                    </LegendItem>
                    <LegendItem>
                      <LegendColor color="var(--wave-medium-blue)" />
                      Other (15%)
                    </LegendItem>
                  </ChartLegend>
                </Chart>
                
                <Chart>
                  <ChartTitle>Patient Satisfaction Trends</ChartTitle>
                  <ChartContent style={{ padding: '0 2rem' }}>
                    <svg width="100%" height="100%" viewBox="0 0 300 150" preserveAspectRatio="none">
                      <polyline
                        points="0,100 50,80 100,90 150,60 200,40 250,30 300,20"
                        fill="none"
                        stroke="var(--primary-color)"
                        strokeWidth="3"
                      />
                      <polyline
                        points="0,120 50,110 100,115 150,100 200,90 250,85 300,80"
                        fill="none"
                        stroke="var(--accent-color)"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  </ChartContent>
                  <ChartLegend>
                    <LegendItem>
                      <LegendColor color="var(--primary-color)" />
                      Current Year
                    </LegendItem>
                    <LegendItem>
                      <LegendColor color="var(--accent-color)" />
                      Previous Year
                    </LegendItem>
                  </ChartLegend>
                </Chart>
                
                <Chart>
                  <ChartTitle>Cost Reduction Analysis</ChartTitle>
                  <ChartContent>
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <div style={{ display: 'flex', height: '80%', alignItems: 'flex-end', justifyContent: 'space-around', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px' }}>
                          <div style={{ height: '180px', width: '40px', background: 'var(--wave-dark-blue)', borderRadius: '4px 4px 0 0' }}></div>
                          <div style={{ marginTop: '10px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Before</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px' }}>
                          <div style={{ height: '100px', width: '40px', background: 'var(--primary-color)', borderRadius: '4px 4px 0 0' }}></div>
                          <div style={{ marginTop: '10px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>After</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px' }}>
                          <div style={{ height: '80px', width: '40px', background: 'var(--accent-color)', borderRadius: '4px 4px 0 0' }}></div>
                          <div style={{ marginTop: '10px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Target</div>
                        </div>
                      </div>
                    </div>
                  </ChartContent>
                  <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                    44% Cost Reduction Achieved
                  </div>
                </Chart>
              </ChartContainer>
            </MainContent>
          </DashboardContainer>
        </DemoSection>
      </DemoContainer>
    </div>
  );
};

export default SpectraDemo;