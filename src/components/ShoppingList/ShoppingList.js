import { useShoppingList } from '../../api/hooks/useShoppingList';
import { ShoppingListHeader } from './ShoppingListHeader/ShoppingListHeader';
import { ShoppingListItem } from './ShoppingListItem';

// import { Box } from './ShoppingList.styled';
import { Container } from 'commonComponents/Container';
import { Loader } from 'components/Loader';
import { prepareShoppingList } from 'utils/prepareShoppingList';

export const ShoppingList = () => {
  const { data, isLoading } = useShoppingList();
  // const shoppingList = data;
  // const summaryList = []
  // console.log(shoppingList);

  // console.log(error);
  if (isLoading) {
    return <Loader />;
  }
  const shoppingList = prepareShoppingList(data ?? []);

  return (
    <Container>
      <ShoppingListHeader />
      <ul>
        {shoppingList &&
          shoppingList.map(item => (
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
    </Container>
  );
};
