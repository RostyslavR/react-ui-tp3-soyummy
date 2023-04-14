import { useShoppingList } from '../../api/hooks/useShoppingList';
import { ShoppingListHeader } from './ShoppingListHeader/ShoppingListHeader';
import { ShoppingListItem } from './ShoppingListItem';
import { NoRecipesText } from '../MyRecipesList/MyRecipesList.styled.js';
import { NoRecipesImg } from '../MyRecipesList/NoRecipesImg.styled.js';
import { Container } from 'commonComponents/Container';
import { Loader } from 'components/Loader';

export const ShoppingList = () => {
  const { data, isLoading } = useShoppingList();

  if (isLoading) {
    return <Loader />;
  }
  const shoppingList = data?.sort((a, b) =>
    a.ttl.toLowerCase() > b.ttl.toLowerCase() ? 1 : -1
  );

  return (
    <Container>
      {shoppingList && shoppingList.length ? (
        <div>
          <ShoppingListHeader />
          <ul>
            {shoppingList.map(({ id, ttl, thb, recipe, measure }) => (
              <ShoppingListItem
                key={JSON.stringify([id, recipe])}
                payload={[{ id, recipe }]}
                name={ttl}
                measure={measure}
                image={thb}
              />
            ))}
          </ul>
        </div>
      ) : (
        <>
          <NoRecipesText>
            {isLoading
              ? 'Loading...'
              : 'You have not added any ingredients to Shopping List.'}
          </NoRecipesText>
          <NoRecipesImg/>
        </>
      )}
    </Container>
  );
};
