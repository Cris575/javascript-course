'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(+inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//! ======================================
//! NÚMEROS EN JAVASCRIPT
//! ======================================

//? todos los números en JS son "Number"
//? no existe diferencia entre int y float

// console.log(23 === 23.0);

//? true
//? ambos son el mismo tipo de dato

//! ======================================
//! SISTEMA BINARIO
//! ======================================

//? las computadoras trabajan en binario
//? base 2 → 0 y 1

// Base 10 → 0-9
// Binary (base 2) → 0-1

//! ======================================
//! PROBLEMAS DE PRECISIÓN
//! ======================================

//? algunos decimales no pueden representarse exactamente en binario

// console.log(0.1 + 0.2);

//? 0.30000000000000004

// console.log(0.1 + 0.2 === 0.3);

//? false

//! ocurre por precisión de coma flotante (floating point)

//! ======================================
//! CONVERSIÓN A NÚMERO
//! ======================================

//? Number() convierte string a número

// console.log(Number('23'));

//? operador + también convierte

// console.log(+'23');

//! ======================================
//! PARSEINT()
//! ======================================

//? extrae enteros desde strings

// console.log(Number.parseInt('30px', 10));

//? 30

// console.log(Number.parseInt('e23', 10));

//? NaN
//? no empieza con número

//! ======================================
//! PARSEFLOAT()
//! ======================================

//? extrae números decimales

// console.log(Number.parseInt(' 2.5rem '));

//? 2

// console.log(Number.parseFloat(' 2.5rem '));

//? 2.5

//? parseFloat global también existe
// console.log(parseFloat(' 2.5rem '));

//! ======================================
//! NUMBER.ISNAN()
//! ======================================

//? verifica si el valor es NaN

// console.log(Number.isNaN(20));
//? false

// console.log(Number.isNaN('20'));
//? false

// console.log(Number.isNaN(+'20x'));
//? true

// console.log(Number.isNaN(23 / 0));
//? false → Infinity NO es NaN

// console.log(Number.isNaN(NaN));
//? true

//! ======================================
//! NUMBER.ISFINITE()
//! ======================================

//? verifica si es un número finito REAL

// console.log(Number.isFinite(20));
//? true

// console.log(Number.isFinite('20'));
//? false → string

// console.log(Number.isFinite(+'20x'));
//? false → NaN

// console.log(Number.isFinite(Infinity));
//? false

// console.log(Number.isFinite(23 / 0));
//? false → Infinity

//! ======================================
//! NUMBER.ISINTEGER()
//! ======================================

//? verifica si es entero

// console.log(Number.isInteger(2));
//? true

// console.log(Number.isInteger(23.0));
//? true → sigue siendo entero

// console.log(Number.isInteger(23 / 0));
//? false → Infinity

//! ======================================
//! IDEA CLAVE
//! ======================================

//! JS usa IEEE 754 para números
//? todos son floating point

//! ======================================
//! DIFERENCIAS IMPORTANTES
//! ======================================

//! isNaN()
//? verifica NaN

//! isFinite()
//? verifica números válidos y finitos

//! isInteger()
//? verifica enteros
//! ======================================
//! RAÍZ CUADRADA Y POTENCIAS
//! ======================================

// console.log(Math.sqrt(25));

//? raíz cuadrada → 5

// console.log(25 ** (1 / 2));

//? otra forma de sacar raíz cuadrada

// console.log(8 ** (1 / 3));

//? raíz cúbica → 2

//! ======================================
//! MATH.MAX()
//! ======================================

//? devuelve el número más grande

// console.log(Math.max(5, 18, 23, 11, 2));

//? 23

// console.log(Math.max(5, 18, '23', 11, 2));

//? convierte strings numéricos automáticamente → 23

// console.log(Math.max(5, 18, '23px', 11, 2));

//? NaN → no puede convertir "23px"

//! ======================================
//! MATH.MIN()
//! ======================================

//? devuelve el número más pequeño

// console.log(Math.min(5, 18, 23, 11, 2));

//! ======================================
//! USO DE PI
//! ======================================

//? fórmula del área del círculo
//? π * r²

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

//? parseFloat extrae el 10

//! ======================================
//! RANDOM()
//! ======================================

//? Math.random()
//? genera número entre 0 y 1 (sin incluir 1)

// console.log(Math.trunc(Math.random() * 6) + 1);

//? número entre 1 y 6

//! ======================================
//! RANDOM ENTRE MIN Y MAX
//! ======================================

// const randomInt = (min, max) =>
// Math.floor(Math.random() * (max - min + 1) + min);

// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

//? fórmula típica para rangos aleatorios

//! ======================================
//! REDONDEO DE ENTEROS
//! ======================================

//! Math.round()
//? redondea al entero más cercano

// console.log(Math.round(23.3));
//? 23

// console.log(Math.round(23.9));
//? 24

//! ======================================
//! MATH.CEIL()
//! ======================================

//? redondea hacia ARRIBA

// console.log(Math.ceil(23.3));
//? 24

// console.log(Math.ceil(23.9));
//? 24

//! ======================================
//! MATH.FLOOR()
//! ======================================

//? redondea hacia ABAJO

// console.log(Math.floor(23.3));
//? 23

// console.log(Math.floor('23.9'));
//? convierte string y redondea → 23

//! ======================================
//! MATH.TRUNC()
//! ======================================

//? elimina decimales
//? NO redondea

// console.log(Math.trunc(23.3));
//? 23

//! ======================================
//! DIFERENCIA NEGATIVOS
//! ======================================

// console.log(Math.trunc(-23.3));
//? -23

// console.log(Math.floor(-23.3));
//? -24

//! floor siempre baja más
//! trunc solo elimina decimales

//! ======================================
//! TOFIXED()
//! ======================================

//? redondea decimales
//? devuelve STRING

// console.log((2.7).toFixed(0));
//? "3"

// console.log((2.7).toFixed(3));
//? "2.700"

// console.log((2.345).toFixed(2));
//? "2.35"

//! ======================================
//! CONVERTIR TOFIXED A NUMBER
//! ======================================

//? + convierte string a número

// console.log(+(2.345).toFixed(2));

//? 2.35

//! ======================================
//! IDEA CLAVE
//! ======================================

//! round → más cercano
//! ceil → arriba
//! floor → abajo
//! trunc → cortar decimales

//! ======================================
//! OPERADOR RESTO (%)
//! ======================================

//? devuelve el RESTO de una división

console.log(5 % 2);

//? 1

console.log(5 / 2);

//? 2.5
//? 5 = 2 * 2 + 1

console.log(8 % 3);

//? 2

console.log(8 / 3);

//? 2.666...
//? 8 = 2 * 3 + 2

console.log(6 % 2);

//? 0 → divisible exactamente

console.log(6 / 2);

//? 3

console.log(7 % 2);

//? 1 → sobra 1

console.log(7 / 2);

//? 3.5

//! ======================================
//! DETECTAR NÚMEROS PARES
//! ======================================

//? si el resto es 0 → es par

const isEven = n => n % 2 === 0;

console.log(isEven(8));
//? true

console.log(isEven(23));
//? false

console.log(isEven(514));
//? true

//! ======================================
//! USO REAL DEL MODULO
//! ======================================

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    //! filas pares
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';

    //! múltiplos de 3
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

//? útil para patrones repetitivos

//! ======================================
//! NUMERIC SEPARATORS (_)
//! ======================================

//? "_" mejora legibilidad en números grandes

const diameter = 287_460_000_000;

console.log(diameter);

//? mismo valor:
//? 287460000000

const priceCents = 345_99;

console.log(priceCents);

//? 34599
//? NO representa decimal

const tranferFee1 = 15_00;
//? 1500

const tranferFee2 = 1_500;
//? 1500

//! ======================================
//! NO FUNCIONA EN STRINGS
//! ======================================

console.log(Number('20000'));

//? 20000

console.log(Number.parseInt('20_000'));

//? 20
//? parseInt se detiene en "_"

//! ======================================
//! IDEA CLAVE
//! ======================================

//! % → resto de división
//! _ → solo separador visual

//! ======================================
//! REGLA MENTAL
//! ======================================

//? n % 2 === 0 → par
//? n % 2 !== 0 → impar
