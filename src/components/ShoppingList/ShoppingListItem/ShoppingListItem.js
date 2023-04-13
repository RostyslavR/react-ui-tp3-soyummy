import { useDeleteShoppingList } from 'api/hooks/useDeleteShoppingList';
import {
  ProductFoto,
  ProductName,
  ProductNumber,
  RemoveItemButton,
  ShoppingItemContainer,
  ProductFotoWrapper,
  RemoveIconWrapper,
  BoxButton,
} from './ShoppingListItem.styled';

import { Loader } from 'components/Loader';

export const ShoppingListItem = ({ ids, name, sum, unit, image }) => {
  const { mutate, isLoading } = useDeleteShoppingList();

  const handleDeleteClick = e => {
    mutate(ids);

    if (isLoading) {
      return <Loader />;
    }
  };

  return (
    <li>
      <ShoppingItemContainer>
        <ProductFotoWrapper>
          <ProductFoto src={image} alt={name} />
        </ProductFotoWrapper>

        <ProductName>{name}</ProductName>

        <ProductNumber>{`${sum} ${unit}`}</ProductNumber>
        <BoxButton>
        <RemoveItemButton
          type="button"
          // id={ids}
          onClick={handleDeleteClick}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : <RemoveIconWrapper />}
        </RemoveItemButton>
      </BoxButton>
      </ShoppingItemContainer>
    </li>
  );
};
