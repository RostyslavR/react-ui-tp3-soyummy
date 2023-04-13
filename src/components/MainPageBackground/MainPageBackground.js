import ChooseYourBreakfast from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import LeavesBackground from './LeavesBackground';
import LeftLeaves from './LeftLeaves';
import MainArrow from './MainArrow/MainArrow';
import RightLeaves from './RightLeaves';

const MainPageBackground = () => {
  return (
    <>
      <ChooseYourBreakfast />
      <LeftLeaves />
      <RightLeaves />
      <LeavesBackground />
      <MainArrow />
    </>
  );
};

export default MainPageBackground;
