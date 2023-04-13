import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: ${({ theme: { devices } }) => devices.mobile};
  margin: 0 auto;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    max-width: ${({ theme: { devices } }) => devices.tablet};
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    max-width: ${({ theme: { devices } }) => devices.desktop};
  }
`;
