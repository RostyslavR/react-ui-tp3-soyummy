import { useState } from 'react';
import { useUpdateUser } from 'api/hooks/useUpdateUser';
import { useUser } from 'api/hooks/useUser';
import { FiUser } from 'react-icons/fi';

import {
  AvatarWrapper,
  Form,
  UserWrapper,
  NameLabel,
  UserIcon,
  NameInput,
  Button,
  InputsWrapper,
} from './UserEditForm.styled';

export const UserEditForm = ({ closeModal }) => {
  const { data } = useUser();
  const [name, setName] = useState(data.name);
  const [avatar, setAvatar] = useState(data.avatar);
  const [fileAvatar, setFileAvatar] = useState(null);

  const { mutate, error, isLoading } = useUpdateUser();

  const handleOnChange = e => {
    setFileAvatar(e.target.files[0]);
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = e => {
    e.preventDefault();
    mutate({ name, avatar: fileAvatar });
    closeModal();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AvatarWrapper>
        <label htmlFor="avatar" id="labelFile">
          <UserWrapper>
            <img src={avatar} alt={avatar} />
          </UserWrapper>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={handleOnChange}
          />
        </label>
      </AvatarWrapper>
      <InputsWrapper>
        <NameLabel htmlFor="name" id="labelName">
          <UserIcon>
          <FiUser color='#23262A' width="48" height="48" />
          </UserIcon>
          <NameInput
            type="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}

          />
        </NameLabel>
        <Button type="submit" disabled={isLoading} >
          Save changes
        </Button>
      </InputsWrapper>
      {error}
    </Form>
  );
};