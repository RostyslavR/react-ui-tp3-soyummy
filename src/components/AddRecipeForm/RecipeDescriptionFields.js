import { useCategories } from 'api/hooks';
import { VBox, InputForm, LabelBox, Label, Dbox } from './AddRecipeForm.styled';
import { AutoInput } from './AutoInput';
import { times } from '../../constants/times';

export const RecipeDescriptionFields = ({
  handleFormData,
  handleAutoinput,
}) => {
  const categories = useCategories();

  return (
    <VBox>
      <InputForm
        name="title"
        placeholder="Enter item title"
        onChange={handleFormData}
        autoComplete="off"
        required
        height="43px"
      />
      <InputForm
        name="description"
        placeholder="Enter about recipe"
        onChange={handleFormData}
        autoComplete="off"
        required
        height="43px"
      />
      <LabelBox>
        <Label>Category</Label>
        <Dbox>
          {' '}
          <AutoInput
            list={categories.data ?? []}
            field="name"
            inputName="category"
            handleAutoinput={handleAutoinput}
            required
            width="123px"
            height="43px"
          />
        </Dbox>
      </LabelBox>
      <LabelBox>
        <Label>Cooking time</Label>
        <Dbox>
          <AutoInput
            list={times}
            field="t"
            addText=" min"
            inputName="time"
            handleAutoinput={handleAutoinput}
            required
            width="123px"
            height="43px"
          />
        </Dbox>
      </LabelBox>
    </VBox>
  );
};
