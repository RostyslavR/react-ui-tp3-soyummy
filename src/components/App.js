import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { RestrictedRoute, PrivateRoute } from 'service/routes';

import { SharedLayout } from './SharedLayout';
import { MainPage } from 'pages/MainPage';
import { CategoriesPage } from 'pages/CategoriesPage';
import { AddRecipePage } from 'pages/AddRecipePage';
import { FavoritePage } from 'pages/FavoritePage';
import { MyRecipesPage } from 'pages/MyRecipesPage';
import { RecipePage } from 'pages/RecipePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import ShoppingListPage from 'pages/ShoppingListPage/ShoppingListPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { WelcomePage } from 'pages/WelcomePage';
import { AuthPage } from 'pages/AuthPage';

import { GlobalStyle } from './GlobalStyle';

// const AuthPage = lazy(() => import('pages/AuthPage/AuthPage'));
// const MainPage = lazy(() => import('pages/MainPage/MainPage'));
// const CategoriesPage = lazy(() => import('pages/CategoriesPage/CategoriesPage'));
// const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
// const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
// const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
// const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
// const ShoppingListPage = lazy(() => import('pages/ShoppingListPage/ShoppingListPage'));
// const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route
          path="/welcome"
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<AuthPage type="register" />} />}
        />
        <Route
          path="/signin"
          element={<RestrictedRoute component={<AuthPage type="signin" />} />}
        />

        <Route path="/" element={<PrivateRoute component={<SharedLayout />} />}>
          <Route index element={<MainPage />} />

          <Route path="main" element={<MainPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:categoryName" element={<CategoriesPage />} />
          <Route path="add" element={<AddRecipePage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="my" element={<MyRecipesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};
