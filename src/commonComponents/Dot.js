import styled from 'styled-components';

const dotY = [{ top: '76px' }, { top: '109px' }, { top: '142px' }];
const dotX = [{ left: '120px' }, { right: '16px' }, { right: '120px' }];
const dotColor = [
  { background: '#8BAA36' },
  { background: '#8BAA36' },
  { background: '#22252A' },
];
const dotW = [{ width: '8px' }, { width: '8px' }, { width: '6px' }];
const dotH = [{ height: '8px' }, { height: '8px' }, { height: '6px' }];

//tablet
const dotYt = [{ top: '85px' }, { top: '98px' }, { top: '155px' }];
const dotXt = [{ left: '219px' }, { right: '23px' }, { right: '315px' }];

//desktop
const dotYd = [{ top: '116px' }, { top: '126px' }, { top: '199px' }];
const dotXd = [{ left: '328px' }, { right: '171px' }, { right: '617px' }];

const dotWt = [{ width: '14px' }, { width: '14px' }, { width: '12px' }];
const dotHt = [{ height: '14px' }, { height: '14px' }, { height: '12px' }];

export const Dot = styled.div`
  position: absolute;
  transform: rotate(-25deg);
  border-radius: 3px;

  ${({ dotNumber }) => dotX[dotNumber]}
  ${({ dotNumber }) => dotY[dotNumber]}
  ${({ dotNumber }) => dotW[dotNumber]}
  ${({ dotNumber }) => dotH[dotNumber]}
  ${({ dotNumber }) => dotColor[dotNumber]}

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    ${({ dotNumber }) => dotXt[dotNumber]}
    ${({ dotNumber }) => dotYt[dotNumber]}
  ${({ dotNumber }) => dotWt[dotNumber]}
  ${({ dotNumber }) => dotHt[dotNumber]}

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
      ${({ dotNumber }) => dotXd[dotNumber]}
      ${({ dotNumber }) => dotYd[dotNumber]}
    }
  }
`;
