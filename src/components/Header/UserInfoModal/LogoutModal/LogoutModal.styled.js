import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.extraContent};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  font-size: 14px;
  color: ${p => p.theme.colors.primaryDarkText};
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.content};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const Button = styled.button`
  width: calc(50% - 4px);
  padding: 14px;
  background-color: ${p =>
    p.status === 'cancel'
      ? p.theme.colors.normalGrey
      : p.theme.colors.greenAccent};
  border-radius: ${p => p.theme.radii.m};
  border: inherit;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.extraContent};
  color: ${p =>
    p.status === 'cancel'
      ? p.theme.colors.primaryDarkText
      : p.theme.colors.primaryLightText};
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
  &:hover,
  &:focus {
    background-color: ${p =>
    p.status === 'cancel'
        ? p.theme.colors.secondaryLightBackground
        : p.theme.colors.secondaryDarkBackground};
    border: ${p =>p.status === 'cancel'
        ? p.theme.radii.userProfile
        : p.theme.radii.userDarkProfile};    
  }
  @media screen and (min-width: 768px) {
    width: calc(50% - 8px);
    font-size: 16px;
  }
`;