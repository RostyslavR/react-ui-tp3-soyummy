import { useShoppingList } from '../../api/hooks/useShoppingList';
import { ShoppingListHeader } from './ShoppingListHeader/ShoppingListHeader';
import { ShoppingListItem } from './ShoppingListItem';
import { NoRecipesText } from '../MyRecipesList/MyRecipesList.styled.js';
import { NoRecipesImg } from '../MyRecipesList/NoRecipesImg.styled.js';
import { Container } from 'commonComponents/Container';
import { Loader } from 'components/Loader';
import { prepareShoppingList } from 'utils/prepareShoppingList';

export const ShoppingList = () => {
  const { data, isLoading } = useShoppingList();

  if (isLoading) {
    return <Loader />;
  }
  const shoppingList = prepareShoppingList(data ?? []);
  

  return (
    <Container>
      {shoppingList && shoppingList.length ? (
        <div>
          <ShoppingListHeader />
          <ul>
            {shoppingList.map(item => (
              <ShoppingListItem
                key={item.keys}
                ids={item.keys}
                name={item.ttl}
                sum={item.sum}
                unit={item.unit}
                image={item.thb}
              />
            ))}
          </ul>
        </div>
      ) : (
        <NoRecipesText>
          {isLoading
            ? 'Loading...'
            : 'You have not added any ingredients to Shopping List.'}
          <NoRecipesImg />
        </NoRecipesText>
      )}
    </Container>
  );
};
