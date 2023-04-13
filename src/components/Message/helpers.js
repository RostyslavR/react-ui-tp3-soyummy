import { toast } from 'react-hot-toast';
import { Message } from './Message';
import { theme } from 'constants';

const style = {
  padding: 0,
  margin: 0,
  width: '268px',
  background: 'transparent',
  boxShadow: 'none',
  backdropFilter: 'blur(8px)',
  clipPath:
    "path('M0.100829 47.0671C0.100887 36.2375 0.415993 16.7442 3.74393 10.4131C9.41112 -0.368316 24.4852 0.289637 36.652 0.859711L238.71 10.3271C239.93 10.3843 241.143 10.5515 242.334 10.8266C254.38 13.61 263.624 23.2804 265.861 35.4399L266.078 36.6197C267.357 43.5702 268 50.601 268 57.6681V171.171C268 180.059 264.933 188.698 259.316 195.587C254.282 201.763 246.743 205.346 238.776 205.346H192.705C191.583 205.346 190.261 205.539 188.853 205.856C180.406 207.756 173.788 213.98 168.633 220.936C167.489 222.481 166.227 223.932 164.936 225.357C158.976 231.938 151.013 242 133.634 242C127.855 242 122.519 240.359 118.186 238.299C111.305 235.027 106.409 228.914 101.903 222.771C94.0396 212.049 80.8993 206.67 67.6262 207.456C53.5009 208.291 36.7947 208.233 24.6443 205.346C5.00947 200.681 -0.869851 175.217 0.100829 163.694V47.0671Z')",
  backgroundColor: theme.colors.messageBackground,
};

export const showError = error => {
  const message = error instanceof Error ? error.message : error;
  toast(t => <Message isError t={t} message={message} />, { style });
};

export const showMessage = message => {
  toast(t => <Message t={t} message={message} />, { style });
};
