import React, { useState } from 'react';
import { useFavorite, useDeleteFavorite } from 'api/hooks';
import { Loader } from 'components/Loader/Loader';
import { FavoritesItem } from '../FavoritesItem/FavoritesItem';
import {
  FavoritesContainer,
  FavoritesListContent,
} from './FavoritesList.styled';
import { Paginator } from '../Paginator/Paginator';
import { NoRecipesImg } from '../MyRecipesList/NoRecipesImg.styled';
import { NoRecipesText } from '../MyRecipesList/MyRecipesList.styled';

export const FavoritesList = ({ favorite }) => {
  const [page, setPage] = useState(1);
  const [limit] = useState(4);

  const { mutate } = useDeleteFavorite();
  const deleteRecipe = id => {
    mutate(id);
  };
  const { data: recipes, isLoading } = useFavorite({
    favorite,
    page,
    limit,
  });

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FavoritesContainer>
      {recipes && recipes.length ? (
        <>
          <FavoritesListContent>
            {recipes?.map(({ _id: id, title, thumb, time, description }) => (
              <FavoritesItem
                key={id}
                id={id}
                title={title}
                image={thumb}
                time={time}
                description={description}
                handleDelete={() => deleteRecipe(id)}
              />
            ))}
          </FavoritesListContent>
        </>
      ) : (
        <NoRecipesText>
          {isLoading ? 'Loading...' : 'You have not favorites any recipes yet.'}
          <NoRecipesImg />
        </NoRecipesText>
      )}
      <Paginator
        currentPage={page}
        onPageChange={handlePageChange}
        totalPages={Math.ceil(recipes.total / limit)}
      />
    </FavoritesContainer>
  );
};
