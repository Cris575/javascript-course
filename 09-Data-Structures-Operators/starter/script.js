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


//! ======================================
//! SPREAD OPERATOR (...)
//! ======================================
//? Permite expandir elementos de un iterable (array, string, etc.)

//* Copiar y expandir arrays
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// Nota: ...arr expande los valores → [1,2,7,8,9]

//* Expandir elementos
// console.log(...newArr);
// Nota: imprime cada elemento separado

//* Agregar elementos a un array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// Nota: se puede añadir al inicio o final

//* Copiar un array
// const mainMenuCopy = [...restaurant.mainMenu];
// Nota: copia superficial (shallow copy)

//* Unir dos arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// Nota: muy usado para concatenar arrays

//? Iterables: arrays, strings, maps, sets (NO objetos)

// const str = 'jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// Nota: convierte string en array de letras


//! ======================================
//! FUNCIONES CON SPREAD
//! ======================================

// const ingredients = [
//   prompt("Ingrediente 1"),
//   prompt("Ingrediente 2"),
//   prompt("Ingrediente 3"),
// ];

// restaurant.orderPasta(...ingredients);
// Nota: spread separa el array en argumentos


//! ======================================
//! SPREAD EN OBJETOS
//! ======================================

//* Crear nuevo objeto copiando propiedades
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Guiseppe',
// };

// Nota: spread copia propiedades del objeto

//* Copiar objeto
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Roma';
// Nota: también es copia superficial


//! ======================================
//! DESTRUCTURING DE OBJETOS
//! ======================================
//? Permite extraer propiedades fácilmente

// const { name, openingHours, categories } = restaurant;
// Nota: crea variables con esos nombres

//* Renombrar variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// Nota: name → restaurantName

//* Valores por defecto
// const { menu = [], starterMenu: starter = {} } = restaurant;
// Nota: se usan si la propiedad no existe


//! ======================================
//! MUTACIÓN DE VARIABLES
//! ======================================

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// Nota: se usan paréntesis para evitar error de sintaxis


//! ======================================
//! DESTRUCTURING ANIDADO
//! ======================================

// const {
//   fri: { open: o, close: c },
// } = openingHours;

// Nota: extrae propiedades dentro de objetos anidados


//! ======================================
//! ARRAY DESTRUCTURING
//! ======================================

// const arr = [2, 3, 4];
// const [x, y, z] = arr;

// Nota: asigna cada posición a una variable

//* Saltar elementos
// let [main, , secondary] = restaurant.categories;
// Nota: la coma salta un elemento


//! ======================================
//! INTERCAMBIAR VARIABLES
//! ======================================

// [main, secondary] = [secondary, main];
// Nota: forma moderna de swap sin variable temporal


//! ======================================
//! MÚLTIPLES VALORES DE RETORNO
//! ======================================

// const [starter, mainCourse] = restaurant.order(2, 0);
// Nota: útil cuando una función devuelve un array


//! ======================================
//! DESTRUCTURING ANIDADO EN ARRAYS
//! ======================================

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// const [i, j, [k, l]] = nested;

// Nota: permite acceder a arrays dentro de arrays


//! ======================================
//! VALORES POR DEFECTO
//! ======================================

// const [p, q, r = 0] = [8, 9];
// console.log(p, q, r);

// Nota: si no existe valor → usa el default