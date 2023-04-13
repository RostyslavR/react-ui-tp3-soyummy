# API

Всі хуки можуть приймати необов'язковий параметр `сallbacks`, в яких за
необхідності можна викликати наприклад `toast()`, `navigate()`, тощо :

```js
{
  onError: () => {},
  onSuccess: () => {},
};
```

GET хуки повертають об'єкт `{ data, error, isLoading }`:

- `data` - дані з response
- `error` - стандартний об'єкт Error
- `isLoading` - true, поки йде запит

POST, PATCH, DELETE хуки повертають об'єкт `{ mutate, error, isLoading }`:

- `mutate` - функція, що ініціює запит на сервер
- `error` - стандартний об'єкт Error
- `isLoading` - true, поки йде запит

## Examples

### GET hooks

```js
import { useRecipes } from './api/hooks';

export const Component = () => {
  const { data, error, isLoading } = useRecipes({
    onError: () => toast(error.message),
  });

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data && <div>{data}</div>}
    </>
  );
};
```

### POST, PATCH, DELETE hooks

```js
import { useRegister } from './api/hooks';
import { useNavigate } from 'react-router-dom';

export const Component = () => {
  const navigate = useNavigate();
  const { mutate, error, isLoading } = useRegister({
    onError: () => toast(error.message),
    onSuccess: () => navigate('/mainPage'),
  });

  const hadleSubmit = () => {
    mutate({ name, email, password });
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {/* ...... */}
      <Button onClick={hadleSubmit}>Register</Button>
    </>
  );
};
```

---

## Authorization

### _Regisration_: `POST /auth/register`

- **body**: `{name, email, password}`
- **response**: `{token, user: {id, name, email, avatar}}`

```js
import { useRegister } from './api/hooks';

const { mutate, error, isLoading } = useRegister();
mutate({ name, email, password });
```

### _Signin_: `POST /auth/signin`

- **body**: `{email, password}`
- **response**: `{token, user: {id, name, email, avatar}}`

```js
import { useSignIn } from './api/hooks';

const { mutate, error, isLoading } = useSignIn();
mutate({ email, password });
```

### _Logout_: `GET /auth/logout`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**: `{}`

```js
import { useLogOut } from './api/hooks';

const { mutate, error, isLoading } = useLogOut();
mutate();
```

---

## User

### _User details_: `GET /user`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**: `{id, name, email, avatar}`

```js
import { useUser } from './api/hooks';

const { data, error, isLoading } = useUser();
```

### _Update user_: `PATCH /user`

- **header**: `{Authorization: 'Bearer <token>'}`
- **body**: `{name, avatar}`
- **response**: `{id, name, email, avatar}`

```js
import { useUpdateUser } from './api/hooks';

const { mutate, error, isLoading } = useUpdateUser();
mutate({ name, avatar });
```

### _User statistics_: `GET /user/statistics`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**: `{days, recipes, favorites, shoppingLists}`

```js
import { useStatistics } from './api/hooks';

const { data, error, isLoading } = useStatistics();
```

### _Subscribe_: `POST /user/subscribe`

- **header**: `{Authorization: 'Bearer <token>'}`
- **body**: `{email}`
- **response**: `{email}`

```js
import { useSubscribe } from './api/hooks';

const { mutate, error, isLoading } = useSubscribe();
mutate(email);
```

---

## Categories

### _Categories list_: `GET /recipes/categories`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**: `[{id, name}]`

```js
import { useCategories } from './api/hooks';

const { data, error, isLoading } = useCategories();
```

---

## Ingredients

### _Ingredients list_: `GET /recipes/ingredients`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**: `[{id, name, image}]`

```js
import { useIngredients } from './api/hooks';

const { data, error, isLoading } = useIngredients();
```

---

## Recipes

### _Recipes list by filter_: `GET /recipes?category=1&title=omelette&ingredient=cheese&page=1&limit=4`

- **header**: `{Authorization: 'Bearer <token>'}`
- **query**: `{category, title, ingredient, page, limit}`
- **response**: `[{id, title, thumb, ...}]` - масив об'єктів recipe

```js
import { useRecipes } from './api/hooks';

const filter = {
  category: 1,
  title: 'omelette',
  ingredient: 'cheese',
  limit: 4,
  page: 1,
};
const { data, error, isLoading } = useRecipes(filter);
```

### _Recipe details_: `GET /recipes/id/:id`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**:
  `{id, title, category, instructions, description, thumb, time,ingredients: [{id, image, measure}] }`

```js
import { useRecipeDetails } from './api/hooks';

const { data, error, isLoading } = useRecipeDetails(id);
```

### _Main page recipes list_: `GET /recipes/main-page`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**:
  `[{id, title, category, instructions, description, thumb, time,ingredients: [{id, measure}] }]` -
  масив об'єктів recipe

```js
import { useMainRecipes } from './api/hooks';

const { data, error, isLoading } = useMainRecipes();
```

### _Popular recipes list_: `GET /recipes/popular`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**:
  `[{id, title, category, instructions, description, thumb, time,ingredients: [{id, measure}] }]`

```js
import { usePopular } from './api/hooks';

const { data, error, isLoading } = usePopular();
```

### _Favorite recipes list_: `GET /recipes/favorite `

- **header**: `{Authorization: 'Bearer <token>'}`
- **query**: `{page, limit}`
- **response**:
  `[{id, title, category, instructions, description, thumb, time,ingredients: [{id, measure}] }]`

```js
import { useFavorite } from './api/hooks';

const { data, error, isLoading } = useFavorite({ page: 1, limit: 4 });
```

### _Add favorite recipe_: `POST /recipes/favorite`

- **header**: `{Authorization: 'Bearer <token>'}`
- **body**: `{id}`
- **response**:
  `{id, title, category, instructions, description, thumb, time, ingredients: [{id, measure}] }`

```js
import { useFavorite } from './api/hooks';

const { mutate, error, isLoading } = useAddFavorite();
mutate(id);
```

### _Delete favorite recipe_: `DELETE /recipes/favorite/:id`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**:
  `{id, title, category, instructions, description, thumb, time,ingredients: [{id, measure}] }`

```js
import { useDeleteFavorite } from './api/hooks';

const { mutate, error, isLoading } = useDeleteFavorite();
mutate(id);
```

---

## Own recipes

### _Own recipes list_: `GET/own-recipes?page=1&limit=4`

- **header**: `{Authorization: 'Bearer <token>'}`
- **query**: `{page, limit}`
- **response**:
  `[{id, title, category, instructions, description, thumb, time,ingredients: [{id, measure}] }]`

```js
import { useOwnRecipes } from './api/hooks';

const { data, error, isLoading } = useOwnRecipes({ page: 1, limit: 4 });
```

### _Add own recipe_: `POST /own-recipes`

- **header**: `{Authorization: 'Bearer <token>'}`
- **body**:
  `{ title, category, instructions, description, thumb, time,ingredients: [{id, measure}]}`
- **response**:

```js
import { useAddOwnRecipe } from './api/hooks';

const { mutate, error, isLoading } = useAddOwnRecipe();
mutate({
  title,
  category,
  instructions,
  description,
  thumb,
  time,
  ingredients: [{ id, measure }],
});
```

### _Delete own recipe_: `DELETE /own-recipes/:id`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**:
  `{ title, category, instructions, description, thumb, time, ingredients: [{ id, measure }], }`

```js
import { useDeleteOwnRecipe } from './api/hooks';

const { mutate, error, isLoading } = useDeleteOwnRecipe();
mutate(id);
```

---

## SHOPPING LIST

### _Shopping list_: `GET/shopping-list`

- **header**: `{Authorization: 'Bearer <token>'}`
- **response**: `[{id, recipe, ttl, thb, measure}]`

```js
import { useShoppingList } from './api/hooks';

const { data, error, isLoading } = useShoppingList();
```

### _Add to shopping list_: `POST/shopping-list`

- **header**: `{Authorization: 'Bearer <token>'}`
- **body**: `{id, recipe, ttl, thb, measure}`
- **response**: `{ id, recipe, ttl, thb, measure}`

```js
import { useAddShoppingList } from './api/hooks';

const { mutate, error, isLoading } = useAddShoppingList();
mutate({ id, recipe, ttl, thb, measure });
```

### _Delete from shopping list_: `DELETE/shopping-list`

- **header**: `{Authorization: 'Bearer <token>'}`
- **body**: `[{id, recipe}]`
- **response**: `{}`

```js
import { useDeleteShoppingList } from './api/hooks';

const { mutate, error, isLoading } = useDeleteShoppingList();
mutate([{ id, recipe }]);
```

---
