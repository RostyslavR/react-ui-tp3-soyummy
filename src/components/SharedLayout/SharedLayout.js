import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { PageLoader } from 'components/PageLoader';
import { useUser } from 'api/hooks';
import { Suspense } from 'react';
import { useMotivation } from 'api/hooks';

export const SharedLayout = () => {
  const { data, isLoading, isError } = useUser();
  useMotivation();

  if (isLoading || isError) {
    return <PageLoader />;
  }

  return (
    <div>
      <Header user={data} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
