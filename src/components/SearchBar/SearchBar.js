import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { SearchForm } from 'components/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';
import {
  WrapperSearchBar,
  WrapperSelector,
  WrapperPaginator,
  SearchBy,
} from './SearchBar.styled';
import { Loader } from 'components/Loader';
import { SearchedRecipesList } from 'components/SearchedRecipesList';
import { Paginator } from 'components/Paginator';
import { useRecipes } from 'api/hooks';

export const SearchBar = () => {
  const { state } = useLocation();
  // const [recipes, setRecipes] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: state ? 'ingredient' : 'title',
    label: state ? 'Ingredient' : 'Title',
  });
  const [page, setPage] = useState(1);
  const [limit] = useState(12);

  const [searchParams, setSearchParams] = useSearchParams({});
  const title = searchParams.get('title') ?? '';
  const ingredient = searchParams.get('ingredient') ?? '';
  const filter = ingredient
    ? { ingredient, limit: 12, page }
    : { title, limit: 12, page };
  // console.log(filter);
  const { data, isLoading } = useRecipes(filter);
  const [formValue, setFormValue] = useState(title ? title : ingredient);

  const theme = useTheme();
  const color = theme.colors.greenAccent;

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const valueForm = form.elements.query.value;
    setSearchParams({ [selectedOption.value]: valueForm });
    // console.log(valueForm, selectedOption);
    form.reset();
    setFormValue('');
  };

  const handleTypeChange = option => {
    setSelectedOption(option);
  };

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  return (
    <>
      <WrapperSearchBar>
        <SearchForm
          onSubmit={handleSubmit}
          // onChange={handleChange}
          color={color}
          defaultValue={formValue}
        />
        <WrapperSelector>
          <SearchBy>Search by:</SearchBy>
          <SearchTypeSelector
            onChange={handleTypeChange}
            selectedOption={selectedOption}
          />
        </WrapperSelector>
      </WrapperSearchBar>
      {isLoading && <Loader />}
      {data && <SearchedRecipesList items={data} />}
      {data && data.length !== 0 && (
        <WrapperPaginator>
          <Paginator
            currentPage={page}
            onPageChange={handlePageChange}
            totalPages={Math.ceil(data.total / limit)}
          />
        </WrapperPaginator>
      )}
    </>
  );
};

// моя форма первоначальная
// export const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams({});
//   const { data } = useRecipes(searchParams);

//   const handleChange = ({ target }) => {
//     const { value } = target;
//     setQuery(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     setSearchParams({ search: query });
//   };

//   const handleTypeChange = ({ value }) => {
//     const firstParam = searchParams.get('search');
//     const newArr = { search: firstParam, [value]: firstParam };

//     setSearchParams(newArr);
//   };

//   return (
//     <WrapperSearchBar>
//       <SearchForm onSubmit={handleSubmit} onChange={handleChange} />
//       <div style={{ display: 'flex' }}>
//         <span style={{ fontSize: '18px', fontWeight: '500' }}>Search by:</span>
//         <SearchTypeSelector onChange={handleTypeChange} />
//       </div>
//       <SearchedRecipesList items={data} />
//     </WrapperSearchBar>
//   );
// };
