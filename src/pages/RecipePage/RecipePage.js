import { useParams } from 'react-router-dom';
import { useRecipeDetails } from 'api/hooks';

import { RecipeIngredientsList } from 'components/RecipeIngredientsList';
import { RecipePageHero } from 'components/RecipePageHero';
import { RecipePreparation } from 'components/RecipePreparation';
import { Loader } from 'components/Loader';
import { Container } from 'components/Container';

export const RecipePage = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeDetails(recipeId);

  if (recipe.isLoading) {
    return <Loader></Loader>;
  }

  if (recipe.data) {
    const {
      title,
      description,
      favorites,
      time,
      instructions,
      thumb,
      ingredients,
      isFavorite,
      _id,
      preview,
    } = recipe.data;

    console.log(recipe.data._id);
    console.log(recipe.data.isFavorite);
    console.log(recipe.data.preview);
    console.log(recipe.data);

    return (
      <>
        <RecipePageHero
          _id={_id}
          isFavorite={isFavorite}
          title={title}
          description={description}
          favorites={favorites}
          time={time}
        ></RecipePageHero>
        <Container>
          <RecipeIngredientsList
            recipeId={recipeId}
            ingredients={ingredients}
          ></RecipeIngredientsList>
          <RecipePreparation
            preview={preview}
            description={instructions}
            foto={thumb}
          ></RecipePreparation>
        </Container>
      </>
    );
  }
};
