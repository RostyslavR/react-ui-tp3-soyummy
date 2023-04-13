import styled from 'styled-components';
import { NavLink } from 'react-router-dom';





export const AuthFormElement = styled.div`
width: 335px;
 /* width: 100%; */
     @media screen and (min-width: 768px) {
   max-width: 500px;
   width: 500px;
   }
`;

export const InnerWrapper = styled.div`
 height: 100%;
 `;


export const AuthForm = styled.form`
 background-color: #2a2c36;
 border-radius: 30px;
 padding: 32px 28px 40px 28px;
      @media screen and (min-width: 768px) {
    padding: 44px 50px;
   }
 `;

export const FormTitle = styled.h3`
 font-size: 24px;
 font-weight: 600;
 line-height: 1;
 margin-bottom: 50px;
      @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 28px;

   }
 `;

export const FieldWrapper = styled.div`
 position: relative;
 display: block;
 margin-bottom: 12px;
   &:last-of-type{margin-bottom: 0;} 
      @media screen and (min-width: 768px) {
    margin-bottom: 24px;
   }

  &:last-child{margin-bottom: 0;} 
 `;

export const InputLabel = styled.label`
 position: relative;
 display: block;
 width: 100%;
 `;

export const InputField = styled.input` 
 padding: 14px 16px 14px 48px; 
 display: block; width: 100%; 
 background-color: transparent; 
 outline: none; 
 color: #fafafa; 
 font-size: 14px;
 opacity: 0.8; 
 border: 1px solid rgba(255, 255, 255, 0.3); 
 border-radius: 6px;
 
  @media screen and (min-width: 768px) {
 padding: 18px 16px 18px 48px; 
 font-size: 18px;
  }


&.input-error {
   border: 1px solid #E74A3B; 
   background-image: url('../../assets/icons/error.svg'); 
   background-repeat: no-repeat; 
   background-size: 20px 20px; 
   background-position: 95% 50%; }

&:focus {
   border: 1px solid rgb(255, 255, 255) };
    `;



export const ErrorText = styled.div`
 color: #E74A3B; 
 margin-top: 8px;
 font-size: 14px;
 `;

export const SubmitButton = styled.button`
 margin-top: 28px;
 background: #8baa36;
 text-align: center;
 border-radius: 6px;
 width: 100%;
 padding: 14px;
 border: none;
 outline: none;
 cursor: pointer;
 font-size: 16px;
 color: #fff;
       @media screen and (min-width: 768px) {
    padding: 20px;
    margin-top: 50px;
   }
 `;
 export const StyledNavLink = styled(NavLink)`
display: flex;
margin-top: 10px;
justify-content: center;
text-decoration: underline;
`;