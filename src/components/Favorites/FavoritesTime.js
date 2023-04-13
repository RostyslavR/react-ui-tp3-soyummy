import React from 'react';
import { getTimeFromMins } from './FavoritesItem';
import { FavoritesTime } from './FavoritesTime.styled';

export const Time = ({ text }) => {
  return <FavoritesTime>{getTimeFromMins(text)}</FavoritesTime>;
};
