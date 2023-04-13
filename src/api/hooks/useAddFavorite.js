import { useMutation } from '@tanstack/react-query';
import { addFavorite } from '../queries';
import { useQueryClient } from '@tanstack/react-query';

export const useAddFavorite = options => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: addFavorite,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['recipes', 'favorite'] });
      options?.onSuccess?.(data);
    },
  });
};
