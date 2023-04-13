import styled from 'styled-components';

import greenDot_mob_1 from '../../images/background/dot_green_mob_1x.png';
// import greenDot_mob_2 from '../images/background/dot_green_mob_2x.png';
import greenDot_tab_1 from '../../images/background/dot_green_tab_1x.png';
// import greenDot_tab_2 from '../images/background/dot_green_tab_2x.png';
import greenDot_desk_1 from '../../images/background/dot_green_desk_1x.png';
// import greenDot_desk_2 from '../images/background/dot_green_desk_2x.png';
import blackDot_mob_1 from '../../images/background/dot_black_mob_1x.png';
// import blackDot_mob_2 from '../images/background/dot_black_mob_2x.png';
import blackDot_tab_1 from '../../images/background/dot_black_tab_1x.png';
// import blackDot_tab_2 from '../images/background/dot_black_tab_2x.png';
import blackDot_desk_1 from '../../images/background/dot_black_desk_1x.png';
// import blackDot_desk_2 from '../images/background/dot_black_desk_2x.png';

export const ContainerDots = styled.div`
  z-index: -1;
  position: absolute;
  width: 345px;
  height: 192px;
  background-image: url(${greenDot_mob_1}), url(${blackDot_mob_1}),
    url(${greenDot_mob_1});
  background-repeat: no-repeat;
  background-size: 10px 10px, 7px 7px, 10px 10px;
  background-position: left 105px top 14px, left 231px top 79px,
    left 332px top 46px;

  @media screen and (min-width: 768px) {
    width: 718px;
    height: 240px;
    background-image: url(${greenDot_tab_1}), url(${blackDot_tab_1}),
      url(${greenDot_tab_1});
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: left 189px top 17px, left 407px top 87px,
      left 695px top 31px;
  }

  @media screen and (min-width: 1440px) {
    width: 1180px;
    height: 240px;
    background-image: url(${greenDot_desk_1}), url(${blackDot_desk_1}),
      url(${greenDot_desk_1});
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: left 228px top 56px, left 706px top 139px,
      left 1149px top 69px;
  }
`;
