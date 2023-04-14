import { Card, Title, Text, Button, CardWrap } from './Message.styled';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-hot-toast';

export const Message = ({ variant, t, message = '' }) => {
  return (
    <CardWrap>
      <Card>
        <Text>
          <Title variant={variant}>
            {variant === 'error' ? 'Oops! ' : 'Wow! '}
          </Title>
          {message}
        </Text>
        <Button variant={variant} onClick={() => toast.dismiss(t.id)}>
          <IoClose size={28} />
        </Button>
      </Card>
    </CardWrap>
  );
};
