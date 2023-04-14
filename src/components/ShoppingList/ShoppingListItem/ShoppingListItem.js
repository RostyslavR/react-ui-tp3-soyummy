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

export const ShoppingListItem = ({ payload, name, measure, image }) => {
  const { mutate, isLoading } = useDeleteShoppingList();

  const handleDeleteClick = e => {
    mutate(payload);

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

        <ProductNumber>{measure}</ProductNumber>
        <BoxButton>
          <RemoveItemButton
            type="button"
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
