import React from 'react';

import { Title } from './Title';
import { Navigation } from './Navigation';
import { SubscribeForm } from './SubscribeForm';
import { FollowUs } from './FollowUs';
import { Rights } from './Rights';

import {
  FooterStyle,
  FoterBox,
  TitleContainer,
  MainFooterContainer,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyle>
      <FoterBox>
        <MainFooterContainer>
          <TitleContainer>
            <Title />
            <Navigation />
          </TitleContainer>
          <SubscribeForm />
        </MainFooterContainer>
        <FollowUs />
      </FoterBox>
      <Rights />
    </FooterStyle>
  );
};
