import React from 'react';
import { Puff } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
import { useTheme } from 'styled-components';

export const Loader = () => {
  const theme = useTheme();
  return (
    <LoaderWrapper>
      <Puff
        height="80"
        width="80"
        radius={1}
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        visible={true}
        wrapperClass=""
        color={theme.colors.greenAccent}
      />
    </LoaderWrapper>
  );
};
