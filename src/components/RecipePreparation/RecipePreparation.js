import React from 'react';
import {
  SectionPreparationDescription,
  Count,
  Text,
  TextCount,
  RecipePreparationTitle,
} from './RecipePreparation.styled';

export const RecipePreparation = ({ description, preview }) => {
  return (
    <>
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
        <li>
          <img style={{ borderRadius: '8px', marginTop: '53px', marginBottom: '100px' }} src={preview} alt="preview" />
        </li>
      </SectionPreparationDescription>
    </>
  );
};
