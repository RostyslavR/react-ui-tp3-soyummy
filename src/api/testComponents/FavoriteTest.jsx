import { useFavorite, useAddFavorite, useDeleteFavorite } from '../hooks';
import { useState } from 'react';

export const FavoriteTest = () => {
  const [filter, setFilter] = useState({});

  const favorite = useFavorite(filter, {
    onSuccess: console.log,
    onError: console.log,
  });

  const addFavorite = useAddFavorite({
    onSuccess: console.log,
    onError: console.log,
  });

  const deleteFavorite = useDeleteFavorite({
    onSuccess: console.log,
    onError: console.log,
  });

  const isLoading =
    favorite.isLoading || addFavorite.isLoading || deleteFavorite.isLoading;
  const error = favorite.error || addFavorite.error || deleteFavorite.error;

  const handleSubmit = e => {
    e.preventDefault();

    setFilter({
      page: e.target.page.value,
      limit: e.target.limit.value,
    });
  };

  const handleAddFavorite = () => {
    addFavorite.mutate('640cd5ac2d9fecf12e889817');
  };

  const handleDeleteFavorite = () => {
    deleteFavorite.mutate('640cd5ac2d9fecf12e889817');
  };
  return (
    <>
      <h3>Favorite recipes</h3>
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
        {JSON.stringify(favorite?.data?.length)}
        {/* {JSON.stringify(recipes.data.map(({ _id, ttl }) => ({ _id, ttl })))} */}
      </p>

      <h3>Add favorite </h3>
      <button type="button" onClick={handleAddFavorite}>
        Add favorite
      </button>
      {/* <p>{JSON.stringify(addFavorite?.data)}</p> */}

      <h3>Delete favorite </h3>
      <button type="button" onClick={handleDeleteFavorite}>
        Delete favorite
      </button>
      {/* <p>{JSON.stringify(deleteFavorite?.data)}</p> */}
      {error && <p>Error {error.message}</p>}
      {isLoading && <p>Loading... </p>}
    </>
  );
};
