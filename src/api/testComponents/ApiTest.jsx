import { AuthTest } from './AuthTest';
import { UserTest } from './UserTest';
import { CatIngredTest } from './CatIngredTest';
import { RecipesTest } from './RecipesTest';
import { FavoriteTest } from './FavoriteTest';
import { OwnRecipesTest } from './OwnRecipesTest';
import { List, Item, Title } from './ApiTest.styled';
import { Message, showError, showMessage } from 'components/Message';
import { ShoppingListTest } from './ShoppingListTest';

export const ApiTest = () => {
  return (
    <List>
      <Item>
        <Title>Auth</Title>
        <AuthTest />
      </Item>
      <Item>
        <Title>User</Title>
        <UserTest />
      </Item>
      <Item>
        <Title>Categories & Ingredients</Title>
        <CatIngredTest />
      </Item>
      <Item>
        <Title>Recipes</Title>
        <RecipesTest />
      </Item>
      <Item>
        <Title>Favorite recipes</Title>
        <FavoriteTest />
      </Item>
      <Item>
        <Message isError />
        <Message />
        <button onClick={() => showError()}>Press me</button>
        <button onClick={() => showMessage()}>Press me</button>
      </Item>
      <Item>
        <Title>Own recipes</Title>
        <OwnRecipesTest />
      </Item>
      <Item>
        <Title>ShoppingList</Title>
        <ShoppingListTest />
      </Item>
    </List>
  );
};
