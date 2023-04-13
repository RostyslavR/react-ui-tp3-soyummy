import { useOwnRecipes, useAddOwnRecipe, useDeleteOwnRecipe } from '../hooks';
import { useState } from 'react';

export const OwnRecipesTest = () => {
  const [filter, setFilter] = useState({});

  const ownRecipes = useOwnRecipes(filter, {
    onSuccess: console.log,
    onError: console.log,
  });

  const addOwnRecipe = useAddOwnRecipe({
    onSuccess: console.log,
    onError: console.log,
  });

  const deleteOwnRecipe = useDeleteOwnRecipe({
    onSuccess: console.log,
    onError: console.log,
  });

  const isLoading =
    ownRecipes.isLoading || addOwnRecipe.isLoading || deleteOwnRecipe.isLoading;
  const error = ownRecipes.error || addOwnRecipe.error || deleteOwnRecipe.error;

  const handleSubmit = e => {
    e.preventDefault();

    setFilter({
      page: e.target.page.value,
      limit: e.target.limit.value,
    });
  };

  const handleAddOwnRecipe = e => {
    e.preventDefault();
    const ingredients = [
      {
        id: '640c2dd963a319ea671e36b2',
        measure: '6',
      },
      {
        id: '640c2dd963a319ea671e3694',
        measure: '2',
      },
      {
        id: '640c2dd963a319ea671e366d',
        measure: '6',
      },
      {
        id: '640c2dd963a319ea671e3679',
        measure: '2',
      },
    ];
    const title = e.target.title.value;
    const category = e.target.category.value;
    const instructions = e.target.instructions.value;
    const description = e.target.description.value;
    const time = e.target.time.value;
    const thumb = e.target.file.files[0];

    const recipe = {
      title,
      category,
      ingredients,
      instructions,
      description,
      time,
      thumb,
    };
    addOwnRecipe.mutate(recipe);
  };

  const handleDeleteOwnRecipe = () => {
    deleteOwnRecipe.mutate(ownRecipes?.data[0]?._id);
  };
  return (
    <>
      <h3>Own recipes</h3>
      {/* <p>{JSON.stringify(recipes.data)}</p> */}
      <form onSubmit={handleSubmit}>
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
        {/* {String(ownRecipes.data)} */}
        {JSON.stringify(ownRecipes?.data?.length)}
        {/* {JSON.stringify(recipes.data.map(({ _id, ttl }) => ({ _id, ttl })))} */}
      </p>

      <h3>Add own recipe </h3>
      <form onSubmit={handleAddOwnRecipe}>
        <label>
          Title
          <input name="title" type="text" />
        </label>
        <label>
          Category
          <input name="category" type="text" />
        </label>
        <label>
          Instructions
          <input name="instructions" type="text" />
        </label>
        <label>
          Description
          <input name="description" type="text" />
        </label>
        <label>
          Time
          <input name="time" type="text" />
        </label>

        <input name="file" type="file" />
        <button>Add recipe</button>
      </form>

      <h3>Delete own recipe </h3>
      <button type="button" onClick={handleDeleteOwnRecipe}>
        Delete own recipe
      </button>
      {/* <p>{JSON.stringify(deleteFavorite?.data)}</p> */}
      {error && <p>Error {error.message}</p>}
      {isLoading && <p>Loading... </p>}
    </>
  );
};
