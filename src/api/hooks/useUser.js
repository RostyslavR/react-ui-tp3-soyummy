import { useQuery } from '@tanstack/react-query';
import { getUser } from '../queries';

export const useUser = options => {
  return useQuery({
    ...options,
    queryKey: ['user'],
    queryFn: getUser,
  });
};
