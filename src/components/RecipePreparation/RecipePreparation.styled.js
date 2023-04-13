import styled from 'styled-components';

export const RecipePreparationTitle = styled.h1`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: ${props => props.theme.colors.secondaryDarkText};
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Box = styled.div`
  margin-top: 40px;
  @media (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
  }
`;

export const SectionPreparationDescription = styled.ul`
  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[12]};
  line-height: 1.6;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (min-width: 768px) {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes[14]};
    line-height: 1.2;
  }
  @media (min-width: 1440px) {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes[14]};
    margin-bottom: 0;
    padding-bottom: 200px;
    padding-right: 50px;
  }
`;

export const TextCount = styled.span`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 14px;
  font-weight: 600;
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
  color: ${props => props.theme.colors.primaryDarkText};
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const ImgThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 323px;
  margin-top: 40px;
  margin-bottom: 100px;
  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 100px;
    width: 433px;
    height: 332px;
  }
  @media (min-width: 1440px) {
    margin-top: 0px;
  }
`;

export const Img = styled.img`
  border-radius: 8px;
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: block;
`;

export const DefaultImg = styled.img`
  border-radius: 8px;
  width: 84px;
  height: 84px;
`;
