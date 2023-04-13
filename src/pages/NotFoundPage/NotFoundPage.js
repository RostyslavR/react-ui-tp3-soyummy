import React from 'react';
import NotFound from '../../components/NotFound/NotFound';
 import { Container } from 'commonComponents/Container';
import { MainTitle } from 'components';
import styled from 'styled-components';

const NotFoundContainer = styled(Container)`
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 195px;
  }
`;
const NotFoundPage = () => {
  return (
       
      <NotFoundContainer>
          <MainTitle />
          <NotFound />
      </NotFoundContainer>
  );
};

export default NotFoundPage;
