import styled from 'styled-components';
import { ReactComponent as RemoveIcon } from 'images/commonSvgImg/Icon_close.svg';
// import { style } from '@mui/system';

export const ShoppingItemContainer = styled.div`
  height: 84px;
  display: flex;
  flex-direction: row;

  align-items: flex-start;
  margin: 24px 16px;
  background-color: ${({ theme }) => theme.colors.primaryLightText};

  border-bottom: 1px solid #e0e0e0;
  /* gap: 24px; */

  @media screen and (min-width: 768px) {
    height: 140px;
    margin: 44px 32px;
    /* gap: 44px; */
    /* padding-top: 44px; */
  }

  @media screen and (min-width: 1440px) {
    margin: 44px 32px;
    /* padding-bottom: 42px; */
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ProductFotoWrapper = styled.div`
  background: ${({ theme }) => theme.colors.recipyLightBgItem};
  width: 60px;
  height: 60px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 24px; */

  @media screen and (min-width: 768px) {
    width: 94px;
    height: 98px;
    border-radius: 8px;
    /* margin-bottom: 42px; */
  }
`;

export const ProductFoto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 82px;
    height: 82px;
  }
`;

export const ProductName = styled.p`
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.shoppingListProductName};
  margin-bottom: 16px;
  margin-left: 10px;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductNumber = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primaryLightTextNoChange};
  /* width: 56px; */
  height: 24px;
  margin-right: 40px;
  text-align: center;
  background: ${({ theme }) => theme.colors.greenAccent};
  border-radius: ${({ theme }) => theme.radii.m};
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 61px; */
  min-width: 56 px;
  width: auto;

  padding: 0 8px;
  white-space: normal; /* Allow line breaks */

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 35px;
    margin-right: 90px;
    font-size: 18px;
    line-height: 27px;
    min-width: 68 px;
    width: auto;

    padding: 0 16px;
    white-space: normal; /* Allow line breaks */
  }

  @media screen and (min-width: 1440px) {
    margin-right: 178px;
    /* margin-bottom: 105px; */
  }
`;
export const RemoveItemButton = styled.button`
  /* mobile size */
  width: 8 px;
  height: 8 px;
  border: none;
  cursor: pointer;
  background: transparent;
  margin-right: 18px; // 38-8

  @media screen and (min-width: 768px) {
    /* tablet size */
    margin-right: 42px; // 80-32

    width: 12px;
    height: 12px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 72px; //172 -100
  }
`;

export const RemoveIconWrapper = styled(RemoveIcon)`
  width: 8px;
  height: 8px;
  fill: ${({ theme }) => theme.colors.blackCloseIconToWhite};
  stroke: ${({ theme }) => theme.colors.blackCloseIconToWhite};
  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
`;
