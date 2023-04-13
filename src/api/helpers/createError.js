export const createError = axiosError => {
  const message = axiosError.response?.data.message ?? axiosError.message;
  const error = new Error(message);
  error.status = axiosError.response?.status;
  error.code = axiosError.code;
  return error;
};
