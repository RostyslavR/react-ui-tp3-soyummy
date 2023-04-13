import { useQuery } from '@tanstack/react-query';
import { getRecipeDetails } from '../queries';

export const useRecipeDetails = (id, options) => {
  return useQuery({
    ...options,
    queryKey: ['recipes', id],
    queryFn: getRecipeDetails,
  });
};
