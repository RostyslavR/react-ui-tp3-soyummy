import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AiOutlineSearch} from 'react-icons/ai';

import { 
  // Navigation, 
  LocationLink } from './HeaderNav.styled';

export const HeaderNavigation = ({ setShowBurgerMenu = () => {} }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    if (pathname.includes('/categories')) {
      setActive('categories');
    } else if (pathname.includes('/add')) {
      setActive('add');
    } else if (pathname.includes('/my')) {
      setActive('my');
    } else if (pathname.includes('/favorite')) {
      setActive('favorite');
    } else if (pathname.includes('/shopping-list')) {
      setActive('shopping-list');
    } else if (pathname.includes('/search')) {
      setActive('search');
    } else {
      setActive('');
    }
  }, [pathname]);

  return (
    // <Navigation>
      <>
        <LocationLink
          onClick={() => {
            setShowBurgerMenu(false);
          }}
          to="/categories/Beef"
          selection={(active === 'categories').toString()}
        >
          Categories
        </LocationLink>
        <LocationLink
          onClick={() => {
            setShowBurgerMenu(false);
          }}
          to="/add"
          selection={(active === 'add').toString()}
        >
          Add recipes
        </LocationLink>
        <LocationLink
          onClick={() => {
            setShowBurgerMenu(false);
          }}
          to="/my?page=1"
          selection={(active === 'my').toString()}
        >
          My recipes
        </LocationLink>
        <LocationLink
          onClick={() => {
            setShowBurgerMenu(false);
          }}
          to="/favorite"
          selection={(active === 'favorite').toString()}
        >
          Favorites
        </LocationLink>
        <LocationLink
          onClick={() => {
            setShowBurgerMenu(false);
          }}
          to="/shopping-list"
          selection={(active === '/shopping-list').toString()}
        >
          Shopping list
        </LocationLink>
        <LocationLink
          onClick={() => {
            setShowBurgerMenu(false);
          }}
          to="/search"
          selection={(active === 'search').toString()}
        >
        < AiOutlineSearch />
        </LocationLink>
      </>
    // </Navigation>
  );
};
