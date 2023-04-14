import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';

import { IconList, IconItem, IconFol } from './Footer.styled';

export const FollowUs = () => {
  return (
    <IconList>
      <IconItem>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <IconFol as={BsFacebook} size={20} />
        </a>
      </IconItem>
      <IconItem>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <IconFol as={BsYoutube} size={20} />
        </a>
      </IconItem>
      <IconItem>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <IconFol as={BsTwitter} size={20} />
        </a>
      </IconItem>
      <IconItem>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <IconFol as={BsInstagram} size={20} />
        </a>
      </IconItem>
    </IconList>
  );
};
