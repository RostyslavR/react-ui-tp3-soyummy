import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Categories } from 'components/Categories/Categories';
import { Container } from 'commonComponents/Container';
import { MainTitle } from 'components';

export const CategoriesPage = () => {
  return (
    <>
      <Container>
      <MainTitle titleName="Categories" />
      <Categories/>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  )
};
