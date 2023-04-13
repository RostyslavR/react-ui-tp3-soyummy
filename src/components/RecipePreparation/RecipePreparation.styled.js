import styled from 'styled-components';
// import { theme } from 'constants';

export const RecipePreparationTitle = styled.h1`
font-family: ${props => props.theme.fonts.primary};
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 24px;
color: ${props => props.theme.colors.secondaryDarkText};
margin-bottom:35px;
margin-top: 96px;
`;

export const SectionPreparationDescription = styled.ul`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const TextCount = styled.span`
font-family: ${props => props.theme.fonts.primary};
  font-size: 14px;
  font-weight: font-weight: 600;
  color: ${props => props.theme.colors.whiteText};
  
`;

export const Count = styled.span`
  background-color: ${props => props.theme.colors.greenAccent};
  border-radius: 50%;
  display: block;
  width: 21px;
  height: 21px;
  padding: 2px;
  text-align: center;
`;

export const Text = styled.p`
  line-height: 1.5;
  margin-left: 14px;
  font-size: 12px;
  line-height: 1.33;
  color: rgba(0, 0, 0, 0.8);
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;
