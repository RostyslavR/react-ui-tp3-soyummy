import React from 'react';
import {
  SectionPreparationDescription,
  Count,
  Text,
  TextCount,
  RecipePreparationTitle,
  ImgThumb,
  Img,
  DefaultImg,
  Box,
} from './RecipePreparation.styled';
import notFoundFoto from '../../images/receipy/default-recipe-image-not-found.gif'

export const RecipePreparation = ({ description, preview }) => {
  return (
    
    <Box>
    <SectionPreparationDescription>
        <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
        {description &&
          description.split('. ').map((el, i) => {
            return (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div>
                  <Count>
                    <TextCount>{i + 1}</TextCount>
                  </Count>
                </div>
                <Text>{el}</Text>
              </li>
            );
          })}
      </SectionPreparationDescription>
      <ImgThumb>
          {preview ? (<Img alt="Recipe foto" src={preview} />) : (<DefaultImg alt="Recipe foto" src={notFoundFoto} />)}
        </ImgThumb>
    </Box>
      
      
      
    
  );
};
