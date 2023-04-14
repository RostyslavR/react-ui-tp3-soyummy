import styled from 'styled-components';

export const PageTitle = styled.h2`
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 28px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.semibold};
  margin-top: 50px;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    font-size: 32px;
    margin-top: 72px;
  }
  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    font-size: 44px;
    margin-top: 100px;
  }
`;
