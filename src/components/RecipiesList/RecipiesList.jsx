import { DishItem, DishList } from './RecipiesList.styled';
import { DishCard } from 'components/DishCard/DishCard';
import { Loader } from 'components/Loader/Loader';
import { useRecipes } from '../../api/hooks';

export const RecipiesList = ({ categoryId }) => {
  const {
    data: recipes,
    error,
    isFetching,
    isError,
  } = useRecipes({ category: categoryId });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {isFetching && <Loader />}
      {recipes && (
        <DishList>
          {recipes?.map(({ _id: id, title, thumb }) => (
            <DishItem key={id}>
              <DishCard id={id} title={title} image={thumb} />
            </DishItem>
          ))}
        </DishList>
      )}
    </>
  );
};
