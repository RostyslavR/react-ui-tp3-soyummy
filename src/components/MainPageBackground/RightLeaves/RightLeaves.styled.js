import styled from 'styled-components';
import imgMob from '../../../images/soYummy/spinach_top_right_1x_mob.png';
import imgTab from '../../../images/soYummy/spinach_top_right_1x_tab.png';
import imgDesk from '../../../images/soYummy/spinach_top_right_1x_desk.png';

export const RightLeavesDiv = styled.div`
  position: absolute;
  min-width: 375px;
  min-height: 713px;
  top: 50px;
  right: 0px;
  z-index: -2;
  margin-left: 0;

  background-image: url(${imgMob});
  filter: blur(2px);

  background-size: cover;

  @media screen and (min-width: 768px) {
    top: -35px;
    min-width: 605px;
    min-height: 690px;
    background-image: url(${imgTab});
    filter: blur(0px);
  }

  @media screen and (min-width: 1440px) {
    top: 0px;
    min-width: 914px;
    min-height: 799px;
    background-image: url(${imgDesk});
  }
`;
