import { createPortal } from 'react-dom';
import { ReactComponent as Icon } from '../../images/commonSvgImg/icon-arrow-right.svg';
import {
  ChooseYourBreakfastContainer,
  ChooseYourBreakfastText,
  ChooseYourBreakfastLink,
} from './ChooseYourBreakfast.styled';

const mainContainer = document.querySelector('#main-bg');

const ChooseYourBreakfast = () => {
  return createPortal(
    <ChooseYourBreakfastContainer>
      <ChooseYourBreakfastText>
        <span>Delicious and healthy</span> way to enjoy <br />a variety of fresh
        ingredients in one satisfying meal
      </ChooseYourBreakfastText>
      <ChooseYourBreakfastLink to="/categories">
        See recipes
        <Icon style={{ stroke: 'inherit' }} />
      </ChooseYourBreakfastLink>
    </ChooseYourBreakfastContainer>,
    mainContainer
  );
};

export default ChooseYourBreakfast;
