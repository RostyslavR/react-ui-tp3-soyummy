import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Categories } from 'components/Categories/Categories';


export const CategoriesPage = () => {
  return (
    <>
      <Categories/>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
    </>
  )
};
