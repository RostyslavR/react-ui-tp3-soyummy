import { axios } from './init';

export const subscribe = async email => {
  const { data } = await axios.post('/user/subscribe', { email });
  return data;
};
