import React, { useState } from 'react';
import { useSubscribe } from 'api/hooks/useSubscribe';

import emailIcon from '../../images/footer/email.svg';
import {
  SubscribeContainer,
  SubscribeBox,
  SubscribeTitle,
  SubscribeText,
  Form,
  Label,
  InputIcon,
  Icon,
  Input,
  Btn,
} from './Footer.styled';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const { mutate } = useSubscribe();

  const handleSubmit = e => {
    e.preventDefault();
    mutate(email);
    setEmail('');
    setIsValid(false);
  };

  const handleChange = e => {
    const input = e.target.value;
    setEmail(input);
    setIsValid(/^\S+@\S+\.\S+$/.test(input));
  };

  return (
    <SubscribeContainer>
      <SubscribeBox>
        <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
        <SubscribeText>
          Subscribe up to our newsletter. Be in touch with <br></br>latest news
          and special offers, etc.
        </SubscribeText>
      </SubscribeBox>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">
          <InputIcon>
            <Icon src={emailIcon} alt="email icon" />
          </InputIcon>

          <Input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleChange}
            required
          />
        </Label>

        <Btn type="submit" disabled={!isValid}>
          Submit
        </Btn>
      </Form>
    </SubscribeContainer>
  );
};
