import { useFavorite } from 'api/hooks';
import { Loader } from 'components/Loader/Loader';
// import { FavoritesItem } from './FavoritesItem';
// import {
//   Title,
//   FavoriteList,
//   contentWrapper,
// } from 'components/Favorites/FavoritesItem.styled';
// import { FavoriteItem } from './FavoritesItem.styled';
import { Title } from './FavoritesItem.styled';

export const FavoritesList = ({ favorite }) => {
  const { error, isError, isLoading } = useFavorite({
    favorite,
    page: 1,
    limit: 4,
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Title>Favorites</Title>
    // <FavoritConteiner></FavoritConteiner>
    // <div>
    //   {recipes && (
    //     <ul>
    //       {recipes?.map(({ _id: id, title, thumb }) => (
    //         <FavoriteItem>
    //           {/* <DishCard id={id} title={title} image={thumb} /> */}
    //         </FavoriteItem>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
};
