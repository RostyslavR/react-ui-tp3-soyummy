import styled from 'styled-components';
import { BsCheck } from 'react-icons/bs';

export const IngredientsList = styled.div`
  margin-bottom: 24px;
  margin-top: 50px;
  background-color: ${props => props.theme.colors.greenAccent};
  border-radius: 8px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 2em;
  @media (min-width: 768px) {
    grid-template-columns: 4fr 2fr 1fr;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 4fr 2fr 1fr;
  }
`;

export const Ingredients = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes[1]}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: 27px;
  padding-top: 21px;
  padding-bottom: 21px;
  color: ${props => props.theme.colors.lightBackground};
  margin-left: 20px;
  display: flex;
  justify-content: left;
  align-items: left;
  letter-spacing: 0.03em;
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
`;

export const Number = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes[1]}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: 27px;
  color: ${props => props.theme.colors.lightBackground};
  padding-top: 21px;
  padding-bottom: 21px;
  display: flex;
  justify-content: right;
  align-items: right;
  letter-spacing: 0.03em;
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[4]}px;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1440px) {
    justify-content: right;
    align-items: right;
  }
`;

export const AddToList = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes[1]}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: 27px;
  color: ${props => props.theme.colors.lightBackground};
  padding-top: 21px;
  padding-bottom: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  letter-spacing: 0.03em;
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
`;

export const IngedientsListItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const IngedientsItemList = styled.li`
  border-radius: 8px;
  background: ${props => props.theme.colors.recipyLightBgItem};
  display: flex;
  width: 100%;
  padding: 14px 29px 14px 14px;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 27px 70px 27px 58px;
  }
`;

export const IngedientsImg = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 12px;
  @media (min-width: 768px) {
    width: 112px;
    height: 112px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 128px;
    height: 128px;
    margin-right: 66px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const IngedientsTitle = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 1.6;
  max-width: 200px;
  @media (min-width: 768px) {
    max-width: 220px;
    font-size: ${props => props.theme.fontSizes[7]}px;
  }
  @media (min-width: 1440px) {
    max-width: 420px;
    line-height: 1;
  }
`;

export const IngedientsMeasure = styled.span`
  margin-right: 28px;
  border-radius: 4px;
  padding: 4px;
  min-width: 63px;
  max-width: 126px;
  text-align: center;
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes[1]}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  background-color: ${props => props.theme.colors.greenAccent};
  color: ${props => props.theme.colors.lightBackground};
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
    padding: 4px 8px;
    margin-right: 78px;
  }
`;

export const CheckBoxWrap = styled.span`
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: transparent;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const IngedientsCheck = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  ${IngedientsCheck}:checked + ${CheckBoxWrap} {
    color: ${props => props.theme.colors.greenAccent};
  }
  cursor: pointer;
`;

export const CheckMarkIcon = styled(BsCheck)`
  width: 18px;
  height: 18px;
  color: ${props => props.theme.colors.greenAccent};
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
