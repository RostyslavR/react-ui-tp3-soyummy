import React from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonDel } from '../../commonComponents/ButtonDelete/ButtonDelete';
import SuperBtn from '../../commonComponents/SuperBtn/SuperBtn';
import { getTimeDisplay } from '../../commonComponents/GetTimeDisplay/getTimeDisplay.js';

import {
  CardItem,
  ImageCard,
  MainContainer,
  TitleRecipe,
  Text,
  Time,
  ButtonDelete,
  SuperBtnWrapper,
} from './MyRecipesItem.styled.js';

export const MyRecipesItem = ({
  thumb,
  category,
  title,
  description,
  time,
  handleDelete,
  id,
}) => {
  const location = useLocation();
  // !!!!!Добавити для відображення хвилин/годин і нижче код <Time>{timeDisplay}</Time>
  const timeDisplay = getTimeDisplay(time);

  return (
    <CardItem>
      <ImageCard src={thumb} alt={category} />
      <MainContainer>
        <TitleRecipe to={`/recipe/${id}`}>{title}</TitleRecipe>
        <ButtonDelete>
          <ButtonDel
            handleDelete={handleDelete}
            bgColor="#8baa36"
            hoverColor="#EBF3D4"
            iconColor="white"
            iconHoverColor="black"
          />
        </ButtonDelete>
        <Text>{description}</Text>
        <Time>{timeDisplay}</Time>
        <SuperBtnWrapper>
          <SuperBtn
            title="See recipe"
            lnk
            to={`/recipe/${id}`}
            statefrom={{ from: location }}
          />
        </SuperBtnWrapper>
      </MainContainer>
    </CardItem>
  );
};
