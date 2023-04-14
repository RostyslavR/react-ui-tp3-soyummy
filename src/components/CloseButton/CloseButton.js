import { CloseButtonStyled  } from './CloseButton.styled';

import { AiOutlineClose } from 'react-icons/ai';

export const CloseButton = ({ location, onClick }) => {
  return (
    <CloseButtonStyled  location={location} type="button" onClick={onClick}>
      <AiOutlineClose />
    </CloseButtonStyled >
  );
};