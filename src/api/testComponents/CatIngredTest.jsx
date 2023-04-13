import { useCategories, useIngredients } from '../hooks';

export const CatIngredTest = () => {
  const categories = useCategories({
    onSuccess: console.log,
    onError: console.log,
  });
  const ingredients = useIngredients({
    onSuccess: console.log,
    onError: console.log,
  });

  const isLoading = categories.isLoading || ingredients.isLoading;
  const error = categories.error || ingredients.error;

  return (
    <>
      <h3>Categories</h3>
      <p>{JSON.stringify(categories.data)}</p>
      <h3>Ingredients</h3>
      <p>
        {/* {JSON.stringify(ingredients.data.map(({ _id, ttl }) => ({ _id, ttl })))} */}
        {JSON.stringify(ingredients?.data?.length)}
      </p>

      {error && <p>Error {error.message}</p>}
      {isLoading && <p>Loading... </p>}
    </>
  );
};
