import styled from 'styled-components';

export const PageBox = styled.div`
  /* position: relative; */
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  /* min-height: 100vh; */
  /* padding-bottom: 100px; */

  /* color: ${({ theme: { colors } }) => colors.primaryLightText}; */
  /* background-color: ${({ theme: { colors } }) => colors.lightBackground}; */

  /* overflow: hidden; */
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
