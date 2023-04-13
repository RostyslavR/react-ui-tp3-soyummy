import styled from 'styled-components';

export const TitleBar = styled.div`
  position: relative;
  height: 22px;
  padding-left: 16px;
  padding-right: 16px;

  /* background-color: ${({ theme: { colors } }) => colors.lightBackground}; */

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    height: 60px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    height: 50px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
