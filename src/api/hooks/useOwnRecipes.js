import { useQuery } from '@tanstack/react-query';
import { getOwnRecipes } from '../queries';

export const useOwnRecipes = (filter, options) => {
  return useQuery({
    ...options,
    queryKey: ['recipes', 'own', filter],
    queryFn: getOwnRecipes,
    keepPreviousData: true,
  });
};
