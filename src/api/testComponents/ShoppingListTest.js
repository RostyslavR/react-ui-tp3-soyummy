import {
  useShoppingList,
  useAddShoppingList,
  useDeleteShoppingList,
} from '../hooks';
// import { useState } from 'react';

// {
//   id: '640c2dd963a319ea671e372e',
//   recipe: '640cd5ac2d9fecf12e8897fc111',
//   measure: '14 oz jar',
//   ttl: 'Onions',
//   thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/v68e3x3qklciznrsbjij.pnghttps://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/v68e3x3qklciznrsbjij.png',
// }

const ingredient = {
  id: '640c2dd963a319ea671e372e',
  recipe: '640cd5ac2d9fecf12e8897fc-88',
  measure: '14 oz jar',
  ttl: 'Onions',
  thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/v68e3x3qklciznrsbjij.pnghttps://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/v68e3x3qklciznrsbjij.png',
};

export const ShoppingListTest = () => {
  const shoppingList = useShoppingList({
    onSuccess: console.log,
    onError: console.log,
  });
  const addShoppingList = useAddShoppingList({
    onSuccess: console.log,
    onError: console.log,
  });
  const deleteShoppingList = useDeleteShoppingList({
    onSuccess: console.log,
    onError: console.log,
  });

  const isLoading =
    shoppingList.isLoading ||
    addShoppingList.isLoading ||
    deleteShoppingList.isLoading;

  const error =
    shoppingList.error || addShoppingList.error || deleteShoppingList.error;

  const handleAdd = e => {
    addShoppingList.mutate(ingredient);
  };

  const handleDelete = e => {
    deleteShoppingList.mutate([
      { id: ingredient.id, recipe: ingredient.recipe },
      { id: '640c2dd963a319ea671e372e', recipe: '640cd5ac2d9fecf12e8897fc-88' },
      { id: '640c2dd963a319ea671e372e', recipe: '640cd5ac2d9fecf12e8897fc-77' },
    ]);
  };

  return (
    <>
      <h3>ShoppingList</h3>
      {/* <p>{JSON.stringify(recipes.data)}</p> */}

      <p>{JSON.stringify(shoppingList?.data?.length)}</p>
      <p>
        {JSON.stringify(
          shoppingList?.data?.map(({ id, ttl, recipe }) => ({
            id,
            ttl,
            recipe,
          }))
        )}
      </p>

      <button onClick={handleAdd}>Add to ShoppingList</button>
      <button onClick={handleDelete}>Delete from ShoppingList</button>

      {error && <p>Error {error.message}</p>}
      {isLoading && <p>Loading... </p>}
    </>
  );
};

//---------RecipeDetailsPage---------

// function RecipeDetails() {
//   const { recipeId } = useParams();
//   const recipe = useRecipe(recipeId);
//   //запит до ShoppingList
//   const shoppingList = useShoppingList();
//   //отримаємо масив id інгредієнтів у ShoppingList доданих зі сторінки поточного рецепта
//   const selectedIngredientIds = shoppingList.data
//     .filter(item => item.recipe === recipeId)
//     .map(item => item.id);
//   // У компонент Ingredient передаємо пропс IsSelected, який буде true, якщо id поточного інгредієнта є у масиві selectedIngredientIds
//   return (
//     <>
//       <h2>{recipe.data.ttl}</h2>
//       {recipe.data.ingredients.map(item => (
//         <Ingredient
//           key={item._id}
//           data={item}
//           isSelected={selectedIngredientIds.includes(item._id)}
//         />
//       ))}
//     </>
//   );
// }

//---------------------- Ingredient component------------------------------
// function Ingredient({ key, data, recepeId, isSelected }) {
//   const deleteShoppingList = useDeleteShoppingList();
//   const addShoppingList = useAddShoppingList();

//   function handleClick(e) {
//     // якщо чекбокс був обраний, робимо запит на видалення інгредієнта з ShoppingList
//     if (e.target.checked) {
//       deleteShoppingList.mutate({ id: data.id, recipe: recepeId });

//       // якщо чекбокс не був обраний, робимо запит на додавання інгредієнта до ShoppingList
//     } else {
//       addShoppingList.mutate(data);
//     }
//   }

//   //під час рендеру поки isLoading = true замість чекбоксу показуємо лоадер
//   //пропс isSelected задає стан чекбоксу: обраний чи ні
//   return (
//     <li key={key}>
//       <p>{data.thb}</p>
//       <p>{data.ttl}</p>
//       <p>{data.measure}</p>
//       {deleteShoppingList.isLoading || addShoppingList.isLoading ? (
//         <SmallLoader />
//       ) : (
//         <input type="checkbox" checked={isSelected} onClick={handleClick} />
//       )}
//     </li>
//   );
// }
//-----------SHOPPING LIST PAGE-----------
// function ShoppingList() {
//   //запит до ShoppingList
//   const shoppingList = useShoppingList();
//   //визиваємо функцію getSummaryList (Марина пишить функцію) і передаємо до неї дані з ShoppingList. Функція повертає: [{key: [{id, recipe}], ttl, thb, qty, unit}]
//   const summaryList = getSummaryList(shoppingList.data);

//   //передаємо у компонент об'єкт інгредієнта
//   return (
//     <>
//       {summaryList.map(item => (
//         <ShoppingItem key={item.key} data={item} />
//       ))}
//     </>
//   );
// }
// //---------------------- ShoppingItem component------------------------------

// function ShoppingItem({ data, key }) {
//   const deleteShoppingList = useDeleteShoppingList();

//   function handleClick(e) {
//     // відправляємо запит на видалення інгредієнта з ShoppingList
//     deleteShoppingList.mutate(key);
//   }

//   //під час рендеру поки isLoading = true замість кнопки Х показуємо лоадер
//   return (
//     <li key={key}>
//       <p>{data.thb}</p>
//       <p>{data.ttl}</p>
//       <p>{data.measure}</p>
//       {deleteShoppingList.isLoading ? (
//         <SmallLoader />
//       ) : (
//         <button type="button" onClick={handleClick}>
//           X
//         </button>
//       )}
//     </li>
//   );
// }
