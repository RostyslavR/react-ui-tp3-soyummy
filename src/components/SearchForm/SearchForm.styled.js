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
  color: ${props => props.theme.colors.primaryLightText};
  background: ${props => props.color};

  //background: ${props => props.theme.colors.greenAccent},
  border: 1px solid #f0f0f0;
  border-radius: 60px 120px 60px 120px;

  &:hover {
    background-color: ${props =>
      props.color === '#8baa36' ? '#22252a' : '#8baa36'};
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

    -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

    :hover {
      box-shadow: ${props =>
        props.color === '#8baa36'
          ? '0 0 40px 40px #22252a inset'
          : '0 0 40px 40px #8baa36 inset'};
    }
  }
`;
// Alex background: #22252a;

//  hover:  background: #8baa36;
//  font-family: ${props => props.theme.fonts.primary};
//   font-size: ${props => props.theme.fontSizes[10]}px;
