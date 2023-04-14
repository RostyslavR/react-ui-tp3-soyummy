import styled from 'styled-components';

export const TitleBox = styled.div`
  position: relative;
  height: 192px;
  padding-top: 64px;

  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    height: 208px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    height: 258px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
