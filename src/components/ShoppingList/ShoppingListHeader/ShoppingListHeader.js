import {
  HeaderWrapper,
  ProductsHeader,
  NumberHeader,
  RemoveHeader,
  NumberProductWrapper
} from './ShoppingListHeader.styled';


export const ShoppingListHeader = () => {
  return (
    <HeaderWrapper>
      <ProductsHeader>Product</ProductsHeader>

      <NumberProductWrapper>
        <NumberHeader>Number</NumberHeader>
        <RemoveHeader>Remove</RemoveHeader>
      </NumberProductWrapper>
    </HeaderWrapper>
  );
};
