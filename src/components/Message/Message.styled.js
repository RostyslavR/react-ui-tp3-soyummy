import styled from 'styled-components';

export const CardWrap = styled.div`
  filter: drop-shadow(-1px 4px 2px rgba(50, 50, 0, 0.4));
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 28px 14px 14px;
  height: 242px;
`;

export const Text = styled.p`
  padding-bottom: 2px;
  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes[8]}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.whiteText};
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Title = styled.span`
  color: ${p =>
    p.isError ? p.theme.colors.redValidation : p.theme.colors.greenAccent};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.whiteText};
  background-color: ${p =>
    p.isError ? p.theme.colors.redValidation : p.theme.colors.greenAccent};
  border-radius: 9999px;
  border: 3px solid
    ${p =>
      p.isError ? p.theme.colors.redValidation : p.theme.colors.greenAccent};
  margin-left: auto;
  margin-right: auto;

  :hover {
    color: ${p =>
      p.isError ? p.theme.colors.redValidation : p.theme.colors.greenAccent};
    background-color: transparent;
  }
`;
