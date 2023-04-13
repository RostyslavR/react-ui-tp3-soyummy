import styled from 'styled-components';

export const Box = styled.div`
  width: 120px;

  ${({ size }) =>
    size === 26 &&
    `
    content-visibility: hidden;
  `}

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    ${({ size }) =>
      size === 20 &&
      `
    width: 134px;
  `}
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    ${({ size }) =>
      size === 26 &&
      `
    margin-bottom: 100px;
    width: 164px;
    content-visibility: auto;
  `}
  }
`;

export const IconList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const IconImg = styled.img`
  width: ${({ size }) => `${size}px`};
  &:hover,
  :focus {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;
