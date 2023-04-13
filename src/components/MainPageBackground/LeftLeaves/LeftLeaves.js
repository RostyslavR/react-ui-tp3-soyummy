import { createPortal } from 'react-dom';
import { LeftleavesDiv } from './LeftLeaves.styled';

const mainContainer = document.querySelector('#main-bg');

const LeftLeaves = () => {
  return createPortal(<LeftleavesDiv></LeftleavesDiv>, mainContainer);
};

export default LeftLeaves;
