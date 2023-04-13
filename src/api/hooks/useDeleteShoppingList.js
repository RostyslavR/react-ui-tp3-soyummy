import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { deleteShoppingList } from '../queries';

export const useDeleteShoppingList = options => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: deleteShoppingList,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['shopping'] });
      options?.onSuccess?.(data);
    },
  });
};
