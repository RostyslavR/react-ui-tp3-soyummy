import { Link } from 'react-router-dom';
import {
  CardImg,
  CardTitle,
  CardDish,
  TooltipWrapper,
} from './DishCard.styled';
import NoImage from '../../images/default/default-middle.jpg';
import { scrollUp } from 'utils/scrollUp';

// import { useRecipes } from '../../api/hooks';
// import { useParams } from 'react-router-dom';

// const { categoryName: categoryId } = useParams();

//   const { data: recipes, error, isLoading } = useRecipes({ category: categoryId });

export const DishCard = ({ id, title, image }) => {
  return (
    <CardDish>
      <Link to={`/recipe/${id}`} onClick={scrollUp}>
        <CardImg
          src={image ? image : { NoImage }}
          alt={title}
        />
        <CardTitle >{title}</CardTitle>
        {title.length > 30 && (
          <TooltipWrapper>
            <p>{title}</p>
          </TooltipWrapper>
        )}
      </Link>
    </CardDish>
  );
};