import styled from 'styled-components';
import imgMob from '../../../images/soYummy/bowl_veg_top_right_1x_mob.png';
import imgTab from '../../../images/soYummy/bowl_veg_top_right_1x_tab.png';
import imgDesk from '../../../images/soYummy/bowl_veg_top_right_1x_desk.png';

export const MainPictureDiv = styled.div`
  position: absolute;
  width: 320px;
  height: 296px;
  top: 322px;
  left: 50%;
  z-index: -1;
  background-size: contain;

  background-image: url(${imgMob});
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    width: 378px;
    height: 351px;
    left: 100%;
    top: 159px;
    transform: translateX(-100%);
    background-image: url(${imgTab});
  }

  @media screen and (min-width: 1440px) {
    width: 578px;
    height: 539px;
    left: 87%;
    top: 126px;
    background-image: url(${imgDesk});
  }
`;
