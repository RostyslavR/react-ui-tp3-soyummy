import { useEffect } from 'react';
import {
  Wrapper,
  Overlay,
  ModalWindow,
} from './UserInfoModal.styled.js';

import { UserEditForm } from '../UserEditForm/UserEditForm.js';
import { LogoutModal } from '../LogoutModal/LogoutModal.js';
import { CloseButton } from 'components/CloseButton/CloseButton.js';


export const UserInfoModal = ({ status, closeModal, name, avatar}) => {
  useEffect(() => {
    const onEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscape);

    return () => {
      window.removeEventListener('keydown', onEscape);
    };
  }, [closeModal]);

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={onBackdropClick}>
      <ModalWindow status={status}>
        <Wrapper>
          <CloseButton  location="modal" onClick={closeModal} />
        </Wrapper>

        {status === 'edit' && (
          <UserEditForm
            name={name}
            avatarUrl={avatar}
            closeModal={closeModal}
          />
        )}
        {status === 'logout' && (
          <LogoutModal closeModal={closeModal} />
        )}
      </ModalWindow>
    </Overlay>
    );
};