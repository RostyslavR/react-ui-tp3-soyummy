import { useDeleteShoppingList } from 'api/hooks';
import { RemoveButton } from './ShoppingListItem.styled';
import { ReactComponent as CloseIcon } from '/images/commonSvgImg/Icon_close.svg';
// console.log(CloseIcon)

export const RemoveItemButton = ({ id }) => {
  const { mutate } = useDeleteShoppingList();

  const handleRemoveClick = () => {
    mutate(id);
  };

  return (
    <RemoveButton onClick={handleRemoveClick}>
      <CloseIcon />
    </RemoveButton>
  );
};
