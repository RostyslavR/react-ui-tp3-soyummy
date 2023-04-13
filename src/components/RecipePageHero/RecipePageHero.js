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
import { getTimeDisplay } from 'commonComponents/GetTimeDisplay/getTimeDisplay';
import { useState, useEffect } from 'react';

export const RecipePageHero = ({
  title,
  description,
  favorites,
  time,
  isFavorite,
  _id,
}) => {
  const timeDisplay = getTimeDisplay(time);
  const { mutate, isLoading } = useAddFavorite();
  const [btnText, setBtnText] = useState(null);

  const addToFavorite = () => {
    if (isFavorite === false) {
      setBtnText('Already in favorites');
      return mutate(_id);
    }
    if (isFavorite === true){
      setBtnText('Already in favorites');
      return;
    }
  };

  useEffect(() => {
    if (isFavorite) {
      setBtnText('Already in favorites');
    } else {
      setBtnText('Add to favorite recipes');
    }
  }, [isFavorite]);

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
          { btnText }
        </SectionHeroBtn>
      )}
      <TimeBlock>
      <BsClock size="14px" fill="#23262A" />
        <TimeText>{timeDisplay}</TimeText>
      </TimeBlock>
    </SectionHero>
  );
};
