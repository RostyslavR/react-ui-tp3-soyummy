import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: ${p => p.theme.colors.whiteBackgroundToBlack};
  border-radius: 25px;
  padding: 5px;
  box-shadow: 0.4em 0.4em 5px rgba(122, 122, 122, 0.3);
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#EBF3D4' : 'transparent')};
  color: ${({ active, theme }) =>
    active
      ? theme.colors.whiteBackgroundToBlack
      : theme.colors.blackCloseIconToWhite};
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${({ active }) => (active ? '#EBF3D4' : '#f1f1f1')};
    color: ${p => p.theme.colors.whiteBackgroundToBlack};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    color: black;
  }
`;

export const PaginationNumbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
