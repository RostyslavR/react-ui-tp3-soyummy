import { useRegister, useSignIn, useLogOut } from '../hooks';
import { useIsUserAuth } from 'redux/useIsUserAuth';

export const AuthTest = () => {
  const isUserAuth = useIsUserAuth();
  const userReg = {
    name: 'Olena',
    email: 'olena@gmail.com',
    password: 'password',
  };
  const userSingin = {
    email: 'olena@gmail.com',
    password: 'password1',
  };

  const register = useRegister({
    onSuccess: console.log,
    onError: console.log,
  });
  const signIn = useSignIn({
    onSuccess: console.log,
    onError: console.log,
  });
  const logOut = useLogOut({
    onSuccess: console.log,
    onError: console.log,
  });

  const isLoading = register.isLoading || signIn.isLoading || logOut.isLoading;
  const error = register.error || signIn.error || logOut.error;

  return (
    <>
      <button onClick={() => register.mutate(userReg)}>Register</button>
      <button onClick={() => signIn.mutate(userSingin)}>Sign in</button>
      <button onClick={() => logOut.mutate()}>Log out</button>
      {error && <p>Error {error.message}</p>}
      {isLoading && <p>Loading... </p>}
      {isUserAuth && <p>User is Authorized</p>}
    </>
  );
};
