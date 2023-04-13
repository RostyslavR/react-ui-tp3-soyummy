import { useMainRecipes } from '../../api/hooks';
import { Loader } from 'components/Loader/Loader';
import {
  PreviewCategoriesMain,
  PreviewCategoriesContainer,
  PreviewCategoriesList,
  PreviewCategoriesTitle,
  PreviewOtherCategories,
  PreviewCategoriesItem,
  PreviewCategoriesLink,
} from './PreviewCategories.styled';
import { DishCard } from 'components/DishCard/DishCard';

const PreviewCategories = () => {
  const { data: recipes, isLoading } = useMainRecipes();

  if (isLoading) {
    return <Loader />;
  }

  const categoryNames = ['Breakfast', 'Miscellaneous', 'Chicken', 'Dessert'];

  return (
    <>
      <PreviewCategoriesMain>
        {categoryNames.map(categoryName => (
          <PreviewCategoriesContainer key={categoryName}>
            <PreviewCategoriesTitle>{categoryName}</PreviewCategoriesTitle>
            <PreviewCategoriesList>
              {recipes
                .filter(({ category }) => category === categoryName)
                .map(({ _id: id, title, thumb }) => (
                  <PreviewCategoriesItem key={id}>
                    <DishCard id={id} title={title} image={thumb} />
                  </PreviewCategoriesItem>
                ))}
            </PreviewCategoriesList>
            <PreviewCategoriesLink to={`/categories/${categoryName}`}>
              See all
            </PreviewCategoriesLink>
          </PreviewCategoriesContainer>
        ))}
        <PreviewOtherCategories to="/categories">
          Other categories
        </PreviewOtherCategories>
      </PreviewCategoriesMain>
    </>
  );
};

export default PreviewCategories;
