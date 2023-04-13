import { InputForm, IngredBox, Ubox } from './AddRecipeForm.styled';
import { AutoInput } from './AutoInput';

import { handleKeyPress } from './lib';

const units = [
  { t: 'g' },
  { t: 'kg' },
  { t: 'liter' },
  { t: 'ml' },
  { t: 'tbs' },
  { t: 'tsp' },
];

export const RecipeIngredientsFields = ({
  idx,
  ingredientList,
  myIngredients,
  handleAutoinput,
}) => {
  const handleInput = ({ target: { name, value } }) => {
    handleAutoinput({
      name,
      value,
      idx,
      element: null,
    });
  };

  const handleAuto = item => {
    handleAutoinput({ ...item, idx });
  };

  return (
    <IngredBox>
      <AutoInput
        list={ingredientList}
        field="ttl"
        inputName="ingredient"
        // inputValue={myIngredients[idx].ttl}
        handleAutoinput={handleAuto}
        required
        // flexGrow={1}
        // width="45%"
        height="53px"
      />
      <InputForm
        name="quantity"
        type="text"
        // placeholder="quantity"
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        required
        // value={myIngredients[idx].quantity}
        // variant="flushed"
        autoComplete="off"
        width="30px"
        height="53px"
        marginLeft={32}
      />
      <Ubox>
        <AutoInput
          list={units}
          field="t"
          inputName="unit"
          // inputValue={myIngredients[idx].unit}
          handleAutoinput={handleAuto}
          required
          // width="25%"
          height="53px"
        />
      </Ubox>
    </IngredBox>
  );
};
