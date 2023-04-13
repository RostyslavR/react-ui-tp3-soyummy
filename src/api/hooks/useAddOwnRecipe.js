import { useMutation } from '@tanstack/react-query';
import { addOwnRecipe } from '../queries';
import { useQueryClient } from '@tanstack/react-query';

export const useAddOwnRecipe = options => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: addOwnRecipe,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['recipes', 'own'] });
      options?.onSuccess?.(data);
    },
  });
};
