import { useCategories } from 'api/hooks';
import { VBox, InputForm, LabelBox, Label, Dbox } from './AddRecipeForm.styled';
import { AutoInput } from './AutoInput';

const times = [
  { t: '5' },
  { t: '10' },
  { t: '15' },
  { t: '20' },
  { t: '30' },
  { t: '40' },
  { t: '50' },
  { t: '60' },
];

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
