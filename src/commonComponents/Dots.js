import styled, { keyframes } from 'styled-components';
const greenColor = ({ theme: { colors } }) => colors.mainPageButtons;
const greyColor = ({ theme: { colors } }) => colors.footerRightsReserved;

//mobile
const size = { sizeS: '6px', sizeL: '8px' };

const place = {
  dot1: { top: '76px', right: '245px' },
  dot2: { top: '109px', right: '16px' },
  dot3: { top: '142px', right: '120px' },
};

//tablet
const tabletPlace = {
  dot1: { top: '85px', right: '530px' },
  dot2: { top: '98px', right: '23px' },
  dot3: { top: '155px', right: '315px' },
};

//desktop
const descktopSize = { sizeS: '12px', sizeL: '14px' };

const desktopPlace = {
  dot1: { top: '116px', right: '1094px' },
  dot2: { top: '126px', right: '171px' },
  dot3: { top: '199px', right: '617px' },
};

const dotPulse = keyframes`
  0% {
    transform: scale(1) rotate(-25deg);
  }
  50% {
    transform:scale(0.5) rotate(-25deg);
  }
  100% {
    transform:  rotate(-25deg) scale(1);
  }
`;

const flash = keyframes`
  0% {
    background-color: grey;
  }
  50% {
    background-color: white;
  }
  100% {
    background-color:grey;
  }
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Dot1 = styled.div`
  position: absolute;
  top: ${place.dot1.top};
  right: ${place.dot1.right};
  height: ${size.sizeL};
  width: ${size.sizeL};
  border-radius: 3px;
  background-color: ${greenColor};
  transform: rotate(-25deg);
  animation: ${dotPulse} 3s ease-in-out infinite;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    top: ${tabletPlace.dot1.top};
    right: ${tabletPlace.dot1.right};
    height: ${descktopSize.sizeL};
    width: ${descktopSize.sizeL};
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    top: ${desktopPlace.dot1.top};
    right: ${desktopPlace.dot1.right};
  }
`;

export const Dot2 = styled.div`
  position: absolute;
  top: ${place.dot2.top};
  right: ${place.dot2.right};
  height: ${size.sizeL};
  width: ${size.sizeL};
  border-radius: 3px;
  background-color: ${greenColor};
  transform: rotate(-25deg);
  animation: ${rotateAnimation} 2s linear infinite;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    top: ${tabletPlace.dot2.top};
    right: ${tabletPlace.dot2.right};
    height: ${descktopSize.sizeL};
    width: ${descktopSize.sizeL};
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    top: ${desktopPlace.dot2.top};
    right: ${desktopPlace.dot2.right};
  }
`;

export const Dot3 = styled.div`
  position: absolute;
  top: ${place.dot3.top};
  right: ${place.dot3.right};
  height: ${size.sizeL};
  width: ${size.sizeL};
  border-radius: 3px;
  background-color: ${greyColor};
  transform: rotate(-25deg);
  animation: ${flash} 4s infinite;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    top: ${tabletPlace.dot3.top};
    right: ${tabletPlace.dot3.right};
    height: ${descktopSize.sizeL};
    width: ${descktopSize.sizeL};
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    top: ${desktopPlace.dot3.top};
    right: ${desktopPlace.dot3.right};
  }
`;
