import { useState } from 'react';
import { isNil } from 'lodash/lang';
import { validateFormFields } from '../../core/utils/validateFormFields';
import { CgLock } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { Icon } from '../Icon/Icon';


import { ERROR_COLOR, SIGNIN_DEFAULT_ERROR_STATE } from '../../constants/form';
import { useSignIn } from 'api/hooks';

import {
  
  AuthFormElement,
  InnerWrapper,
  AuthForm,
  FormTitle,
  FieldWrapper,
  InputLabel,
  InputField,
  ErrorText,
  SubmitButton,
  StyledNavLink
} from './SigninForm.styled'

export const SigninForm = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const [signInErrors, setSignInErrors] = useState(SIGNIN_DEFAULT_ERROR_STATE);

  const { email, password } = signInData;

  const { emailError, passwordError } = signInErrors;

  const { mutate } = useSignIn();

  const handleSignIn = () => {
    const errors = validateFormFields(signInData);

    if (!isNil(errors)) {
      return setSignInErrors(errors);
    }

    setSignInErrors(SIGNIN_DEFAULT_ERROR_STATE);
    mutate({ email, password });
  };

  return (
    <>
    <AuthFormElement >
      <InnerWrapper >
        <AuthForm
           autoComplete="off"
          onSubmit={e => e.preventDefault()}
        >
          <FormTitle>Sign In</FormTitle>
          <FieldWrapper>
            <InputLabel htmlFor="email">
              <Icon color={emailError && ERROR_COLOR} element={HiOutlineMail} />
              <InputField
                // className={emailError && 'input-error'}
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                autoComplete="new-email"
                onChange={e =>
                  setSignInData({ ...signInData, email: e.target.value })
                }
              />
            </InputLabel>
            {emailError && <ErrorText>{emailError}</ErrorText>}
          </FieldWrapper>

          <FieldWrapper>
            <InputLabel htmlFor="password">
              <Icon color={passwordError && ERROR_COLOR} element={CgLock} />
              <InputField
                // className={passwordError && 'input-error'}
                id="password"
                type="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={e => {
                  console.log(e.target.value)
                  setSignInData({ ...signInData, password: e.target.value })
                }
                }
              />
            </InputLabel>
            {passwordError && (
              <ErrorText>{passwordError}</ErrorText>
            )}
          </FieldWrapper>

          <SubmitButton onClick={() => handleSignIn()}>
            Sign In
          </SubmitButton>
        </AuthForm>
      </InnerWrapper>
    </AuthFormElement>
          <StyledNavLink to="/register" >Registration</StyledNavLink>   
</>
  );
};
