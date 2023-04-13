export const SIGNIN_TYPE = 'signin';
export const REGISTER_TYPE = 'register';

export const EMAIL_KEY = 'email';
export const PASSWORD_KEY = 'password';

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const SIGNIN_DEFAULT_ERROR_STATE = {
  emailError: '',
  passwordError: '',
}
export const SIGNUP_DEFAULT_ERROR_STATE = {
  nameError: '',
  emailError: '',
  passwordError: '',
}

export const ERROR_COLOR = '#E74A3B';
export const SUCCESS_COLOR = '#3CBC81';
