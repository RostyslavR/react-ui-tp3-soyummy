import { useLogOut } from 'api/hooks/useLogOut';

import {
    Wrapper ,
    Text,   
    ButtonWrapper,
    Button,
} from "./LogoutModal.styled";

export const LogoutModal = ({ closeModal }) => {
  const { mutate } = useLogOut();
   
  const onLogOutBtnClick = () => {
    mutate(); 
    closeModal();
  };
  return (
    <Wrapper >
      <Text> Are you sure you want to log out?</Text>
      <ButtonWrapper>
        <Button onClick={onLogOutBtnClick}>Log out</Button>
        <Button status="cancel" onClick={closeModal}>Cancel</Button>
      </ButtonWrapper>
    </Wrapper >
  );
};