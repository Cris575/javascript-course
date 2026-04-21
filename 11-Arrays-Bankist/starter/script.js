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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1} ${type}
      </div>
      <div class="movements__value">${mov} €</div>
    </div>
    `;

    //! ======================================
    //! insertAdjacentHTML()
    //! ======================================

    //! inserta HTML en el DOM sin reemplazar el contenido existente

    containerMovements.insertAdjacentHTML('afterbegin', html);

    //? containerMovements → elemento del DOM
    //? html → string con HTML que quieres insertar

    //! ======================================
    //! POSICIONES POSIBLES
    //! ======================================

    //? 'beforebegin' → antes del elemento
    //? 'afterbegin'  → dentro, al inicio
    //? 'beforeend'   → dentro, al final
  });
};

const calcDisplaySummary = function (movements, interestRate) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes} €`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest} €`;
};

// calcDisplaySummary(account1.movements);

const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .split(' ')
      .map(value => value[0])
      .join('')
      .toUpperCase();
  });
};

createUserNames(accounts);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = acc.balance + ' €';
};

// calcPrintBalance(account1.movements);
// console.log(accounts);

// EVENT HANDLER
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value,
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcPrintBalance(acc);
  //Display summary
  calcDisplaySummary(acc.movements, acc.interestRate);
};

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value,
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // ADD movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) == currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName,
    );
    console.log(index);

    // Delete accpunt
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//! ======================================
//! FOR...OF
//! ======================================

//? permite usar break y continue
//? más control del flujo

// for (const [index, movement] of movements.entries()) {

//   if (movement > 0) {
//     console.log("You deposited " + movement + " " + index);
//   } else {
//     console.log("You withdrew " + Math.abs(movement) + " " + index);
//   }
// }

// console.log('------------');

//! ======================================
//! FOREACH
//! ======================================

//? ejecuta una función por cada elemento
//? más declarativo

// movements.forEach((movement, index, array) => {

//   if (movement > 0) {
//     console.log("You deposited " + movement + " " + index);
//   } else {
//     console.log("You withdrew " + Math.abs(movement) + " " + index);
//   }
// });

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
// for (const mov of movements) {
//   if (mov < 0) break;
// }

//! ======================================
//! CUÁNDO USAR CADA UNO
//! ======================================

//! usa for...of:
//? cuando necesitas control (break, continue)
//? cuando la lógica es más compleja

//! usa forEach:
//? cuando solo quieres recorrer y hacer algo simple

//! ======================================
//! MAP
//! ======================================

//? Map = colección de pares clave → valor

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //! forEach en Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//? parámetros:
//? value → valor
//? key → clave
//? map → el Map completo

//? orden IMPORTANTE:
//? (value, key) → diferente a arrays

//! ======================================
//! SET
//! ======================================

//? Set = colección de valores únicos (sin duplicados)

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// console.log(currenciesUnique);

//? resultado:
//? Set {'USD', 'GBP', 'EUR'}

//! forEach en Set
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${_}: ${value}`);
// });

//? en Set NO hay keys
//? por eso:
//? value === key

//? "_" se usa para indicar:
//? "no me interesa este parámetro"

//? equivalente real:
//? (value, value, set)

//! ======================================
//! DIFERENCIAS CLAVE
//! ======================================

//! Map:
//? clave → valor
//? tiene keys y values diferentes

//! Set:
//? solo valores únicos
//? no hay claves reales

//! ======================================
//! IDEA CLAVE
//! ======================================

//! Map → como un objeto mejorado
//! Set → para eliminar duplicados

//! ======================================
//! MAP()
//! ======================================

//? map() recorre un array
//? y crea un NUEVO array transformando cada elemento

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

//! ======================================
//! EJEMPLO: CONVERTIR MONEDA
//! ======================================

//? multiplica cada movimiento por el tipo de cambio

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

//? movements NO cambia
//? map devuelve un nuevo array

//! ======================================
//! EQUIVALENTE CON FOR...OF
//! ======================================

//? map hace esto internamente

// const movementsUSDfor = [];

// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }

// console.log(movementsUSDfor);

//! ======================================
//! MAP PARA TRANSFORMAR TEXTO
//! ======================================

//? crear descripción para cada movimiento

// const movementDescriptions = movements.map(
//   (mov, index, arr) =>
//     `Movement ${index + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`,
// );

// console.log(movementDescriptions);

//? mov → valor actual
//? index → índice actual
//? arr → array completo

//! ======================================
//! DIFERENCIA CON FOREACH
//! ======================================

//! forEach:
//? solo recorre

//! map:
//? recorre y devuelve nuevo array

//! ======================================
//! IDEA CLAVE
//! ======================================

//! map = transformar datos

//? 1 valor entra
//? 1 nuevo valor sale

//? misma cantidad de elementos,
//? diferente contenido

//! ======================================
//! FILTER()
//! ======================================

//? filter() recorre un array
//? y devuelve un NUEVO array
//? solo con los elementos que cumplan la condición

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//! ======================================
//! FILTRAR DEPÓSITOS
//! ======================================

//? conservar solo movimientos positivos

// const deposit = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });

//? parámetros:
//? mov → valor actual
//? i → índice actual
//? arr → array completo

//? si retorna true → se conserva
//? si retorna false → se elimina

// console.log(deposit);

//? resultado:
//? [200, 450, 3000, 70, 1300]

//! ======================================
//! FILTRAR RETIROS
//! ======================================

//? conservar solo movimientos negativos

// const withdrawal = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawal);

//? resultado:
//? [-400, -650, -130]

//! ======================================
//! CÓMO FUNCIONA INTERNAMENTE
//! ======================================

//? filter hace algo similar a esto:

// const depositsFor = [];

// for (const mov of movements) {
//   if (mov > 0) depositsFor.push(mov);
// }

//! ======================================
//! IDEA CLAVE
//! ======================================

//! filter = seleccionar elementos por condición

//? true → entra al nuevo array
//? false → se ignora

//! ======================================
//! DIFERENCIA CON MAP
//! ======================================

//! map:
//? transforma todos los elementos

//! filter:
//? elimina algunos elementos

// console.log(movements);
//! ======================================
//! REDUCE()
//! ======================================

//? reduce() recorre el array
//? y reduce todos los elementos a un solo valor

//! sintaxis:
//? array.reduce((acc, cur, i, arr) => {}, valorInicial)

//! ======================================
//! SUMAR TODOS LOS ELEMENTOS
//! ======================================

//? acc = acumulador
//? cur = valor actual

// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);

// console.log(balance);

//? acc inicia en 0
//? cada iteración suma el valor actual

//! ======================================
//! VISUALIZACIÓN DEL FLUJO
//! ======================================

//? Iteración 1:
//? acc = 0
//? cur = 200
//? resultado = 200

//? Iteración 2:
//? acc = 200
//? cur = 450
//? resultado = 650

//? Iteración 3:
//? acc = 650
//? cur = -400
//? resultado = 250

//? ... hasta terminar

//! ======================================
//! EQUIVALENTE CON FOR...OF
//! ======================================

//? reduce hace algo similar a esto:

// let balance2 = 0;

// for (const element of movements) {
//   balance2 += element;
// }

// console.log(balance2);

//! ======================================
//! ENCONTRAR VALOR MÁXIMO
//! ======================================

//? reduce también sirve para comparar valores

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(max);

//? acc guarda temporalmente el número mayor encontrado

//! ======================================
//! IDEA CLAVE
//! ======================================

//! reduce = combinar todo en 1 valor

//? ejemplos comunes:
//? suma total
//? promedio
//? máximo / mínimo
//? construir objetos / arrays

//! ======================================
//! DIFERENCIA CON MAP/FILTER
//! ======================================

//! map → transforma cada elemento
//! filter → selecciona algunos
//! reduce → combina todos en uno

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = ages => {
//   const avgAge = ages
//     .map(age => {
//       if (age <= 2) return 2 * age;
//       else return 16 + age * 4;
//     })
//     .filter(age => age >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   console.log(avgAge);
//   // return avgAge
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // PIPELINE
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov, i, arr) => {
//     console.log(arr);
//     return (acc + mov, 0);
//   });

// - - - >

// Find

//! ======================================
//! FIND()
//! ======================================

//? find() recorre el array
//? y devuelve el PRIMER elemento
//? que cumpla la condición

//! si no encuentra nada:
//? devuelve undefined

//! ======================================
//! EJEMPLO: PRIMER RETIRO
//! ======================================

// const firstWithdrawal = movements.find(mov => mov < 0);

//? busca el primer número negativo

// console.log(firstWithdrawal);

//? resultado:
//? -400

//! ======================================
//! EJEMPLO: BUSCAR OBJETO
//! ======================================

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);

//? devuelve el primer objeto
//? cuyo owner coincida

//! ======================================
//! EQUIVALENTE CON FOR...OF
//! ======================================

//? find hace algo similar a esto:

// for (const user of accounts) {
//   if (user.owner === 'Jessica Davis') console.log(user);
// }

//? PERO find se detiene apenas encuentra uno

//! ======================================
//! IDEA CLAVE
//! ======================================

//! find = encontrar UN elemento

//? devuelve:
//? el elemento completo

//? NO devuelve:
//? true / false

//! ======================================
//! DIFERENCIA CON FILTER
//! ======================================

//! filter:
//? devuelve TODOS los que cumplan
//? en un nuevo array

//! find:
//? devuelve SOLO el primero
//? como valor individual

//! ======================================
//! FINDLAST()
//! ======================================

//? findLast() recorre el array desde el FINAL
//? devuelve el PRIMER elemento que cumpla la condición

// console.log(movements);

// const lastWithdrawal = movements.findLast(mov => mov < 0);

// console.log(lastWithdrawal);

//? busca el último número negativo
//? resultado:
//? -130

//! ======================================
//! FINDLASTINDEX()
//! ======================================

//? devuelve el índice del último elemento que cumpla

// const lastestLargeMovemnentIndex = movements.findLastIndex(
//   mov => Math.abs(mov) > 1000,
// );

// console.log(lastestLargeMovemnentIndex);

//? busca el último movimiento mayor a 1000 (en valor absoluto)

//! ======================================
//! USO DEL ÍNDICE
//! ======================================

// console.log(
//   `Your latest large movement ${
//     movements.length - lastestLargeMovemnentIndex
//   } movements ago`,
// );

//? calcula hace cuántos movimientos ocurrió
//? longitud - índice = distancia desde el final

//! ======================================
//! IDEA CLAVE
//! ======================================

//! find → busca desde el inicio
//! findLast → busca desde el final

//! findIndex → índice desde inicio
//! findLastIndex → índice desde final

//! ======================================
//! INCLUDES()
//! ======================================

//? verifica si un valor existe (igualdad exacta)

// console.log(movements.includes(-130));

//? true si existe, false si no

//! ======================================
//! SOME()
//! ======================================

//? some() verifica si AL MENOS UNO cumple la condición

// console.log(movements.some(mov => mov === -130));
//? true si encuentra ese valor

// console.log(movements.some((mov, i) => mov > 5000));
//? true si algún valor es mayor a 5000

//! ======================================
//! EVERY()
//! ======================================

//? every() verifica si TODOS cumplen la condición

// console.log(movements.every(mov => mov > 0));
//? false porque hay negativos

// console.log(account4.movements.every(mov => mov > 0));
//? true solo si todos son positivos

//! ======================================
//! CALLBACK REUTILIZABLE
//! ======================================

//? función separada para reutilizar lógica

// const deposit = mov => mov > 0;

//! usando la misma función en varios métodos

// console.log(movements.some(deposit));
//? true si hay al menos un depósito

// console.log(movements.every(deposit));
//? true solo si TODOS son depósitos

// console.log(movements.filter(deposit));
//? devuelve todos los depósitos

//! ======================================
//! IDEA CLAVE
//! ======================================

//! includes → busca valor exacto
//! some → al menos uno cumple
//! every → todos cumplen

//! ======================================
//! DIFERENCIAS IMPORTANTES
//! ======================================

//? includes:
//? compara con ===

//? some / every:
//? usan condiciones (funciones)

//! ======================================
//! REGLA MENTAL RÁPIDA
//! ======================================

//! some → "¿hay alguno?"
//! every → "¿todos?"

//! ======================================
//! FLAT()
//! ======================================

//? flat() "aplana" arrays anidados
//? convierte arrays dentro de arrays en uno solo

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// console.log(arr.flat());

//? resultado:
//? [1, 2, 3, 4, 5, 6, 7, 8]

//? por defecto solo aplana 1 nivel

//! ======================================
//! FLAT CON PROFUNDIDAD
//! ======================================

// const arrDeep = [[[1, 2], 3], [[4, 5, 6]], 7, 8];

// console.log(arrDeep.flat(2));

//? flat(2) → aplana 2 niveles
//? resultado:
//? [1, 2, 3, 4, 5, 6, 7, 8]

//! ======================================
//! USO REAL: EXTRAER DATOS
//! ======================================

//? obtener todos los movimientos de todas las cuentas

// const accountMovemnts = accounts.map(mov => mov.movements);

// console.log(accountMovemnts);

//? resultado:
//? [[...], [...], [...]]

//! aplanar todos los movimientos

// const allMovements = accountMovemnts.flat();

// console.log(allMovements);

//? ahora es un solo array con todos los movimientos

//! sumar todos los movimientos

// console.log(allMovements.reduce((pre, nex) => pre + nex, 0));

//! ======================================
//! FLATMAP()
//! ======================================

//? flatMap = map + flat(1)
//? transforma y aplana en un solo paso

// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overalBalance2);

//? hace lo mismo que:
//? accounts.map(...).flat()
//? pero más eficiente y limpio

//! ======================================
//! IDEA CLAVE
//! ======================================

//! flat → aplana arrays
//! flatMap → map + flat(1)

//! ======================================
//! DIFERENCIA IMPORTANTE
//! ======================================

//? flat:
//? solo aplana

//? flatMap:
//? transforma + aplana (1 nivel)

//! ======================================
//! REGLA MENTAL
//! ======================================

//! flat → quitar niveles
//! flatMap → transformar + quitar nivel

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

const huskyWeight =
  breeds.reduce((acc, crr) => crr?.averageWeight + acc, 0) / breeds.length;
console.log(huskyWeight);

const dogBothActivities = breeds
  .filter(
    breed =>
      breed.activities.includes('running') &&
      breed.activities.includes('fetch'),
  )
  .at(0).breed;

console.log(dogBothActivities);

const allActivities = breeds.flatMap(act => act.activities);
console.log(allActivities);

const uniqueActivities = new Set(allActivities);
console.log(uniqueActivities);

let swimmingAdjacent = breeds
  .filter(breed => breed.activities.includes('swimming'))
  .flatMap(act => act.activities);

swimmingAdjacent = new Set(swimmingAdjacent);
console.log(swimmingAdjacent);

console.log(breeds.every(breed => breed.averageWeight >= 10));
console.log(breeds.some(breed => breed.activities.length >= 3));

//-------------
console.log(Math.max(...breeds.map(dog => dog.averageWeight)));
