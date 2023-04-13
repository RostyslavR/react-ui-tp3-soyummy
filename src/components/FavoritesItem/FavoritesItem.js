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
              bgColor="#EBF3D4"
              hoverColor="#8baa36"
              iconColor="black"
              iconHoverColor="white"
            />
          </FavoriteDeleteBtn>
          <FavoriteDescription>{description}</FavoriteDescription>
          <FavoriteTime>{time} min</FavoriteTime>
          <FavoriteSeeBtn>
            <SuperBtn
              color="#22252A"
              hoverColor="#8baa36"
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
