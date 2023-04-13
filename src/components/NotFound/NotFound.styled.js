import styled from 'styled-components';


export const NotFoundContainer = styled.div`
  max-width: 375px;
  height: 450px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
 

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const NotFoundImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;

`;

export const Alert = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 48px;
  margin-bottom: 16px;
  text-align: center;
`;

export const AlertContainer = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.blackText};
  width: 206px;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-bottom: 204px;
  }

  @media screen and (min-width: 1440px) {

  }
`;

export const AlertTextPartOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[5]}px; //18px
  line-height: ${props => props.theme.fontSizes[6]}px; //20px
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-top: 32px;
    font-size: ${props => props.theme.fontSizes[7]}px; //24px
    line-height: ${props => props.theme.fontSizes[7]}px; //24px
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin-top: 32px;
  }
`;

export const AlertTextPartTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[3]}px; //14px
  line-height: ${props => props.theme.fontSizes[5]}px; //18px
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-top: 32px;
    font-size: ${props => props.theme.fontSizes[5]}px; //18px
    line-height: ${props => props.theme.fontSizes[7]}px; //24px
    font-weight: 400px;
    margin-top: 14px;
  }
`;
