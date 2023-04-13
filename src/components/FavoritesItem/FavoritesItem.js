import { theme } from '../../constants'; // replace "./colors" with the correct path to the colors file

import SuperBtn from 'commonComponents/SuperBtn/SuperBtn';
import { ButtonDel } from 'commonComponents/ButtonDelete/ButtonDelete';
import { useLocation } from 'react-router-dom';
import {
  FavoritesContentLi,
  ImageFavoriteCard,
  FavoriteDishTitel,
  FavoriteDescription,
  FavoriteTime,
  FavoriteDeleteBtn,
  FavoriteBtnWrapper,
  FavoriteSeeBtn,
} from './FavoritesItem.styled';

export const FavoritesItem = ({
  id,
  image,
  title,
  time,
  description,
  handleDelete,
}) => {
  const location = useLocation();

  return (
    <>
      <FavoritesContentLi>
        <ImageFavoriteCard src={image} alt={title} />
        <FavoriteBtnWrapper>
          <FavoriteDishTitel to={`/recipe/${id}`}>{title}</FavoriteDishTitel>
          <FavoriteDeleteBtn>
            <ButtonDel
              handleDelete={handleDelete}
              bgColor={p => p.theme.colors.secondaryAccent}
              hoverColor={theme.colors.greenAccent}
              iconColor={p => p.theme.colors.iconDarkColor}
              iconHoverColor={p => p.theme.colors.primaryLightTextNoChange}
            />
          </FavoriteDeleteBtn>
          <FavoriteDescription>{description}</FavoriteDescription>
          <FavoriteTime>{time} min</FavoriteTime>
          <FavoriteSeeBtn>
            <SuperBtn
              hoverColor={p => p.theme.colors.buttoHoverColor}
              color={p => p.theme.colors.buttonColor}
              title="See recipe"
              lnk
              to={`/recipe/${id}`}
              statefrom={{ from: location }}
            />
          </FavoriteSeeBtn>
        </FavoriteBtnWrapper>
      </FavoritesContentLi>
    </>
  );
};
