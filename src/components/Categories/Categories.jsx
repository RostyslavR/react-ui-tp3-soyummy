import { useCategories } from '../../api/hooks';
import { useParams } from 'react-router-dom';
import { CategoriesList } from 'components/CategoriesList/CategoriesList';
import { RecipiesList } from 'components/RecipiesList/RecipiesList';
import { Loader } from 'components/Loader/Loader';
import { SectionWrapper } from './Categories.styled';

export const Categories = () => {
  const { categoryName = 'Beef' } = useParams();

  let { data: categories, isLoading, isError, error } = useCategories();
  const category = categories?.find(({ name }) => name === categoryName);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  categories = categories?.sort(function (a, b) {
    const nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return (
    <div>
      <SectionWrapper>
        <CategoriesList value={categoryName} categories={categories} />
        <RecipiesList categoryId={category._id} />
      </SectionWrapper>
    </div>
  );
};
