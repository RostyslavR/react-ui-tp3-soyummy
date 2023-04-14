import styled from 'styled-components';
import { RecipeIngredientsFields } from './RecipeIngredientsFields';
import iconClose from 'images/commonSvgImg/cross.svg';

export const IngredientList = ({
  ingredientList,
  myIngredients,
  handleIngradientDelete,
  handleAutoinput,
}) => {
  return (
    <List>
      {myIngredients.map((item, idx) => (
        <Item
          key={idx}
          {...item}
          idx={idx}
          Delete={handleIngradientDelete}
          handleAutoinput={handleAutoinput}
          ingredientList={ingredientList}
          myIngredients={myIngredients}
        ></Item>
      ))}
    </List>
  );
};

const Item = ({
  idx,
  Delete,
  myIngredients,
  ingredientList,
  handleAutoinput,
}) => {
  return (
    <ListItem>
      <RecipeIngredientsFields
        idx={idx}
        ingredientList={ingredientList}
        myIngredients={myIngredients}
        handleAutoinput={handleAutoinput}
      />
      <Close
        src={iconClose}
        alt="delete ingredient"
        onClick={() => Delete(idx)}
      />
    </ListItem>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    width: 610px;
  }
`;

const ListItem = styled.li`
  display: flex;
  gap: 10px;
`;

const Close = styled.img`
  width: 14px;
  margin-left: 33px;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    margin-left: 177px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    margin-left: 80px;
  }
`;
