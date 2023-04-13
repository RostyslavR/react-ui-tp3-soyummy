import { useState } from 'react';
import { showError } from 'components/Message';
import { createError } from 'api/helpers';

export const useMutate = (fn, cb) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (...args) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await fn(...args);
      cb?.onSuccess?.(result);
    } catch (axiosError) {
      const error = createError(axiosError);
      setError(error);
      showError(
        Number(error.status) >= 500
          ? 'Something went wrong. Try again later.'
          : error
      );
      cb?.onError?.(error);
    }
    setIsLoading(false);
  };

  return { mutate, error, isLoading };
};
