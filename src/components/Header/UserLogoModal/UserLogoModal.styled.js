import styled from 'styled-components';

export const UserMenu = styled.div`
  display: flex;
  position: absolute;
  top: calc(100% + 14px);
  right: 0;
  transform: translateX(-50px);
  padding: 18px;
  gap: 28px;
  /* width: 160px;
  height: 130px; */
  flex-direction: column;
  background-color: ${p => p.theme.colors.primaryLightText};
  border: 1px solid #8baa36;
  border-radius: ${p => p.theme.radii.l};

  @media screen and (min-width: 768px) {
    gap: 32px;
    /* border: none; */
  }
`;

export const EditBtn = styled.button`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.userModalLink};
  font-size: 14px;
  color: ${p => p.theme.colors.primaryDarkText};
  transition: ${p => p.theme.transitions.main};

  & svg {
    width: 12px;
    height: 12px;
    stroke: #23262A;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenAccent};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.greenAccent};
  }
`;

export const LogOutBtn = styled.button`
  display: flex;
  width: 100%;
  gap: 4px;
  padding: 12px 30px;
  align-items: center;
  text-align: center;
  cursor: pointer; 
  box-sizing: border-box;
  white-space: nowrap;
  font-size: 10px;
  color: ${p => p.theme.colors.primaryLightText};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.btn};  
  background-color: ${p => p.theme.colors.greenAccent};
  outline: none;
  border: 1px solid transparent;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  
  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    border: ${p => p.theme.border.secondaryDarkBackground};
    color: ${p => p.theme.colors.primaryLightText};
    background-color: ${p => p.theme.colors.secondaryDarkBackground};
  }

  /* &:hover img,
  &:focus img {
    stroke: ${p => p.theme.colors.whiteText};
  } */
  & img {
    width: 18px;
    height: 18px;
    /* stroke: ${p => p.theme.colors.primaryLightText}; */
    transition: ${p => p.theme.transitions.main};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  } 
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;