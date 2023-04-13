// import { useCategories } from '../../api/hooks';
// import { Tab, Tabs } from '@mui/material';

// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import {
  CategoriesListWrap,
  CategoryList,
  CategoryListItem,
  CategoryLink,
  
} from './CategoriesList.styled';

// export const CategoriesList = (props) => {
//   const { data: categories, error, isLoading } = useCategories();

//   return (<>
//     {error && <div>{error}</div>}
//     {isLoading ? (
//       <div>Loading...</div>
//     ) : (
//       <CategoriesListWrap>
//       <Tabs value={props.value}>
//         {categories?.map(({ id, name }) =>
//           <Tab label={name} value={name} to={`/categories/${name}`} key={id} component={Link} />,
//         )}
//       </Tabs>
//       </CategoriesListWrap>
//     )
//     }
//   </>);
// };

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
