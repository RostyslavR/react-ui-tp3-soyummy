import React from 'react';

import { StyledSelect } from './SearchTypeSelector.styled';



const SearchTypeSelector = ({ onChange, selectedOption }) => {
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'ingredient', label: 'Ingredients' },
  ];


  const handleOptionChange = option => {

    onChange(option);
  };

  return (
    <StyledSelect
      classNamePrefix="Select"
      options={options}
      value={selectedOption}
      onChange={handleOptionChange}
      defaultValue={{ value: 'title', label: 'Title' }}
      // styles={customStyles}
      isSearchable
    />
  );
};

export default SearchTypeSelector;
