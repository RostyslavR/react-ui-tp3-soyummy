import { useMutation } from '@tanstack/react-query';
import { addShoppingList } from '../queries';
import { useQueryClient } from '@tanstack/react-query';

export const useAddShoppingList = options => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: addShoppingList,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['shopping'] });
      options?.onSuccess?.(data);
    },
  });
};
