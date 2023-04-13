import { CloseButtonStyled  } from './CloseButton.styled';
// import Icon_close  from 'images/commonSvgImg/Icon_close.svg';

// export const CloseButton = ({ location, onClick }) => {
//   return (
//     <CloseButtonStyled  location={location} type="button" onClick={onClick}>
//       <img src={Icon_close} alt="close" />
//     </CloseButtonStyled >
//   );
// };

import { AiOutlineClose } from 'react-icons/ai';

export const CloseButton = ({ location, onClick }) => {
  return (
    <CloseButtonStyled  location={location} type="button" onClick={onClick}>
      <AiOutlineClose />
    </CloseButtonStyled >
  );
};