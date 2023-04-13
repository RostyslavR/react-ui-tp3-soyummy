import { createPortal } from 'react-dom';
import { MainArrowDiv } from './MainArrow.styled';

const mainContainer = document.querySelector('#main-bg');

const MainArrow = () => {
  return createPortal(<MainArrowDiv></MainArrowDiv>, mainContainer);
};

export default MainArrow;
