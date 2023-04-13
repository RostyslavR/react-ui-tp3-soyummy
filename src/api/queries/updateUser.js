import { axios } from './init';

export const updateUser = async user => {
  const { data } = await axios.patchForm('/user', user);
  return data.data;
};
