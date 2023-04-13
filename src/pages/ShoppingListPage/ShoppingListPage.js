import { Container } from 'commonComponents/Container';
import { MainTitle } from 'components';
import { ShoppingList } from 'components/ShoppingList/ShoppingList';
import styled from 'styled-components';

const ShoppingLisContainer = styled(Container)`
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 195px;
  }
`;

const ShoppingListPage = () => {
  return (
    <ShoppingLisContainer>
      <MainTitle titleName="Shopping List" />
      <ShoppingList/>
    </ShoppingLisContainer>
  );
};

export default ShoppingListPage;
