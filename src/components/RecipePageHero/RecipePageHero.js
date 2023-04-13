import {
  SectionHero,
  SectionHeroTitle,
  SectionHeroDesc,
  SectionHeroBtn,
  TimeBlock,
  TimeText,
} from './RecipePageHero.styled';
import { BsClock } from 'react-icons/bs';
import { useAddFavorite } from "api/hooks";

export const RecipePageHero = ({
  title,
  description,
  favorites,
  time,
  isFavorite,
  _id,
}) => {
  const { mutate, isLoading } = useAddFavorite();
  const addToFavorite = () => {
    if (isFavorite === false) {
      return mutate(_id);
    }
  };
  return (
    <SectionHero>
      <SectionHeroTitle children={title} />
      <SectionHeroDesc>{description}</SectionHeroDesc>
      {favorites && (
        <SectionHeroBtn
        disabled={isFavorite || isLoading}
          type="button"
          aria-label="Add to favorite"
          onClick={() => {
            addToFavorite();
          }}
        >
          Add to favorite recipes
        </SectionHeroBtn>
      )}
      <TimeBlock>
        <BsClock size="14px" fill="#23262A" />
        <TimeText>{time} min</TimeText>
      </TimeBlock>
    </SectionHero>
  );
};
