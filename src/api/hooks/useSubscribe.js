import { useMutation } from '@tanstack/react-query';
import { subscribe } from 'api/queries';
import { showMessage } from 'components/Message';

export const useSubscribe = options => {
  return useMutation({
    ...options,
    mutationFn: subscribe,
    onSuccess: () => {
      showMessage('You`ve successfully subscribed.');
      options?.onSuccess();
    },
  });
};
