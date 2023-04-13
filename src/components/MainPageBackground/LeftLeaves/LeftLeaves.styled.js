import styled from 'styled-components';
import imgMob from '../../../images/soYummy/spinach_top_left_1x_mob.png';
import imgTab from '../../../images/soYummy/spinach_top_left_1x_tab.png';
import imgDesk from '../../../images/soYummy/spinach_top_left_1x_desk.png';

export const LeftleavesDiv = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  z-index: -2;
  width: 48px;
  height: 202px;

  background-image: url(${imgMob});
  background-size: cover;

  @media screen and (min-width: 768px) {
    top: 0px;
    width: 58px;
    height: 315px;
    background-image: url(${imgTab});
  }

  @media screen and (min-width: 1440px) {
    top: 0px;
    width: 107px;
    height: 411px;
    background-image: url(${imgDesk});
  }
`;
