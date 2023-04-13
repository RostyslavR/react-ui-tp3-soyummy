import { useShoppingList } from 'api/hooks';

import { RecipeIngredient } from './RecipeIngredient';
import {
  AddToList,
  Ingredients,
  IngredientsList,
  Number,
  IngedientsListUl,
} from './RecipeIngredientsList.styled';

export const RecipeIngredientsList = ({ recipeId, ingredients }) => {
  const shoppingList = useShoppingList();
  const selectedIngredientIds = shoppingList.data
    ?.filter(item => item.recipe === recipeId)
    ?.map(item => item.id);

  return (
    <>
      <IngredientsList>
        <Ingredients>Ingredients</Ingredients>
        <Number>Number</Number>
        <AddToList>Add to list</AddToList>
      </IngredientsList>

      <IngedientsListUl>
        {ingredients &&
          ingredients.map(ingredient => {
            return (
              <RecipeIngredient
                key={ingredient._id}
                ingredient={ingredient}
                isSelected={
                  selectedIngredientIds?.includes(ingredient._id) ?? false
                }
                recipeId={recipeId}
              />
            );
          })}
      </IngedientsListUl>
    </>
  );
};