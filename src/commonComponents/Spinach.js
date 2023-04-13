import styled from 'styled-components';
import img from 'images/spinach.png';

export const Spinach = styled.div`
  position: absolute;
  bottom: -200px;
  left: -20px;
  /* transform: rotate(0.88turn); */
  width: 256px;
  height: 392px;
  background-image: url(${img});
  background-size: contain;
  pointer-events: none;
`;
