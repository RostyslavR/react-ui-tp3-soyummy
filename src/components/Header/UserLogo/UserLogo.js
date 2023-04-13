import { useEffect, useState } from 'react';
import { useUser } from 'api/hooks/useUser';

import { UserInfoModal } from '../UserInfoModal/UserInfoModal';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal';

import {
  Wrapper,
  Button,
} from './UserLogo.styled';

export const UserLogo = () => {
  const { data } = useUser();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const toggleUserEditMenu = e => {
    setShowUserMenu(!showUserMenu);
  };

  const toggleUserModal = status => {
    setShowModal(!showModal);
    setStatusModal(status);
    setShowUserMenu(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowUserMenu(false);
    }, 300);
  };

  useEffect(() => {
    const pressEsc = event => {
      if (event.code === 'Escape') {
        setShowUserMenu(false);
      }
    };

    window.addEventListener('keydown', pressEsc);

    return () => {
      window.removeEventListener('keydown', pressEsc);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Button
          type="button"
          onClick={toggleUserEditMenu}
          onBlur={handleBlur}
        >
          <img src={data.avatar} alt={data.name} />
          <p>{data.name}</p>
        </Button>

        {showUserMenu && (
          <UserLogoModal
            setShowUserMenu={() => setShowUserMenu}
            toggleModal={toggleUserModal}
          />
        )}
      </Wrapper>

      {showModal && (
        <UserInfoModal
          name={data.name}
          avatarUrl={data.avatar}
          closeModal={toggleUserModal}
          status={statusModal}
        />
      )}
    </>
  );
};