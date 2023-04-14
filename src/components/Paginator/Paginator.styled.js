import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-weight: 700;
  background-color: ${p => p.theme.colors.whiteBackgroundToBlack};
  border-radius: 20px;
  padding: 5px;
  box-shadow: 0.4em 0.4em 5px rgba(122, 122, 122, 0.3);

  @media screen and (max-width: 600px) {
    margin-top: 15px;
    border-radius: 26px;
  }
`;

export const PaginationButton = styled.button`
  display: flex;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 3px;
  border: none;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#EBF3D4' : 'transparent')};
  color: ${({ active, theme }) =>
    active ? '#00000' : theme.colors.blackCloseIconToWhite};
  cursor: pointer;
  font-size: 0.8rem;
  line-height: 1.2;

  &:hover:not(:disabled) {
    background-color: ${({ active }) => (active ? '#EBF3D4' : '#f1f1f1')};
    color: ${p => p.theme.colors.whiteBackgroundToBlack};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  @media screen and (max-width: 600px) {
    width: 25px;
    height: 25px;
    margin: 0 2px;
    font-size: 0.7rem;
  }
`;

export const PaginationNumbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;
