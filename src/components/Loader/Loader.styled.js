import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  color: ${p => p.theme.colors.greenAccent};
`;
