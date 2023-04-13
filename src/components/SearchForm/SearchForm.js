import {
  SearchFormSection,
  SearchInput,
  SearchButton,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit, color, defaultValue = '' }) => {
  return (
    <SearchFormSection onSubmit={onSubmit}>
      <SearchInput
        name="query"
        // placeholder="Beef"
        defaultValue={defaultValue}
        // onChange={onChange}
        required
      />
      <SearchButton type="submit" color={color}>
        Search
      </SearchButton>
    </SearchFormSection>
  );
};

// export const SearchForm = ({ onSubmit }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleChange = ({ target }) => {
//     const { value } = target;
//     // console.log(value);
//     setSearchQuery(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // console.log(searchQuery);
//     onSubmit(searchQuery);
//     setSearchQuery('');
//   };

//   return (
//     <FormStyled onSubmit={handleSubmit}>
//       <InputStyled
//         name="searchQuery"
//         value={searchQuery}
//         onChange={handleChange}
//         required
//       />
//       <Button type="submit">Search</Button>
//     </FormStyled>
//   );
// };

//Олексія форма
// import { useNavigate } from 'react-router-dom';
// import {
//   SearchFormSection,
//   SearchInput,
//   SearchButton,
// } from './SearchForm.styled';

// const SearchForm = () => {
//   const navigate = useNavigate();

//   const handleSubmit = event => {
//     event.preventDefault();

//     // if (!event.currentTarget.value) {
//     //   return console.log(`Oops, type something`);
//     // }

//     navigate('/search');
//   };
