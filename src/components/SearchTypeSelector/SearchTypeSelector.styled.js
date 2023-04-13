import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  .Select__control {
    border: none;
    box-shadow: none;
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontSizes[2]}px;
    border-radius: 5px;
    min-height: initial;
    background-color: ${props => props.theme.colors.normalGrey};
    width: 146px;
    height: 34px;
    line-height: 1.5;
    cursor: pointer;
    caret-color: transparent;
  }

  .Select__option {
    width: 146px;
    user-select: none;
    cursor: pointer;
    background-color: white;
    color: black;
    font-size: ${props => props.theme.fontSizes[2]}px;
    line-height: 1.5;
    outline: none;
    opacity: 0.5;
    &:active {
      background-color: #e6e6e6;
    }
  }

  .Select__dropdown-indicator {
    color: ${props => props.theme.colors.greenAccent};
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 0;

    svg {
      width: 14px;
      height: 14px;
    }

    &:before {
      content: none;
    }
    &:after {
      content: none;
    }
  }

  .Select__menu {
    width: 146px;
    border: none;
    box-shadow: none;
    background-color: white;
    color: black;
    margin-top: 0;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__single-value {
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) {
    .Select__control {
    font-size: ${props => props.theme.fontSizes[3]}px;
    width: 175px;
    height: 41px;
   
  }

  .Select__option {
    width: 175px;
    font-size: ${props => props.theme.fontSizes[3]}px;
   
  }

  .Select__dropdown-indicator {
     color: ${props => props.theme.colors.greenAccent};
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 14px;
    padding-left: 0;

    svg {
      width: 20px;
      height: 20px;
    }

  }

  .Select__menu {
    width: 175px;
    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    .Select__control {
font-size: ${props => props.theme.fontSizes[3]}px;
    width: 198px;
    height: 49px;
   
  }

  .Select__option {
    width: 198x;
    font-size: ${props => props.theme.fontSizes[3]}px;
   
  }

  .Select__dropdown-indicator {
    padding-bottom: 14px;
    padding-top: 14px;
    padding-right: 14px;
    padding-left: 0;

    svg {
      width: 20px;
      height: 20px;
    }

  }

  .Select__menu {
    width: 198px;
   
  }

`;
