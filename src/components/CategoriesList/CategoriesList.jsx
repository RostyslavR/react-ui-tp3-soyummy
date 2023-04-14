import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import {
  CategoriesListWrap,
  CategoryList,
  CategoryListItem,
  CategoryLink,
} from './CategoriesList.styled';

export const CategoriesList = props => {

  const tabRef = useRef();
  const { events } = useDraggable(tabRef);
  
  return (
    <>
      <CategoriesListWrap>
        <CategoryList value={props.value} {...events} ref={tabRef}>
          {props.categories?.map(({ _id: id, name }) => (
            <CategoryListItem key={id}>
              <CategoryLink
                className={props.value === name ? 'active' : ''}
                label={name}
                value={name}
                to={`/categories/${name}`}
              >
                {name}
              </CategoryLink>
            </CategoryListItem>
          ))}
        </CategoryList>
      </CategoriesListWrap>
    </>
  );
};
