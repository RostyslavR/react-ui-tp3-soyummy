import {
  DishItem,
  DishList,
  DefaultImageContainer,
  WrapperLookingFor,
} from './RecipesList.styled';
import { DishCard } from 'components/DishCard/DishCard';

export const RecipesList = ({ items = [] }) => {
  return (
    <>
      <DishList isEmpty={items?.length === 0}>
        {items?.length === 0 ? (
          <li>
            <DefaultImageContainer />
            <WrapperLookingFor>
              Try looking for something else..
            </WrapperLookingFor>
          </li>
        ) : (
          items?.map(({ _id: id, title, thumb }) => (
            <DishItem key={id}>
              <DishCard id={id} title={title} image={thumb} />
            </DishItem>
          ))
        )}
      </DishList>
    </>
  );
};
