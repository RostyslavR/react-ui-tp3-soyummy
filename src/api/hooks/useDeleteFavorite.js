import { useMutation } from '@tanstack/react-query';
import { deleteFavorite } from '../queries';
import { useQueryClient } from '@tanstack/react-query';

export const useDeleteFavorite = options => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: deleteFavorite,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['recipes', 'favorite'] });
      options?.onSuccess?.(data);
    },
  });
};
