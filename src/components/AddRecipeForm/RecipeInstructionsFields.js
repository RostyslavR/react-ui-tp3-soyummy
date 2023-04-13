import { TextForm } from './AddRecipeForm.styled';

export const RecipeInstructiosFields = ({ handleFormData }) => {
  return (
    <>
      <TextForm
        height="156px"
        name="instructions"
        placeholder="Enter instructions"
        onChange={handleFormData}
        required
      />
    </>
  );
};
