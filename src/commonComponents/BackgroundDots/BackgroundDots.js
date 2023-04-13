import { ContainerDots } from './BackgroundDots.styled';
export const BackgroundDots = () => {
  return <ContainerDots />;
};

/* =========== example of adding to any component======================

import { BackgroundDots } from '../../commonComponents/BackgroundDots/BackgroundDots';

export const Header = () => {
  return (
    <div>
      <BackgroundDots />
      <h1>Header</h1>
    </div>
  );
};

*/
