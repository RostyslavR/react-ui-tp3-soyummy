import { createPortal } from 'react-dom';
import { RightLeavesDiv } from './RightLeaves.styled';

const mainContainer = document.querySelector('#main-bg');

const RightLeaves = () => {
  return createPortal(<RightLeavesDiv></RightLeavesDiv>, mainContainer);
};

export default RightLeaves;
