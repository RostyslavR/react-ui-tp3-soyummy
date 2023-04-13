import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FavoritesContentLi = styled.li`
  padding: 14px;
  display: flex;
  gap: 14px;

  width: 343px;
  height: 152px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.whiteBackgroundToBlack};

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

export const ImageFavoriteCard = styled.img`
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

export const FavoriteDishTitel = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.secondaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const FavoriteBtnWrapper = styled.div`
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

export const FavoriteDescription = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const FavoriteDeleteBtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const FavoriteSeeBtn = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 87px;
  height: 27px;

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 45px;
  }
  @media screen and (min-width: 1440px) {
    width: 172px;
    height: 59px;
  }
`;

export const FavoriteTime = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.secondaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
