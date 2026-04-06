'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//! ======================================
//! SLICE (NO MODIFICA EL ARRAY ORIGINAL)
//! ======================================

// let arr = ['a', 'b', 'c', 'd', 'e'];

//! slice(inicio, fin)
//? devuelve una copia de una parte del array

// console.log(arr.slice(2));
//? ['c', 'd', 'e'] → desde índice 2 hasta el final

// console.log(arr.slice(2, 4));
//? ['c', 'd'] → índice 2 hasta 4 (sin incluir 4)

// console.log(arr.slice(-2));
//? ['d', 'e'] → últimos 2 elementos

// console.log(arr.slice(-1));
//? ['e'] → último elemento

// console.log(arr.slice(1, -2));
//? ['b', 'c'] → desde índice 1 hasta antes de los últimos 2

// console.log(arr.slice());
//? copia completa del array

// console.log([...arr]);
//? otra forma de copiar (spread operator)

//! ======================================
//! SPLICE (MODIFICA EL ARRAY ORIGINAL)
//! ======================================

//! splice(inicio, cantidad)
//? elimina elementos directamente del array

// arr.splice(-1);
//? elimina el último elemento

// console.log(arr);

// arr.splice(1, 2);
//? elimina 2 elementos desde índice 1

// console.log(arr);

//! ======================================
//! REVERSE (MODIFICA EL ARRAY)
//! ======================================

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.reverse());
//? invierte el array original

// console.log(arr);
//? ya está modificado

//! ======================================
//! CONCAT (NO MODIFICA)
//! ======================================

//! une arrays

// const letter = arr.concat(arr2);

// console.log(letter);
//? nuevo array combinado

// console.log([...arr, ...arr2]);
//? alternativa con spread

//! ======================================
//! JOIN
//! ======================================

//! convierte array a string

// console.log(letter.join('-'));
//? une los elementos con '-'
//? ejemplo: 'e-d-c-b-a-a-b-c-d-e'

//! ======================================
//! IDEA CLAVE
//! ======================================

//! NO mutan:
//? slice, concat

//! SI mutan:
//? splice, reverse

//! join → convierte a string

//! ======================================
//! MÉTODO .at()
//! ======================================

// const arr = [23, 11, 64];

//! acceder a elementos por índice

// console.log(arr[0]);
// console.log(arr.at(0));

//? ambos hacen lo mismo → primer elemento (23)

//! ======================================
//! ACCEDER AL ÚLTIMO ELEMENTO
//! ======================================

//! forma clásica
// console.log(arr[arr.length - 1]);

//! usando slice
// console.log(arr.slice(-1)[0]);

//! usando .at()
// console.log(arr.at(-2));

//? .at() permite usar índices negativos
//? -1 → último
//? -2 → penúltimo

//! ======================================
//! .at() CON STRINGS
//! ======================================

// console.log('jonas'.at(0));
//? 'j' → primer carácter

// console.log('jonas'.at(-1));
//? 's' → último carácter

//! ======================================
//! IDEA CLAVE
//! ======================================

//! .at() funciona en arrays y strings
//? permite índices negativos directamente

//! equivalente:
/// arr.at(-1) === arr[arr.length - 1]

//! ======================================
//! CUÁNDO USAR .at()
//! ======================================

//? cuando necesitas:
//? - acceder al final fácilmente
//? - código más limpio y legible

//! especialmente útil:
// const last = arr.at(-1);

//! ======================================
//! FOR...OF VS FOREACH
//! ======================================

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//! ======================================
//! FOR...OF
//! ======================================

//? permite usar break y continue
//? más control del flujo

for (const [index, movement] of movements.entries()) {

  if (movement > 0) {
    console.log("You deposited " + movement + " " + index);
  } else {
    console.log("You withdrew " + Math.abs(movement) + " " + index);
  }
}

console.log('------------');



//! ======================================
//! FOREACH
//! ======================================

//? ejecuta una función por cada elemento
//? más declarativo

movements.forEach((movement, index, array) => {

  if (movement > 0) {
    console.log("You deposited " + movement + " " + index);
  } else {
    console.log("You withdrew " + Math.abs(movement) + " " + index);
  }
});

//? parámetros:
//? movement → valor
//? index → posición
//? array → array completo

//! ======================================
//! DIFERENCIAS CLAVE
//! ======================================

//! for...of:
//? ✔ puedes usar break / continue
//? ✔ más flexible
//? ✔ mejor para lógica compleja

//! forEach:
//? ✔ más limpio y moderno
//? ✔ ideal para operaciones simples
//? ❌ NO permite break ni continue



//! ======================================
//! EJEMPLO IMPORTANTE
//! ======================================

//? esto NO funciona en forEach ❌
/*
movements.forEach(mov => {
  if (mov < 0) break; // ERROR
});
*/

//? pero sí en for...of ✔
for (const mov of movements) {
  if (mov < 0) break;
}


//! ======================================
//! CUÁNDO USAR CADA UNO
//! ======================================

//! usa for...of:
//? cuando necesitas control (break, continue)
//? cuando la lógica es más compleja

//! usa forEach:
//? cuando solo quieres recorrer y hacer algo simple