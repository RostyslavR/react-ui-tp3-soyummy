import { Card, Title, Text, Button, CardWrap } from './Message.styled';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-hot-toast';

export const Message = ({ isError, t, message = '' }) => {
  return (
    <CardWrap>
      <Card>
        <Text>
          <Title isError={isError}>{isError ? 'Oops! ' : 'Wow! '}</Title>
          {message}
        </Text>
        <Button isError={isError} onClick={() => toast.dismiss(t.id)}>
          <IoClose size={28} />
        </Button>
      </Card>
    </CardWrap>
  );
};
