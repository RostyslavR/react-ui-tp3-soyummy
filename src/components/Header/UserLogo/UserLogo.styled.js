import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  margin-right: 24px;
  gap: 14px;
  font-size: 14px;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: ${p => p.theme.lineHeights.userLink};
  color: ${p => p.theme.colors.primaryDarkText};
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};

  & img {
    width: 34px;
    height: 34px;
    border-radius: ${p => p.theme.radii.round};
    
  }
  
  @media screen and (min-width: 768px) {
    margin-right: 50px;
    & img {
      width: 44px;
      height: 44px;
    }
  }
`;

