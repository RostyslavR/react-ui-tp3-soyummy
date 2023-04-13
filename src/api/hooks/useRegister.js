import { register, setToken, clearToken } from 'api/queries';
import { useMutate } from './useMutate';
import { setUser } from 'redux/userSlice';
import { useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';

export const useRegister = cb => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const fn = async data => {
    clearToken();
    const { token, user } = await register(data);
    setToken(token);
    dispatch(setUser(token));
    queryClient.setQueryData(['user'], user);
    return user;
  };

  return useMutate(fn, cb);
};
