import { signIn, setToken, clearToken } from 'api/queries';
import { useMutate } from './useMutate';
import { setUser } from 'redux/userSlice';
import { useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';

export const useSignIn = cb => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const fn = async data => {
    clearToken();
    const { token, user } = await signIn(data);
    setToken(token);
    dispatch(setUser(token));
    queryClient.setQueryData(['user'], user);
    return user;
  };

  return useMutate(fn, cb);
};
