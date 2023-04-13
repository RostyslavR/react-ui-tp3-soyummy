import styled from 'styled-components';
import imgmob from 'images/background/spinach_bottom_left_mob_1x.png';
import imgtab from 'images/background/spinach_bottom_left_tab_1x.png';
import imgdesk from 'images/background/spinach_bottom_left_desk_1x.png';
// import {theme} from 'constants/theme';

export const SectionTitle = styled.h3`
  position: absolute;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.tertiaryDarkText};
  top: 114px;
  z-index: 10;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
    top: 136px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 1;
    top: 164px;
  } ;
`;
export const Spinach = styled.div`
  margin: 0 auto;
  position: absolute;
  z-index: -1;
  background-image: url(${imgmob});
  background-size: contain;
  pointer-events: none;
  background-repeat: no-repeat;
  width: 256px;
  height: 392px;
  left: 0px;
  top: 2960px;
  // bottom: 0px;

  @media screen and (min-width: 768px) {
    background-image: url(${imgtab});
    width: 423px;
    height: 646px;
    left: 0px;
    top: 1540px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${imgdesk});
    width: 558px;
    height: 852px;
    left: 0px;
    top: 900px;
    bottom: 0px;
  } ;
`;
