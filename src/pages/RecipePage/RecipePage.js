import { useParams } from 'react-router-dom';
import { useRecipeDetails } from 'api/hooks';

import { RecipeIngredientsList } from 'components/RecipeIngredientsList';
import { RecipePageHero } from 'components/RecipePageHero';
import { RecipePreparation } from 'components/RecipePreparation';
import { Loader } from 'components/Loader';
import { Container } from 'commonComponents/Container';

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
        <Container style={{ paddingLeft: + 1 +'px', paddingRight: + 1 +'px' }}>
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
