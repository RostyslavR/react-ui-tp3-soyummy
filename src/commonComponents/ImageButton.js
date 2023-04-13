import styled from 'styled-components';

export const ImageButton = styled.img`
  display: block;
  width: 279px;
  height: 268px;
  align-self: center;
  margin-bottom: 32px;
  object-fit: contain;
  alt: 'food';
  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    align-self: start;
  }
  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    width: 357px;
    height: 344px;
  }
`;
