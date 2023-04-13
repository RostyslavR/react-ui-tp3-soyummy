import styled from 'styled-components';

import icon_user_add_foto from 'images/commonSvgImg/icon-user-add-foto.svg';


export const Form  = styled.form`
     input[type='file'] {
     width: 0;
     height: 0;
     opacity: 0;
     position: absolute;
     z-index: -1;
     display: block;
     padding: 0;
   } 
   & img {
     width: 88px;
     height: 88px;
     border-radius: ${p => p.theme.radii.round};
     @media screen and (min-width: 768px) {
       width: 103px;
       height: 103px;
    }
   }  
`;

export const AvatarWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   margin-bottom: 56px;
   @media screen and (min-width: 768px) {
     margin-bottom: 49px;
   }
   @media screen and (min-width: 768px) {
    margin-bottom: 52px;
   } 
`;

export const UserWrapper = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.normalGrey};

  &::after {
    position: absolute;
    right: 0;
    bottom: -5%;
    transform: translateX(-50%);
    content: url(${icon_user_add_foto});
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
     & svg {
      width: 47px;
      height: 47px;
    } 
  }
`;

export const UserIcon = styled.svg`
   position: absolute;
   width: 18px;
   height: 18px;
   top: 50%;
   left: 16.5px; 
   transform: translateY(-50%);
   &::after{
    content: url(${icon_user_add_foto});
   }
`;



export const UserIconEdid = styled.svg`
   /* position: absolute;
   width: 18px;
   height: 18px;
   top: 50%;
   left: 16.5px; 
   transform: translateY(-50%); */
`;

export const NameInput = styled.input`
  width: 100%;
  padding: 14px;
  padding-left: 63px;
  border-radius: ${p => p.theme.radii.m};
  font-family: ${p => p.theme.fonts.primary};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.regular};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p => p.theme.colors.primaryDarkText};
  outline: none;
  border: ${p => p.theme.border.userProfile};
  background-color: transparent; 
  opacity: 0.3;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: ${p => p.theme.colors.greenAccent};
  border-radius: ${p => p.theme.radii.l};
  border: inherit;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.extraContent};
  font-size: 14px;
  color: ${p => p.theme.colors.primaryLightText};
  white-space: nowrap;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};

   &:disabled {
     opacity: 0.7;
     pointer-events: none;
   }
   @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
   }
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.quaternaryDarkText};
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  @media screen and (min-width: 768px) {
    gap: 33px;
  }
  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

export const NameLabel = styled.label`
  width: 100%;
  position: relative;
  opacity: 0.8;
  color: ${p => p.theme.colors.primaryDarkText};
`;