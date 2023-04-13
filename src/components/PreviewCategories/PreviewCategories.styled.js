import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PreviewCategoriesMain = styled.section`
  padding: 64px 16px 100px;
  @media screen and (min-width: 768px) {
    padding: 72px 32px 100px;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 100px 118px;
  }
`;

export const PreviewCategoriesContainer = styled.div`
  max-width: 343px;
  max-height: 445px;
  margin: 0 auto 32px;

  &:nth-child(4) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
    max-height: 485px;
    margin: 0 auto 50px;

    &:nth-child(4) {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    max-height: 505px;
    margin: 0 auto 100px;

    &:nth-child(4) {
      margin-bottom: 14px;
    }
  }
`;

export const PreviewCategoriesList = styled.ul`
  display: flex;
  width: 343px;
  height: 323px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 323px;
    margin-bottom: 40px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    height: 323px;
    margin-bottom: 50px;
    gap: 14px;
  }
`;

export const PreviewCategoriesTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.tertiaryDarkText};
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 44px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const PreviewCategoriesItem = styled.li`
  &:nth-child(n + 2) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    &:nth-child(-n + 2) {
      display: list-item;
    }
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(-n + 4) {
      display: list-item;
    }
  }
`;

export const PreviewCategoriesLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  gap: 8px;

  width: 94px;
  height: 38px;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  text-align: center;
  background: #8aa936;

  color: ${p => p.theme.colors.whiteText};
  border-radius: 6px;
  margin-left: auto;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const PreviewOtherCategories = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px 32px;
  width: 195px;
  height: 46px;

  font-size: 14px;
  line-height: 21px;
  text-align: center;

  color: ${p => p.theme.colors.darkAccent};

  border: 2px solid #8baa36;
  border-radius: 60px 140px 60px 140px;

  margin: auto;

  &:hover {
    color: ${p => p.theme.colors.primaryLightText};
    background: ${p => p.theme.colors.greenAccent};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 239px;
    height: 61px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
