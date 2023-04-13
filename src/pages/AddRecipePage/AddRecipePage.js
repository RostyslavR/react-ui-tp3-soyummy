import { PageBox } from 'commonComponents/PageBox';
import { Container } from 'commonComponents/Container';
import { AddRecipeForm } from 'components/AddRecipeForm';
import { InfoBox, FlexBox } from './InfoBox';
import { MainTitle, PopularRecipe, FollowUs } from 'components';
import { TitleBar } from 'commonComponents/TitleBar';

export const AddRecipePage = () => {
  return (
    <Container>
      <MainTitle>Add recipe</MainTitle>
      <TitleBar tm="22" ht="60" hd="50" />
      <PageBox>
        <FlexBox>
          <AddRecipeForm />
          <InfoBox>
            <FollowUs size={26} />
            <PopularRecipe />
          </InfoBox>
        </FlexBox>
      </PageBox>
      <TitleBar tm="100" ht="100" hd="100" />{' '}
    </Container>
  );
};
