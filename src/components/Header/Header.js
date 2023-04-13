import { useState } from 'react';

import { useUser } from 'api/hooks/useUser';
import { useMediaQuery } from 'api/hooks/useMediaQuery';

import {
  HeaderStyled,
  HeaderWrapper,
  HeaderWrapperLogo,
  HeaderLogo,
  BurgerWrapper,
  BurgerButton,
  MobileMenuWrapper,
  MobileMenuHeaderContainer,
  MobileMenuThemeTogglerWrapper,
} from './Header.styled';

import logo_desk from "images/commonSvgImg/logo_desk.svg";
import iconburger_menu from "images/commonSvgImg/Iconburger-menu.svg";

import { HeaderNavigation } from "components/Header/HeaderNav/HeaderNav";
import { UserLogo } from "components/Header/UserLogo/UserLogo";
import { Container } from 'components/Container/Container';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { CloseButton } from 'components/CloseButton/CloseButton';

export const Header = () => {
  const { data } = useUser();
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const isMediaBased = useMediaQuery('(min-width: 1440px)');

  const toggleMenu = event => {
    setShowBurgerMenu(!showBurgerMenu);
  };

   return (
     <>
       {isMediaBased ? (
         <HeaderStyled>
           <Container>
             <HeaderWrapper>
               <HeaderWrapperLogo>
                 <HeaderLogo to="/main">
                   <img src={logo_desk} alt="logo" />
                 </HeaderLogo>
               </HeaderWrapperLogo>

               <HeaderNavigation />
               <UserLogo
                name={data.name}
                avatarUrl={data.avatar}
               />

               <ThemeToggler />
             </HeaderWrapper>
           </Container>
         </HeaderStyled>
       ) : (
         <>
           <HeaderStyled>
             <Container>
               <HeaderWrapper>
                 <HeaderWrapperLogo>
                   <HeaderLogo to="/main">
                     <img src={logo_desk} alt="logo" />
                   </HeaderLogo>
                 </HeaderWrapperLogo>
                 <BurgerWrapper>
                 <UserLogo
                   name={data.name}
                   avatarUrl={data.avatar}
                   />
                   <BurgerButton
                     type="button"
                     onClick={toggleMenu}
                   >
                       <img src={iconburger_menu} alt="burger" />
                   </BurgerButton>
                 </BurgerWrapper>
               </HeaderWrapper>
             </Container>
           </HeaderStyled>
           <MobileMenuWrapper isShown={showBurgerMenu}>
             <MobileMenuHeaderContainer>
               <HeaderWrapperLogo>
                 <HeaderLogo
                   to="/main"
                   onClick={() => {
                     setShowBurgerMenu(false);
                   }}
                 >
                   <img src={logo_desk} alt="logo" />
                 </HeaderLogo>
               </HeaderWrapperLogo>
               <CloseButton onClick={toggleMenu} />
             </MobileMenuHeaderContainer>
             <HeaderNavigation
               setShowBurgerMenu={setShowBurgerMenu}
             />
             <MobileMenuThemeTogglerWrapper>
               <ThemeToggler />
             </MobileMenuThemeTogglerWrapper>
           </MobileMenuWrapper>
         </>
       )}
     </>
 );
};