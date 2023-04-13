import { useState } from 'react';
import { isNil } from 'lodash/lang';
import { validateFormFields } from '../../core/utils/validateFormFields';
import { useRegister } from '../../api/hooks';
import { ERROR_COLOR, SIGNUP_DEFAULT_ERROR_STATE } from '../../constants/form';
import { Icon } from '../Icon/Icon';
import { CgLock } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import {BiUser} from 'react-icons/bi'

import {
    AuthFormElement,
  InnerWrapper,
  AuthForm,
  FieldWrapper,
  InputLabel,
  InputField,
  ErrorText,
  SubmitButton,
  StyledNavLink
} from '../SigninForm/SigninForm.styled'
import {FormTitle} from './RegisterForm.styled'


export const RegisterForm = () => {
  const [signUpData, setSignUpData] = useState({
    name:'',
    email: '',
    password: '',
  });


  const [signUpErrors, setSignUpErrors] = useState(SIGNUP_DEFAULT_ERROR_STATE);

  const {name, email, password } = signUpData;

  const { nameError, emailError, passwordError } = signUpErrors;

  const { mutate} = useRegister();

  const handleSubmit = () => {

    const errors = validateFormFields(signUpData);
  
    if (!isNil(errors)) {
      return setSignUpErrors(errors);
    }
  
    setSignUpErrors(SIGNUP_DEFAULT_ERROR_STATE);
    mutate({ name, email, password });
  };
  return (
    <>
  <AuthFormElement >
      <InnerWrapper >
        <AuthForm
           autoComplete="off"
          onSubmit={e => e.preventDefault()}
        >
          <FormTitle>Register</FormTitle>
          <FieldWrapper>
            <InputLabel htmlFor="name">
              <Icon color={nameError && ERROR_COLOR} element={BiUser} />
              <InputField
                // className={nameError && 'input-error'}
                id="name"
                type="name"
                name="name"
                value={name}
                placeholder="Name"
                // autoComplete="new-email"
                onChange={e =>
                  setSignUpData({ ...signUpData, name: e.target.value })
                }
              />
            </InputLabel>
            {nameError && <ErrorText>{nameError}</ErrorText>}
          </FieldWrapper>

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
                  setSignUpData({ ...signUpData, email: e.target.value })
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
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
                }
              />
            </InputLabel>
            {passwordError && (
              <ErrorText>{passwordError}</ErrorText>
            )}
          </FieldWrapper>

          <SubmitButton onClick={() => handleSubmit()}>
            Register
          </SubmitButton>
        </AuthForm>
      </InnerWrapper>
    </AuthFormElement>
      <StyledNavLink to="/signin" >Sign In</StyledNavLink>  
    </>
  );
  
};