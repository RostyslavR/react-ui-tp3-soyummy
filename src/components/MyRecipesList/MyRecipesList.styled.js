import styled from 'styled-components';
// import bucket_veggies_mob_1x from '../../images/search/bucket_veggies_mob_1x.png';
// import bucket_veggies_tab_1x from '../../images/search/bucket_veggies_tab_1x.png';
// import bucket_veggies_desk_1x from '../../images/search/bucket_veggies_desk_1x.png';

export const MyRecipe = styled.div`
  padding: 20px 0px 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 343px;
  height: auto;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding: 32px 0px 200px;
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 0px 100px;
    width: 1240px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 343px;
  gap: 18px;
  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
    gap: 50px;
  }
`;

// export const NoRecipesImg = styled.div`
//   width: 208px;
//   height: 133px;
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-size: cover;
//   margin: 40px;
//   background-image: url(${bucket_veggies_mob_1x});
//   @media screen and (max-width: 768px) {
//     width: 350px;
//     height: 225px;
//     background-image: url(${bucket_veggies_tab_1x});
//   }
//   @media screen and (min-width: 1440px) {
//     width: 520px;
//     height: 333px;
//     background-image: url(${bucket_veggies_desk_1x});
//   }
// `;

export const NoRecipesText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.02em;
  margin-bottom: 101px;
  // opacity: 0.5;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
