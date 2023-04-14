import React from 'react';
import { Puff } from 'react-loader-spinner';
import { LoaderWrapper} from './Loader.styled';

export const Loader = () => (
  <LoaderWrapper>
    <Puff
      height="80"
      width="80"
      radius={1}
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      visible={true}
      wrapperClass=""
    />
  </LoaderWrapper>
);

