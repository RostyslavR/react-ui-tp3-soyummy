import instagram from '../../images/footer/instagram.svg';
import facebook from '../../images/footer/facebook.svg';
import twitter from '../../images/footer/twitter.svg';
import youtube from '../../images/footer/youtube.svg';

import { IconList, IconItem, IconImg } from './Footer.styled';

export const FollowUs = () => {
  return (
    <IconList>
      <IconItem>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <IconImg src={facebook} alt="facebook" />
        </a>
      </IconItem>
      <IconItem>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <IconImg src={youtube} alt="youtube" />
        </a>
      </IconItem>
      <IconItem>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <IconImg src={twitter} alt="twitter" />
        </a>
      </IconItem>
      <IconItem>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <IconImg src={instagram} alt="instagram" />
        </a>
      </IconItem>
    </IconList>
  );
};
