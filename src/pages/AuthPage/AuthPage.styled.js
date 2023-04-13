import styled from 'styled-components';
import BlackBgrDesk from '../../assets/images/authPageBlack.png'
import BlackBgrTablet from '../../assets/images/authPageBlackTablet.png'
import BlackBgrMobile from '../../assets/images/authPageBlackMobile.png'

export const StyledAuthPage = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-image:  url(${BlackBgrMobile});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom, center;
  background-color: #ECECEC;
  color: #fff;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
      background-image:  url(${BlackBgrTablet});
       /* background-position: ; */

  }
    @media screen and (min-width: 1024px) {
      background-image:  url(${BlackBgrDesk});

  }
`;

export const AuthInn = styled.div`
    height: 100%

`;

export const AuthFlex = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
      @media screen and (min-width: 1024px) {
  flex-direction: row;
  align-items: flex-;
  }
`;

export const PersonImg = styled.picture`
position: relative;
z-index: 10;
display: flex;
width: 285px;
height: 250px;
 @media screen and (min-width: 768px) and (max-width: 1024px) {
  width: 409px;
  height: 359px;
  }
    @media screen and (min-width: 1024px) {
   width: 532px;
   height: 468px;

  }
      @media screen and (min-width: 1200px) {

   margin-right:115px;
  }
`;

export const FormLinkWraper = styled.div`
position: relative;
bottom: 29px;
z-index: 10;
display: flex;
flex-direction: column;
justify-content: center;
 @media screen and (min-width: 768px) and (max-width: 1024px) {
bottom: 10px;
  }
    @media screen and (min-width: 1024px) {
bottom: 0px;
top: 17px;
  }

`;

