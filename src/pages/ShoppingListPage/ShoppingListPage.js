import { Container } from 'commonComponents/Container';
import { PageTitle } from 'commonComponents/PageTitle';
import { ShoppingList } from 'components/ShoppingList/ShoppingList';
// import { theme } from 'constants/'
 
const ShoppingListPage = () => {
  return (
    <Container>
      <PageTitle
        style={{
          marginTop: '52px',
          [`@media ${({ theme }) => theme.devices.tablet}`]: {
            marginTop: '72px',
          },
          [`@media ${({ theme }) => theme.devices.desktop}`]: {
            marginTop: '102px',
          },
        }}
      >
        Shopping List
      </PageTitle>
      <ShoppingList />
    </Container>
  );
};
export default ShoppingListPage;
