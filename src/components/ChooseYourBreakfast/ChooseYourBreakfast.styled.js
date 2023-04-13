import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseYourBreakfastContainer = styled.div`
  z-index: 5;
  position: absolute;
  right: 25px;
  top: 280px;
  width: 225px;
  height: 92px;
  padding: 8px;

  margin: 157px 7px 115px 88px;

  background: ${p => p.theme.colors.lightBackgroundBody};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    position: absolute;
    padding: 12px;
    width: 261px;
    height: 100px;
    right: 40px;
    top: 372px;
    margin: 0px;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px;
    width: 298px;
    height: 114px;
    right: 122px;
    top: 462px;
  }
`;

export const ChooseYourBreakfastText = styled.p`
  width: auto;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 12px;
  line-height: 18px;
  /* or 150% */

  letter-spacing: -0.24px;

  & span {
    color: ${p => p.theme.colors.greenAccent};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 20px;
  }
`;

export const ChooseYourBreakfastLink = styled(Link)`
  position: absolute;
  right: 8px;
  bottom: 8px;
  font-size: 10px;
  line-height: 12px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  letter-spacing: 0.2px;

  color: ${p => p.theme.colors.secondaryDarkText};
  stroke: ${p => p.theme.colors.secondaryDarkText};
  gap: 4px;

  &:hover {
    color: ${p => p.theme.colors.greenAccent};
    stroke: ${p => p.theme.colors.greenAccent};
  }

  @media screen and (min-width: 768px) {
    right: 12px;
    bottom: 12px;
  }

  @media screen and (min-width: 1440px) {
    right: 16px;
    bottom: 16px;
  }
`;
