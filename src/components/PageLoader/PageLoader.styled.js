import styled, { keyframes } from 'styled-components';
import { ReactComponent as Logo } from 'images/commonSvgImg/logo_desk.svg';

export const BackDrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: ${p => p.theme.colors.greenAccent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`

0% {
  transform: rotateY(0deg);
}
100% {
  transform: rotateY(360deg);
}

`;

export const IconLoader = styled(Logo)`
  width: 150px;
  height: 150px;
  color: white;
  animation: ${rotate} 2s ease-in-out infinite;
`;
