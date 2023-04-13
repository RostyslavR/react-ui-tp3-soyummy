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
      {/* <Cross onClick={() => Delete(idx)} /> */}
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
  /* justify-content: space-between; */
`;

const Close = styled.img`
  width: 14px;
  margin-left: 33px;
  /* height: auto; */
  /* border-radius: 50%; */
  /* transition: transform 0.5s ease-in-out; // add a transition for smooth animation */
  /* transform: ${({ rotate }) => rotate === 'true' && 'rotate(180deg)'}; */

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    margin-left: 177px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    margin-left: 80px;
  }
`;

// const Cross = styled.div`
//   position: relative;
//   width: 50px;
//   height: 50px;
//   background-color: #333;

//   &::before,
//   &::after {
//     content: '';
//     position: absolute;
//     width: 10px;
//     height: 50px;
//     background-color: #fff;
//   }

//   &::before {
//     transform: rotate(45deg);
//   }

//   &::after {
//     transform: rotate(-45deg);
//   }
// `;

// Usage: <Cross />
