import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from 'api/queries';

export const useUpdateUser = options => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: updateUser,
    onSuccess: data => {
      queryClient.setQueryData(['user'], data);
      options?.onSuccess?.(data);
    },
  });
};
