import { showError } from 'components/Message';
import { createError } from 'api/helpers';
import { clearToken } from 'api/queries';
import { clearUser } from 'redux/userSlice';

export const handleErrors = ({ axiosError, store, queryClient, baseURL }) => {
  const error = createError(axiosError);

  if (error.status === 404) {
    document.location.replace(`${document.location.origin}${baseURL}/404`);
    return;
  }

  if (error.status >= 500) {
    showError('Something went wrong. Try again later.');
    return;
  }

  if (error.status === 401 || error.status === 403) {
    clearToken();
    store.dispatch(clearUser());
    queryClient.clear();
  }
  showError(error);
};
