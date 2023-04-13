import React from 'react';
import PropTypes from 'prop-types';
import { InputIcon } from './Icon.styled';

export const Icon = ({ element: Element, color, size }) => {
  return (
    <InputIcon>
      <Element color={color} size={size} />
    </InputIcon>
  );
};

Icon.propTypes = {
  element: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  color: 'inherit',
  size: 22,
};
