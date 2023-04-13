import {StyledLink1, StyledLink2, ButtonBox, WelcomeImage, Container, BigText, MainText} from "./Welcome.styled"

import { ReactComponent as Icon } from '../../images/commonSvgImg/logo_desk.svg';




export const WelcomePage = () => {
  return (
    <WelcomeImage>
      <Container>
      <Icon/>
      <BigText>
        Welcome to the app!
      </BigText>
      <MainText>
      This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.
      </MainText>
      </Container>
    <ButtonBox>
      <StyledLink1 to="/register">Registration</StyledLink1>
      <StyledLink2 to="/signin">Sign in</StyledLink2>
      </ButtonBox>
    </WelcomeImage>
  );
};
