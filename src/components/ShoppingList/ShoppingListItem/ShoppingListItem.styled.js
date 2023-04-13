import styled from 'styled-components';
import { ReactComponent as RemoveIcon } from 'images/commonSvgImg/Icon_close.svg';
// import { style } from '@mui/system';

export const ShoppingItemContainer = styled.div`
  height: 84px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 140px;
  margin: 0 16px 24px 0;
  background-color: ${({ theme }) => theme.colors.primaryLightText};
  
  border-bottom: 1px solid #e0e0e0;
  gap: 24px;

  @media screen and (min-width: 768px) {
    height: 140px;
    margin: 0 32px;
    gap: 44px;
    padding-top: 44px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 140px;
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
  background: '#ebf3d4';
  width: 60px;
  height: 60px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 94px;
    height: 98px;
    border-radius: 8px;
    margin-bottom: 42px;
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
  color: ${({ theme }) => theme.colors.primaryLightText};
  width: 38px;
  height: 24px;
  margin-right: 50px;
  text-align: center;
  background: ${({ theme }) => theme.colors.greenAccent};
  border-radius: ${({ theme }) => theme.radii.m};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 61px;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 35px;
    margin-right: 114px;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 105px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 178px;
    margin-bottom: 105px;
  }
`;
export const RemoveItemButton = styled.button`
  /* mobile size */
  width: 8 px;
  height: 8 px;
  border: none;
  cursor: pointer;
  background: transparent;
  margin-right: 38px;
  margin-bottom: 73px;

  @media screen and (min-width: 768px) {
    /* tablet size */
    margin-right: 80px;
    margin-bottom: 124px;
    width: 12px;
    height: 12px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 172px;
    margin-bottom: 124px;
  }
`;


export const RemoveIconWrapper = styled(RemoveIcon)`
  width: 8px;
  height: 8px;
  fill: ${({ theme }) => theme.colors.primaryDarkText};
 
  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

 