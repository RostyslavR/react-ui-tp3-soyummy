import styled from 'styled-components';

export const DishList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 100px;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  row-gap: 28px;
  justify-content: start;
  
  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 32px;
    margin-top: 50px;
    margin-bottom: 200px;
  };
  @media screen and (min-width: 1440px) {
    width: 100%;
    row-gap: 100px;
    column-gap: 12px;
    margin-top: 50px;
    margin-bottom: 200px;
  }
`;

export const DishItem = styled.li`
  
`;