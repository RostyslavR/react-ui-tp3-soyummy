import styled from 'styled-components';

export const ListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* min-width: 80%; */
  /* flex-grow: 1; */
  gap: 24px;
  max-width: 100%;
  padding-top: 32px;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    justify-content: space-between;
  }
`;

export const RecipeItem = styled.li`
  display: flex;
  height: 100px;
  /* max-width: 100%; */
  color: black;
  gap: 12px;
  /* margin-bottom: 13px; */

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    width: 47%;
  }
  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    width: 100%;
  }
`;

export const ImageBox = styled.img`
  display: block;
  width: 100px;
  height: 85px;
  border-radius: 8px;
  object-fit: cover;
  alt: 'food';
`;

export const TextBox = styled.div`
  /* flex-grow: 1; */
  width: 100%;
`;

export const TitleBox = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: ${({ theme: { colors } }) => colors.secondaryDarkText};
`;

export const AboutBox = styled.p`
  font-size: 12px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  color: #7e7e7e;
  width: 100%;

  height: 56px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
`;
