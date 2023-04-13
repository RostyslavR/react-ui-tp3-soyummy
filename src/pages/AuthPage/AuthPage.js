import React from 'react';
import PersonOrderMobile from '../../images/registration/person_order_2x_mob.png'
import PersonOrderTablet from '../../images/registration/person_order_2x_tab.png'
import PersonOrderDesk from '../../images/registration/person_order_2x_desk.png'


import { SigninForm } from '../../components/SigninForm/SigninForm';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { SIGNIN_TYPE } from '../../constants/form';
import { StyledAuthPage, PersonImg, AuthFlex, FormLinkWraper, AuthInn } from './AuthPage.styled';
// import { MotivatingModal } from '../../components/MotivatingModal/MotivatingModal';




export const AuthPage = ({ type }) => {
  return (
    <StyledAuthPage>
      <AuthInn className="inn">
        <AuthFlex >
         <PersonImg>
            <source
             srcSet={PersonOrderDesk}
             media="(min-width: 1024px)"
             type="image/png"
           />
           <source
              srcSet={PersonOrderTablet}
              media="(min-width: 769px)"
              type="image/png"
            />
            <img src={PersonOrderMobile } alt="" />
           </PersonImg>
          <FormLinkWraper>
         {type === SIGNIN_TYPE ? <SigninForm /> : <RegisterForm />}
         </FormLinkWraper>
        </AuthFlex>
      </AuthInn>
      {/* <MotivatingModal/> */}
      </StyledAuthPage>
  );
};
