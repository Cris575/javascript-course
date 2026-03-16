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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

const rest1 = {
  name: 'Carpi',
  numGuest: 20,
};

const rest2 = {
  name: 'La Pizza ',
  owner: 'Giovanni Rossi',
};

//! ======================================
//! OR ASSIGNMENT OPERATOR (||=)
//! ======================================

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

//! ||= asigna el valor SOLO si el actual es falsy
//? falsy: 0, '', null, undefined, false, NaN

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//? Si numGuest es falsy → se convierte en 10
//? Si numGuest tiene valor truthy → se mantiene

//! ======================================
//! NULLISH ASSIGNMENT OPERATOR (??=)
//! ======================================

//! ??= asigna SOLO si el valor es null o undefined
//? A diferencia de ||=, aquí 0 o '' SI se respetan

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

//? Si numGuest es null o undefined → se convierte en 10
//? Si tiene valor (incluso 0) → se mantiene

//! ======================================
//! AND ASSIGNMENT OPERATOR (&&=)
//! ======================================

//! &&= asigna el valor SOLO si el actual es truthy

rest1.owner &&= '<NONUMOUS>';
rest2.owner &&= '<NONUMOUS>';

//? Si owner existe (truthy) → se reemplaza por '<NONUMOUS>'
//? Si owner es falsy → no cambia

//! ======================================
//! NULLISH COALESCING OPERATOR (??)
//! ======================================

// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//! ?? devuelve el primer valor que NO sea null o undefined
// const guestCorrect = restaurant.numGuests ?? 10;
//? Si numGuests es null o undefined → usa 10
//? Si numGuests tiene valor (incluso 0) → usa ese valor

//! ======================================
//! SHORT CIRCUITING (||)
//! ======================================

//! OR devuelve el primer valor truthy
// console.log(3 || 'Cris');

//? '' es falsy → devuelve el siguiente valor
// console.log('' || 'Cris');

//? true es truthy → se detiene ahí
// console.log(true || 0);

//? ambos falsy → devuelve el último
// console.log(undefined || null);

//? recorre hasta encontrar el primer truthy
// console.log(false || false || true);

//? 'Hello' es el primer truthy
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//! ======================================
//! VALORES POR DEFECTO
//! ======================================

// restaurant.numGuests = 0;

//? operador ternario
//? si numGuests es truthy usa ese valor
//? si no usa 10
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

//? OR usado como valor por defecto
//? si numGuests es falsy usa 10
// const guests2 = restaurant.numGuests || 10;

// console.log(guests2);

//! ======================================
//! SHORT CIRCUITING (&&)
//! ======================================

//! AND devuelve el primer valor falsy
// console.log(0 && 'Cris');

//? ambos truthy → devuelve el último
// console.log(7 && 'Cris');

//? null es el primer falsy → se detiene ahí
// console.log('Kello' && 23 && null && 'Cris');

//! ======================================
//! EJECUCIÓN CONDICIONAL DE FUNCIONES
//! ======================================

//? forma clásica de comprobar si existe la función
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Peperoni', 'cheese');
// }

//? forma corta usando AND
//? si orderPizza existe se ejecuta
// restaurant.orderPizza && restaurant.orderPizza('Peperoni', 'cheese');

//! ======================================
//! REST PATTERN (...)
//! ======================================

//? SPREAD: cuando ... está en el lado DERECHO del =
// const arr = [1, 2, ...[3, 4]];
//? Expande los valores → [1,2,3,4]

//? REST: cuando ... está en el lado IZQUIERDO del =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
//? Recoge los elementos restantes en un array
//console.log(a,b,others)

//! El REST siempre debe ser el último elemento
// const [pizza, , risotto, ...otherFoood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

//? pizza = primer elemento
//? risotto = tercer elemento
//? otherFood = resto de elementos

//console.log(pizza, risotto, otherFoood);

//! ======================================
//! REST EN OBJETOS
//! ======================================

//? Extrae una propiedad y agrupa las restantes
// const { sat, ...weekdays } = restaurant.openingHours;

//? sat = horario del sábado
//? weekdays = resto de días

//console.log(weekdays)

//! ======================================
//! REST EN FUNCIONES
//! ======================================

//? Permite recibir cantidad variable de argumentos

// const add = function (...numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   console.log(sum);
// };

//? numbers se convierte en un array

//! ======================================
//! SPREAD OPERATOR (...)
//! ======================================

//? Permite EXPANDIR elementos de un iterable
//? (arrays, strings, maps, sets)

//! ======================================
//! SPREAD CON ARRAYS
//! ======================================

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];

//? ...arr expande los valores → [1,2,7,8,9]

//! Expandir elementos individualmente
// console.log(...newArr);

//? imprime 1 2 7 8 9

//! Agregar elementos a un array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];

//? agrega elemento sin modificar el original

//! Copiar un array
// const mainMenuCopy = [...restaurant.mainMenu];

//? crea una copia superficial (shallow copy)

//! Unir arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//? muy usado para concatenar arrays

//! ======================================
//! SPREAD CON STRINGS
//! ======================================

// const str = 'jonas';
// const letters = [...str, ' ', 'S.'];

//? convierte string en array de caracteres

// console.log(letters);

//! ======================================
//! FUNCIONES CON SPREAD
//! ======================================

//? Spread permite enviar un array como argumentos

// const ingredients = [
//   prompt("Ingrediente 1"),
//   prompt("Ingrediente 2"),
//   prompt("Ingrediente 3"),
// ];

// restaurant.orderPasta(...ingredients);

//? ...ingredients separa el array en valores individuales

//! ======================================
//! SPREAD EN OBJETOS
//! ======================================

//? Permite copiar propiedades de objetos

// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Guiseppe',
// };

//? copia todas las propiedades del objeto restaurant

//! Copiar objeto
// const restaurantCopy = { ...restaurant };

// restaurantCopy.name = 'Roma';

//? spread en objetos también es copia superficial

//! ======================================
//! DESTRUCTURING DE OBJETOS
//! ======================================

//? Permite extraer propiedades de un objeto fácilmente

// const { name, openingHours, categories } = restaurant;

//? crea variables con esos nombres

//! Renombrar variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

//? name → restaurantName

//! Valores por defecto
// const { menu = [], starterMenu: starter = {} } = restaurant;

//? si la propiedad no existe usa el valor default

//! ======================================
//! MUTACIÓN DE VARIABLES
//! ======================================

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

//? paréntesis necesarios para evitar que JS lo interprete como bloque

//! ======================================
//! DESTRUCTURING ANIDADO
//! ======================================

// const {
//   fri: { open: o, close: c },
// } = openingHours;

//? extrae propiedades dentro de objetos anidados

//! ======================================
//! ARRAY DESTRUCTURING
//! ======================================

// const arr = [2, 3, 4];
// const [x, y, z] = arr;

//? asigna cada posición del array a una variable

//! Saltar elementos
// let [main, , secondary] = restaurant.categories;

//? la coma salta un elemento

//! ======================================
//! INTERCAMBIAR VARIABLES
//! ======================================

// [main, secondary] = [secondary, main];

//? forma moderna de intercambiar valores

//! ======================================
//! MÚLTIPLES VALORES DE RETORNO
//! ======================================

// const [starter, mainCourse] = restaurant.order(2, 0);

//? útil cuando una función devuelve un array

//! ======================================
//! DESTRUCTURING ANIDADO EN ARRAYS
//! ======================================

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;

// const [i, j, [k, l]] = nested;

//? permite acceder a arrays dentro de arrays

//! ======================================
//! VALORES POR DEFECTO
//! ======================================

// const [p, q, r = 0] = [8, 9];

// console.log(p, q, r);

//? si no existe el valor usa el valor por defecto
