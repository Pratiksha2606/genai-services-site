import React from 'react';
import styled from 'styled-components';

const WaveContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const WaveBase = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    var(--wave-dark-blue) 0%, 
    var(--wave-medium-blue) 50%, 
    var(--wave-light-blue) 100%
  );
  z-index: -2;
`;

const WavePattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23FF7846' fill-opacity='0.2' d='M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: 50% 100%;
  background-repeat: repeat-x;
  z-index: -1;
  opacity: 0.3;
  animation: wave-animation 15s linear infinite;

  @keyframes wave-animation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const WaveBackground = ({ children, className }) => {
  return (
    <WaveContainer className={className}>
      <WaveBase />
      <WavePattern />
      <Content>{children}</Content>
    </WaveContainer>
  );
};

export default WaveBackground;