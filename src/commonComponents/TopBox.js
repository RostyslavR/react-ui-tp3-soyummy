import { Dot } from 'commonComponents/Dot';
import { TitleBox } from './TitleBox';
import { PageTitle } from './PageTitle';

export const TopBox = ({ pageTitle }) => {
  return (
    <TitleBox>
      <PageTitle>{pageTitle}</PageTitle>
      <Dot dotNumber={0} />
      <Dot dotNumber={1} />
      <Dot dotNumber={2} />
    </TitleBox>
  );
};
