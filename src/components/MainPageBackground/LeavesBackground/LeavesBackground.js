import { createPortal } from 'react-dom';
import { Backgroundleaves } from './LeavesBackground.styled';

const mainContainer = document.querySelector('#main-bg');

const LeavesBackground = () => {
  return createPortal(<Backgroundleaves></Backgroundleaves>, mainContainer);
};

export default LeavesBackground;
