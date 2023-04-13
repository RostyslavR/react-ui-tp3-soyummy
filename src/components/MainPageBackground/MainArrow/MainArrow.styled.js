import styled from 'styled-components';
import imgTabl from '../../../images/soYummy/arrow_1x_tabl.png';
import imgTDesk from '../../../images/soYummy/arrow_1x_desk.png';

export const MainArrowDiv = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    position: absolute;
    width: 160px;
    height: 120px;
    right: 70px;
    top: 446px;
    z-index: 4;

    background-image: url(${imgTabl});
    background-size: 100%;
    background-repeat: no-repeat;
    transform: rotate(-4deg);
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgTDesk});
    width: 220px;
    height: 160px;

    right: 170px;
    top: 539px;
  }
`;
