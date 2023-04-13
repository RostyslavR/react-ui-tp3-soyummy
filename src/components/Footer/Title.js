import imgLogo from '../../images/footer/logo.svg';

import {
  Spinach,
  TitleBox,
  Logo,
  TitleText,
  Styledlink,
  DescriptionList,
  DescriptionItem,
} from './Footer.styled';

export const Title = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <TitleBox>
        <Spinach></Spinach>
        <Styledlink to="/main" onClick={scrollToTop}>
          <Logo src={imgLogo} alt="logo" />
        </Styledlink>
        <TitleText>So Yummy</TitleText>
      </TitleBox>
      <DescriptionList>
        <DescriptionItem>
          Database of recipes that can be replenished
        </DescriptionItem>
        <DescriptionItem>
          Flexible search for desired and unwanted ingredients
        </DescriptionItem>
        <DescriptionItem>
          Ability to add your own recipes with photos
        </DescriptionItem>
        <DescriptionItem>Convenient and easy to use</DescriptionItem>
      </DescriptionList>
    </div>
  );
};
