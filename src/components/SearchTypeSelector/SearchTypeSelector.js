import React from 'react';

import { StyledSelect } from './SearchTypeSelector.styled';

// const customStyles = {
//   control: (provided, state) => ({
//     ...provided,

//     border: 'none',
//     boxShadow: 'none',
//     borderBottom: state.isFocused ? 'none' : '1px solid #ccc',
//     borderRadius: '5px',
//     minHeight: 'initial',
//     backgroundColor: '#d9d9d9',
//     width: '198px',
//     height: '49px',
//   }),

//   option: (provided, state) => ({
//     ...provided,
//     width: 198,
//     userSelect: 'none',
//     cursor: 'pointer',
//     backgroundColor: 'white',
//     color: 'black',
//     fontSize: '14px',
//     outline: 'none',
//     ':active': {
//       backgroundColor: '#e6e6e6',
//     },
//   }),

//   dropdownIndicator: provided => ({
//     ...provided,
//     color: '#8BAA36',
//     paddingRight: '14px',
//     paddingLeft: 0,
//     ':before': {
//       content: 'none',
//     },
//     ':after': {
//       content: 'none',
//     },
//   }),

//   menu: provided => ({
//     ...provided,
//     width: 198, // задаем желаемую ширину
//     border: 'none', // убираем рамку
//     boxShadow: 'none', // убираем тень
//     backgroundColor: 'white',
//     color: 'black',
//   }),

//   indicatorSeparator: provided => ({
//     ...provided,
//     display: 'none',
//   }),
// };

const SearchTypeSelector = ({ onChange, selectedOption }) => {
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'ingredient', label: 'Ingredients' },
  ];
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [selectedOption, setSelectedOption] = useState({
  //   value: 'title',
  //   label: 'Title',
  // });

  const handleOptionChange = option => {
    // console.log(option);
    // console.log(selectedOption);
    // setSelectedOption(option);
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
