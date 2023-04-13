import { Navigate } from 'react-router-dom';
import { useIsUserAuth } from 'redux/useIsUserAuth';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  const isLogin = useIsUserAuth();
  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
















