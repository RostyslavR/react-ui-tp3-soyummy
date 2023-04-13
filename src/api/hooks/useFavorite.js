import { useQuery } from '@tanstack/react-query';
import { getFavorite } from '../queries';

export const useFavorite = (filter, options) => {
  return useQuery({
    ...options,
    queryKey: ['recipes', 'favorite', filter],
    queryFn: getFavorite,
    keepPreviousData: true,
  });
};
