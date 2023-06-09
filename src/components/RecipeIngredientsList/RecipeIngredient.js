import { useDeleteShoppingList } from 'api/hooks';
import { useAddShoppingList } from 'api/hooks';
import { useState } from 'react';
import {
  IngedientsItemList,
  IngedientsImg,
  Wrap,
  IngedientsTitle,
  IngedientsMeasure,
  IngedientsCheck,
  CheckBoxWrap,
  CheckBoxLabel,
  CheckMarkIcon,
} from './RecipeIngredientsList.styled';
import { Puff } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

export const RecipeIngredient = ({ ingredient, isSelected, recipeId }) => {
  const theme = useTheme();
  const { thb, _id, measure, ttl } = ingredient;
  const [isChecked, setIsChecked] = useState(isSelected ?? false);
  const deleteShoppingList = useDeleteShoppingList();
  const addShoppingList = useAddShoppingList();
  function handleClick(e) {
    setIsChecked(prev => !prev);
    // якщо чекбокс був обраний, робимо запит на видалення інгредієнта з ShoppingList
    if (isChecked) {
      deleteShoppingList.mutate([{ id: _id, recipe: recipeId }]);
      // якщо чекбокс не був обраний, робимо запит на додавання інгредієнта до ShoppingList
    } else {
      addShoppingList.mutate({ thb, id: _id, measure, ttl, recipe: recipeId });
    }
  }
  const isLoading = deleteShoppingList.isLoading || addShoppingList.isLoading;
  return (
    <IngedientsItemList>
      <Wrap>
        {<IngedientsImg src={thb ? thb : ''} alt="Ingredient" />}
        <IngedientsTitle>{ttl}</IngedientsTitle>
      </Wrap>
      <Wrap>
        <IngedientsMeasure>{measure}</IngedientsMeasure>

        <CheckBoxLabel>
          <IngedientsCheck
            type="checkbox"
            checked={isSelected}
            onChange={handleClick}
          />
          <CheckBoxWrap>
            {isLoading ? (
              <Puff
                height={'2.25em'}
                width={'2.25em'}
                color={theme.colors.greenAccent}
              />
            ) : (
              isSelected && <CheckMarkIcon />
            )}
          </CheckBoxWrap>
        </CheckBoxLabel>
      </Wrap>
    </IngedientsItemList>
  );
};
