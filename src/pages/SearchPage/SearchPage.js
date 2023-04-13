import { SearchBar } from 'components/SearchBar';
import { Container } from 'commonComponents/Container';
import { MainTitle } from 'components';
// import { PageBox } from 'commonComponents/PageBox';
// import { Spinach } from 'commonComponents/Spinach';

export const SearchPage = () => {
  return (
    <Container>
      <MainTitle titleName="Search" />
      <SearchBar />
      {/* <PageBox>
        <Spinach />
      </PageBox> */}
    </Container>
  );
};
export default SearchPage;
