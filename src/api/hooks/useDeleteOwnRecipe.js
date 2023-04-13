import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { deleteOwnRecipe } from '../queries';

export const useDeleteOwnRecipe = options => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: deleteOwnRecipe,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['recipes', 'own'] });
      options?.onSuccess?.(data);
    },
  });
};
