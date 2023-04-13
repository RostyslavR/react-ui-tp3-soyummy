import { useQuery } from '@tanstack/react-query';
import { getShoppingList } from 'api/queries';

export const useShoppingList = options => {
  return useQuery({
    ...options,
    queryKey: ['shopping'],
    queryFn: getShoppingList,
  });
};
