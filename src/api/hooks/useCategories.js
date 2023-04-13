import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../queries';

export const useCategories = options => {
  return useQuery({
    ...options,
    queryKey: ['categories'],
    queryFn: getCategories,
  });
};
