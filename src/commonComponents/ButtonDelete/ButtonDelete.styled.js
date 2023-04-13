import styled from 'styled-components';

export const BtnDel = styled.button`
  background: ${props => props.bgColor || '#EBF3D4'};
  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 14px;
  border: none;
  outline: none;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px;
  margin: 0 auto;
  color: ${props => props.iconColor || 'black'};
  :hover,
  :focus {
    scale: 1.2;
    background-color: ${props => props.hoverColor || '#8baa36'};
    color: ${props => props.iconHoverColor || 'white'};
  }
  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
    padding: 8px;
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
    padding: 10px;
    font-size: 18px;
  }
`;
