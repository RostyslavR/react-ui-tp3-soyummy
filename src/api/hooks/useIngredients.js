import { useQuery } from '@tanstack/react-query';
import { getIngredients } from '../queries';

export const useIngredients = options => {
  return useQuery({
    ...options,
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: ['ingredients'],
    queryFn: getIngredients,
  });
};
