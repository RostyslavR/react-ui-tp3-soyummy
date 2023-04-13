import { BtnDel } from './ButtonDelete.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export const ButtonDel = ({
  handleDelete,
  bgColor,
  hoverColor,
  iconColor,
  iconHoverColor,
}) => {
  return (
    <BtnDel
      bgColor={bgColor}
      hoverColor={hoverColor}
      iconHoverColor={iconHoverColor}
      iconColor={iconColor}
      onClick={handleDelete}
    >
      <RiDeleteBinLine />
    </BtnDel>
  );
};
