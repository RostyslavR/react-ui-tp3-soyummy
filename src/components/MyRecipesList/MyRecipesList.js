import React, { useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useOwnRecipes, useDeleteOwnRecipe } from '../../api/hooks';
import { MyRecipesItem } from '../MyRecipesItem/MyRecipesItem';
import { MyRecipe, CardList, NoRecipesText } from './MyRecipesList.styled.js';
import { NoRecipesImg } from './NoRecipesImg.styled.js';
import { Paginator } from '../Paginator/Paginator';

export const MyRecipesList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(4);

  const { data: ownRecipes, isLoading } = useOwnRecipes({ page, limit });

  const { mutate } = useDeleteOwnRecipe();

  const deleteRecipe = id => {
    mutate(id);
  };

  const handlePageChange = newPage => {
    setPage(newPage);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <MyRecipe>
      {ownRecipes && ownRecipes.length ? (
        <>
          <CardList>
            {ownRecipes.map(recipe => (
              <MyRecipesItem
                id={recipe._id}
                thumb={recipe.thumb}
                category={recipe.category}
                title={recipe.title}
                description={recipe.description}
                time={recipe.time}
                previewHeight="auto"
                handleDelete={() => deleteRecipe(recipe._id)}
              />
            ))}
          </CardList>
          <Paginator
            currentPage={page}
            onPageChange={handlePageChange}
            totalPages={Math.ceil(ownRecipes.total / limit)}
          />
        </>
      ) : (
        <NoRecipesText>
          {isLoading ? 'Loading...' : 'You have not created any recipes yet.'}
          <NoRecipesImg />
        </NoRecipesText>
      )}
    </MyRecipe>
  );
};
