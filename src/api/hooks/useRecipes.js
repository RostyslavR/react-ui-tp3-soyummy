import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '../queries';

export const useRecipes = (filter, options) => {
  return useQuery({
    ...options,
    queryKey: ['recipes', filter],
    queryFn: getRecipes,
    keepPreviousData: true,
  });
};
