import { InputForm, IngredBox, Ubox } from './AddRecipeForm.styled';
import { AutoInput } from './AutoInput';

import { handleKeyPress } from './lib';
import { units } from '../../constants/units';

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
        handleAutoinput={handleAuto}
        required
        height="53px"
      />
      <InputForm
        name="quantity"
        type="text"
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        required
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
          handleAutoinput={handleAuto}
          required
          height="53px"
        />
      </Ubox>
    </IngredBox>
  );
};
