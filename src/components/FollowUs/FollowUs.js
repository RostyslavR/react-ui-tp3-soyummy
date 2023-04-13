import facebook from 'images/footer/facebook.svg';
import youtube from 'images/footer/youtube.svg';
import twitter from 'images/footer/twitter.svg';
import instagram from 'images/footer/instagram.svg';

import { SectionTitle } from 'commonComponents/SectionTitle';
import { IconList, IconImg, Box } from './FollowUs.styled';

const netArray = [
  { net: facebook, link: 'https://www.facebook.com/' },
  { net: youtube, link: 'https://www.youtube.com/' },
  { net: twitter, link: 'https://www.twitter.com/' },
  { net: instagram, link: 'https://www.instagram.com/' },
];

// props "size" must be 20px or 26px only
export const FollowUs = ({ size, title }) => {
  return (
    <Box size={size}>
      <SectionTitle>Follow us</SectionTitle>
      <IconList>
        {netArray.map((item, idx) => (
          <Item key={idx} {...item} size={size} />
        ))}
      </IconList>
    </Box>
  );
};

const Item = ({ net, link, size }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        <IconImg src={net} size={size} alt="net" />
      </a>
    </li>
  );
};
