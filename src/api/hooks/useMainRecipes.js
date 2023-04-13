import { useQuery } from '@tanstack/react-query';
import { getMainRecipes } from '../queries';

export const useMainRecipes = options => {
  return useQuery({
    ...options,
    queryKey: ['recipes', 'main'],
    queryFn: getMainRecipes,
  });
};
