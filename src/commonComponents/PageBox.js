import styled from 'styled-components';

export const PageBox = styled.div`
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
