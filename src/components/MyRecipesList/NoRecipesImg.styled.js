import styled from 'styled-components';
import bucket_veggies_mob_1x from '../../images/search/bucket_veggies_mob_1x.png';
import bucket_veggies_tab_1x from '../../images/search/bucket_veggies_tab_1x.png';
import bucket_veggies_desk_2x from '../../images/search/bucket_veggies_desk_2x.png';

export const NoRecipesImg = styled.div`
  width: 208px;
  height: 133px;
  background-repeat: no-repeat;
  background-position: center;
  margin: 40px;
  background-image: url(${bucket_veggies_mob_1x});
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
    background-image: url(${bucket_veggies_tab_1x});
  }
  @media screen and (min-width: 1440px) {
    width: 700px;
    height: 450px;
    background-image: url(${bucket_veggies_desk_2x});
  }
`;
