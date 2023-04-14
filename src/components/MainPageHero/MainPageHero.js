import { useNavigate } from 'react-router-dom';
import MainPageBackground from 'components/MainPageBackground/MainPageBackground';
import MainPicture from 'components/MainPageBackground/MainPicture';
import { HeroSection, HeroTitle, HeroText } from './MainPageHero.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useTheme } from 'styled-components';

const MainPageHero = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const color = theme.colors.secondaryDarkBackground;

  const handleSubmit = event => {
    event.preventDefault();

    const searchQuery = event.currentTarget.elements.query.value;
 
    navigate(`/search?title=${searchQuery}`);
  };

  return (
    <>
      <HeroSection>
        <HeroTitle>
          So<span>Yummy</span>
        </HeroTitle>
        <HeroText>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </HeroText>
        <SearchForm onSubmit={handleSubmit} color={color} />
        <MainPicture />
        <MainPageBackground />
      </HeroSection>
    </>
  );
};

export default MainPageHero;
