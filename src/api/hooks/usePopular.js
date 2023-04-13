import { useQuery } from '@tanstack/react-query';
import { getPopular } from '../queries';

export const usePopular = options => {
  return useQuery({
    ...options,
    queryKey: ['recipes', 'popular'],
    queryFn: getPopular,
  });
};
