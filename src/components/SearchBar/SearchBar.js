import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { SearchForm } from 'components/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';
import {
  WrapperSearchBar,
  WrapperSelector,
  SearchBy,
} from './SearchBar.styled';
import { Loader } from 'components/Loader';
import { SearchedRecipesList } from 'components/SearchedRecipesList';
import { useRecipes } from 'api/hooks';

export const SearchBar = () => {
  const { state } = useLocation();
  // const [recipes, setRecipes] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: state ? 'ingredient' : 'title',
    label: state ? 'Ingredient' : 'Title',
  });

  const [searchParams, setSearchParams] = useSearchParams({});
  const title = searchParams.get('title') ?? '';
  const ingredient = searchParams.get('ingredient') ?? '';
  const filter = ingredient ? { ingredient, limit: 12 } : { title, limit: 12 };
  const { data, isLoading } = useRecipes(filter);
  const [formValue, setFormValue] = useState(title ? title : ingredient);
  console.log(data);
  console.log(isLoading);
  // useEffect(() => {
  //   if (!data || data.length === 0) {
  //     toast('Not found recipes! Try again!');
  //   } else {
  //     setRecipes(data);
  //   }
  // }, [data]);

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

  return (
    <>
      <WrapperSearchBar>
        <SearchForm
          onSubmit={handleSubmit}
          // onChange={handleChange}
          color={'#8baa36'}
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
