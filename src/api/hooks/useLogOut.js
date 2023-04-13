import { logOut, clearToken } from 'api/queries';
import { clearUser } from 'redux/userSlice';
import { useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';

export const useLogOut = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const mutate = () => {
    logOut();
    clearToken();
    dispatch(clearUser());
    queryClient.clear();
  };
  return { mutate };
};
