import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardItem = styled.li`
  padding: 14px;
  display: flex;
  gap: 14px;
  width: 343px;
  height: 152px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0.4em 0.4em 5px rgba(122, 122, 122, 0.3);
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 288px;
    gap: 24px;
    padding: 28px 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
    height: 404px;
    gap: 24px;
    padding: 40px;
  }
`;

export const ImageCard = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 228px;
    height: 232px;
  }
  @media screen and (min-width: 1440px) {
    width: 318px;
    height: 324px;
  }
`;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 179px;
  height: 125px;
  @media screen and (min-width: 768px) {
    width: 404px;
    height: 232px;
  }
  @media screen and (min-width: 1440px) {
    width: 802px;
    height: 324px;
  }
`;

export const TitleRecipe = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: #3e4462;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const ButtonDelete = styled.div`
  border: none;
  outline: none;
  position: absolute;
  bottom: 14px;
  right: 0;
  top: 0px;
  @media screen and (min-width: 768px) {
    top: 28px;
  }
  @media screen and (min-width: 1440px) {
    top: 40px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #23262a;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Time = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: #3e4462;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const SuperBtnWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 87px;
  height: 27px;
  @media screen and (min-width: 768px) {
    bottom: 28px;
    width: 138px;
    height: 45px;
  }
  @media screen and (min-width: 1440px) {
    bottom: 40px;
    width: 172px;
    height: 59px;
  }
`;
