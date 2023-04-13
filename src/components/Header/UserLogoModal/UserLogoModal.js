import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { EditBtn, LogOutBtn, UserMenu } from './UserLogoModal.styled';

export const UserLogoModal = ({ toggleModal }) => {
  return (
    <>
      <UserMenu>
        <EditBtn type="button" onClick={() => toggleModal('edit')}>
          <span>Edit profile</span>
          <FiEdit2 />
        </EditBtn>
        <LogOutBtn type="button" onClick={() => toggleModal('logout')}>
          <span>Log Out</span>
          <AiOutlineArrowRight />
        </LogOutBtn>
      </UserMenu>
    </>
  );
};