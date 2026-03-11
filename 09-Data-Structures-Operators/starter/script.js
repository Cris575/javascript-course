'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (statedIndex, mainIndex) {
    return [this.starterMenu[statedIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ startedIndex = 0, mainIndex = 1, time, addess }) {
    console.log(startedIndex, mainIndex, time, addess);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
};

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Copiar array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//Unir dos arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'jonas';
// const letter = [...str, '', 'S.'];
// console.log(letter);
// console.log(...str);
// console.log(`${...str}}`);

// const ingredients = [prompt("Let's"), prompt("Let's"), prompt("Let's")];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objetos

// const newRestaurant = { founderIn: 1998, ...restaurant, founder: 'Guiseppe' };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Roma';

// console.log(restaurantCopy);

// restaurant.orderDelivery({
//   time: '22:30',
//   addess: 'Zamora',
//   mainIndex: 2,
//   startedIndex: 1,
// });

// Valores por defecto
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: started = {} } = restaurant;
// console.log(menu, started);

//Mutacion de variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// a = obj.a;
// b = obj.b;
// console.log(a, b);

//Anidamiento de objetos
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//Cambio de variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

//Recivir 2 valores de retorno
// const [started, main] = restaurant.order(2, 0);
// console.log(started, main);

//Destructuracion Anidada
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(nested);
// const [i, j, [k, l]] = nested;
// console.log(i, j, k, l);

// const [p, q, r = 0] = [8, 9];
// console.log(p, q, r);
