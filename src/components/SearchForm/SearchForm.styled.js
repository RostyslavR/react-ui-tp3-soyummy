import styled from 'styled-components';

export const SearchFormSection = styled.form`
  position: relative;
  width: 295px;
  height: 52px;

  @media screen and (min-width: 768px) {
    width: 369px;
    height: 59px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 71px;
  }
`;

export const SearchInput = styled.input`
  padding: 0px 32px;
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-family: ${props => props.theme.fonts.primary};
  line-height: 18px;
  color: ${props => props.theme.colors.secondaryDarkText};
  width: 295px;
  height: 52px;
  border: 1px solid #f0f0f0;
  border-radius: 60px 120px 60px 120px;
  outline: none;
  background-color: ${props => props.theme.colors.primaryLightText};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 50px ${p => p.theme.colors.primaryLightText} inset !important;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-text-fill-color: ${p =>
      p.theme.colors.footerRightsReserved} !important;
    caret-color: white;
  }

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[4]}px;
    width: 369px;
    height: 59px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
    width: 510px;
    height: 70px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0px;
  width: 113px;
  height: 52px;
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes[4]}px;
  line-height: 21px;
  cursor: pointer;
  color: ${props => props.theme.colors.lightBackground};
  background-color: ${props => props.color};

  border: 1px solid #f0f0f0;
  border-radius: 60px 120px 60px 120px;
   transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${props =>
      props.color === props.theme.colors.greenAccent
        ? props.theme.colors.quaternaryDarkText
        : props.theme.colors.greenAccentSearch};
        transform: scale(1.05);
  }

  

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: 24px;
    width: 161px;
    height: 59px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;
    height: 70px;

    
    }
  }
`;
// Alex background: #22252a;

//  hover:  background: #8baa36;
//  font-family: ${props => props.theme.fonts.primary};
//   font-size: ${props => props.theme.fontSizes[10]}px;
