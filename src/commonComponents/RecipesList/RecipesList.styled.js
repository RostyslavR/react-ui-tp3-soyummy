import styled from 'styled-components';

import bucket_veggies_mob_1x from '../../images/search/bucket_veggies_mob_1x.png';
import bucket_veggies_tab_1x from '../../images/search/bucket_veggies_tab_1x.png';
import bucket_veggies_desk_1x from '../../images/search/bucket_veggies_desk_1x.png';

export const DishList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${props => (props.isEmpty ? '50px' : '42px')};
  margin-bottom: 50px;
  // min-height: 746px;
  width: 375px;
  margin-left: auto;
  margin-right: auto;
  row-gap: 28px;
  justify-content: center;

  // align-items: center;
  @media screen and (min-width: 768px) {
    width: 768px;
    gap: 32px;
    margin-top: ${props => (props.isEmpty ? '50px' : '40px')};
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    row-gap: 100px;
    column-gap: 14px;
    margin-top: ${props => (props.isEmpty ? '50px' : '90px')};
  }
`;
export const DishItem = styled.li`
  @media screen and (min-width: 1440px) {
    justify-content: center;
  }
`;

export const DefaultImageContainer = styled.div`
  width: 208px;
  height: 133px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${bucket_veggies_mob_1x});

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
    background-image: url(${bucket_veggies_tab_1x});
  }

  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 225px;
    background-image: url(${bucket_veggies_desk_1x});
  }
`;

export const WrapperLookingFor = styled.span`
  font-size: ${props => props.theme.fontSizes[3]}px;
  color: ${props => props.theme.colors.blackText};
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[7]}px;
  }
`;
