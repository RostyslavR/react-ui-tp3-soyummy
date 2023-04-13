import React from 'react';
import { Container } from 'commonComponents/Container';
import { Spinach } from 'commonComponents/Spinach';
import { MyRecipesList } from '../../components/MyRecipesList';
import { MainTitle } from 'components';

export const MyRecipesPage = () => {
  return (
    <Container>
      <MainTitle>My recipes</MainTitle>
      <MyRecipesList />
      <Spinach />
    </Container>
  );
};
