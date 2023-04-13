import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  padding-top: 4px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 343px;
  height: auto;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding-top: 65px;
    padding-bottom: 50px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 54px;
    width: 1240px;
  }
`;

export const FavoritesListContent = styled.ul`
  display: flex;
  flex-direction: column;
  width: 343px;
  gap: 18px;

  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    gap: 50px;
  }
`;

export const FavoritesItemContent = styled.div`
  min-width: 343px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.whiteBackgroundToBlack};

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 28px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    padding: 40px;
  }
`;
