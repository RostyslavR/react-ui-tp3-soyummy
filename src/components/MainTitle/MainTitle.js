import { TitleBox } from 'commonComponents/TitleBox';
import { PageTitle } from 'commonComponents/PageTitle';
import { Dot1, Dot2, Dot3 } from '../../commonComponents/Dots';

export const MainTitle = ({ titleName, children }) => {
  return (
    <TitleBox>
      <PageTitle>
        {titleName}
        {children}
      </PageTitle>
      <Dot1 />
      <Dot2 />
      <Dot3 />
    </TitleBox>
  );
};
