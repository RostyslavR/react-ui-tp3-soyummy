import { Container } from 'commonComponents/Container';
import { MainTitle } from 'components';
import { FavoritesList } from 'components/FavoritesList/FavoritesList';

export const FavoritePage = () => {
  return (
    <Container>
      <MainTitle>Favorites</MainTitle>
      <FavoritesList />
    </Container>
  );
};
