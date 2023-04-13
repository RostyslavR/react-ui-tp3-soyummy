import { Navigate } from 'react-router-dom';
import { useIsUserAuth } from 'redux/useIsUserAuth';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  const isLogin = useIsUserAuth();

  return isLogin ? Component : <Navigate to={redirectTo} />;
};
