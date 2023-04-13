import {
  useRecipes,
  useRecipeDetails,
  usePopular,
  useMainRecipes,
  useFavorite,
} from '../hooks';
import { useState } from 'react';

export const RecipesTest = () => {
  const [filter, setFilter] = useState({});
  const recipes = useRecipes(filter, {
    onSuccess: console.log,
    onError: console.log,
  });
  const popular = usePopular({
    onSuccess: console.log,
    onError: console.log,
  });
  const favorite = useFavorite({
    onSuccess: console.log,
    onError: console.log,
  });

  const mainRecipes = useMainRecipes({
    onSuccess: console.log,
    onError: console.log,
  });

  const recipeDetail = useRecipeDetails('640cd5ac2d9fecf12e8897fc', {
    onSuccess: console.log,
    onError: console.log,
  });

  const isLoading =
    recipes.isLoading ||
    recipeDetail.isLoading ||
    popular.isLoading ||
    mainRecipes.isLoading ||
    favorite.isLoading;
  const error =
    recipes.error ||
    recipeDetail.error ||
    popular.error ||
    mainRecipes.error ||
    favorite.error;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.category.value);
    setFilter({
      category: e.target.category.value,
      title: e.target.title.value,
      ingredient: e.target.ingredient.value,
      page: e.target.page.value,
      limit: e.target.limit.value,
    });
  };
  return (
    <>
      <h3>Recipes</h3>
      {/* <p>{JSON.stringify(recipes.data)}</p> */}
      <form onSubmit={handleSubmit}>
        <label>
          Category
          <input name="category"></input>
        </label>
        <label>
          Title
          <input name="title"></input>
        </label>
        <label>
          Ingredient
          <input name="ingredient"></input>
        </label>
        <label>
          Page
          <input name="page"></input>
        </label>
        <label>
          Limit
          <input name="limit"></input>
        </label>
        <button>Search</button>
      </form>
      <p>
        {JSON.stringify(recipes?.data?.length)}
        {/* {JSON.stringify(recipes.data.map(({ _id, ttl }) => ({ _id, ttl })))} */}
      </p>

      <h3>Popular recipe </h3>
      <p>{JSON.stringify(popular?.data?.length)}</p>

      <h3>Main recipes </h3>
      <p>{JSON.stringify(mainRecipes?.data?.length)}</p>

      <h3>Favorite recipes </h3>
      <p>{JSON.stringify(favorite?.data?.length)}</p>

      <h3>Recipe details</h3>
      <p>{JSON.stringify(recipeDetail.data)}</p>

      {error && <p>Error {error.message}</p>}
      {isLoading && <p>Loading... </p>}
    </>
  );
};
