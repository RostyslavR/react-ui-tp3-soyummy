import styled from 'styled-components';
import imgMob from '../../../images/soYummy/bg_top_right_1x_mob.png';
import imgTab from '../../../images/soYummy/bg_top_right_1x_tab.png';
import imgDesk from '../../../images/soYummy/bg_top_right_1x_desk.png';

export const Backgroundleaves = styled.div`
  position: absolute;
  min-width: 306px;
  height: 660px;
  left: 68px;
  top: 175px;
  right: 0px;

  /* transform: rotate(42deg); */
  z-index: -4;

  background-image: url(${imgMob});
  background-repeat: no-repeat;
  background-position: right;
  /* background-size: cover; */

  @media screen and (min-width: 768px) {
    top: -10px;
    background-image: url(${imgTab});
  }

  @media screen and (min-width: 1440px) {
    top: -55px;
    mix-width: 730px;
    left: 710px;
    min-height: 799px;
    background-image: url(${imgDesk});
  }
`;
