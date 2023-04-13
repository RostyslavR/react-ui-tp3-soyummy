import { useNavigate } from 'react-router-dom';
import MainPageBackground from 'components/MainPageBackground/MainPageBackground';
import MainPicture from 'components/MainPageBackground/MainPicture';
import { HeroSection, HeroTitle, HeroText } from './MainPageHero.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';

const MainPageHero = () => {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    const searchQuery = event.currentTarget.elements.query.value;
    console.log(searchQuery);

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
        <SearchForm onSubmit={handleSubmit} color={'#22252a'} />
        <MainPicture />
        <MainPageBackground />
      </HeroSection>
    </>
  );
};

export default MainPageHero;
