export const user = {
  id: '1',
  name: 'Olena',
  email: 'olena@mail.com',
  avatar: '',
};

export const statistics = {
  days: 100,
  recipes: 10,
  favorites: 1,
  shoppingLists: 1,
};

export const categories = [
  { id: '1', name: 'Beef' },
  { id: '3', name: 'Breakfast' },
  { id: '4', name: 'Chicken' },
  { id: '5', name: 'Dessert' },
  { id: '6', name: 'Goat' },
  { id: '7', name: 'Lamb' },
  { id: '8', name: 'Miscellaneous' },
  { id: '9', name: 'Pasta' },
  { id: '10', name: 'Pork' },
  { id: '11', name: 'Seafood' },
  { id: '12', name: 'Side' },
  { id: '13', name: 'Starter' },
  { id: '14', name: 'Vegan' },
  { id: '15', name: 'Vegetarian' },
];

export const ingredients = [
  {
    id: '1',
    name: 'Chicken',
    image:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/rw8pn3541bmukb8d3mio.png',
  },
  {
    id: '2',
    name: 'Salmon',
    image:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/bwzvxyjxozyankmd6ky8.png',
  },
  {
    id: '3',
    name: 'Beef',
    image:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
  },
  {
    id: '4',
    name: 'Apple Cider Vinegar',
    image:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
  },
  {
    id: '5',
    name: 'Asparagus',
    image:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
  },
];

export const recipes = [
  {
    id: '1',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '2',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '3',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '4',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '5',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '6',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '7',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '8',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '9',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '10',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '11',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '12',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '13',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '14',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '15',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
  {
    id: '16',
    title: 'Spaghetti Bolognese',
    image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    about:
      'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
    category: 'Beef',
    cookingTime: '45 min',
    preparation:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
    ingredients: [
      {
        id: '3',
        name: 'Beef',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
        quantity: 100,
        unit: 'g',
      },
      {
        id: '4',
        name: 'Apple Cider Vinegar',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
        quantity: 200,
        unit: 'g',
      },
      {
        id: '5',
        name: 'Asparagus',
        image:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
        quantity: 300,
        unit: 'g',
      },
    ],
  },
];

export const shoppingList = [
  {
    id: '1',
    name: 'Beef',
    image:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564124/zzxbvvvye3pnooygfdgg.png',
    quantity: 100,
    unit: 'g',
  },
  {
    id: '2',
    name: 'Apple Cider Vinegar',
    image:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/buzhzk4ocvtrmqflfvr7.png',
    quantity: 200,
    unit: 'g',
  },
  {
    id: '3',
    name: 'Asparagus',
    image:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564215/qbfhenmhqflicidxyk1s.png',
    quantity: 300,
    unit: 'g',
  },
];
