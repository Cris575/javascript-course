'use strict';

//! ======================================
//! FUNCIONES: PARÁMETROS POR DEFECTO
//! ======================================

//? Permiten asignar valores si no se pasan argumentos
//? Se evalúan de izquierda a derecha

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassagers = 1,
//   price = 199 * numPassagers,
// ) {
//   //! shorthand properties (nombre = valor)
//   const booking = {
//     flightNum,
//     numPassagers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

//? Casos:
// createBooking('LH123');
//? numPassagers = 1, price = 199

// createBooking('LH123', 2, 800);
//? todos definidos manualmente

// createBooking('LH123', 2);
//? price = 199 * 2

// createBooking('LH123', 5);
//? price = 199 * 5

// createBooking('LH123', undefined, 1000);
//? undefined activa el valor por defecto

//! ======================================
//! PRIMITIVOS VS OBJETOS (PASO DE VALORES)
//! ======================================

// const flight = 'LH234';

// const jonas = {
//   name: 'Jonas',
//   passport: 22034654654,
// };

//! Las funciones reciben:
//? primitivos → copia
//? objetos → referencia

// const checkIn = function (flightNum, passenger) {
//   //! NO afecta la variable original (copia)
//   flightNum = 'lh999';

//   //! SI modifica el objeto original
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 22034654654) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);

// console.log(flight);
//? sigue siendo 'LH234'

// console.log(jonas);
//? name cambió a 'Mr. Jonas'

//! ======================================
//! EFECTOS SECUNDARIOS EN OBJETOS
//! ======================================

//! modifica directamente el objeto original
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);

//? ahora el passport ya no coincide

// checkIn(flight, jonas);
//? dará "Wrong passport!"

// console.log(jonas);

//! ======================================
//! FUNCIONES DE PRIMERA CLASE
//! ======================================

//? En JavaScript las funciones son valores
//? Se pueden pasar, guardar y retornar

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFisrtWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

//? oneWord y upperFisrtWord son funciones normales
//? pero JS permite usarlas como valores

//! ======================================
//! FUNCIONES DE ORDEN SUPERIOR
//! ======================================

//? Una función de orden superior:
//? recibe funciones o retorna funciones

// const transformer = function (str, fn) {
//   console.log(`Original: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

//? transformer recibe una función (fn)

// transformer('Java is the ', upperFisrtWord);
//? pasa upperFisrtWord como callback

// transformer('Java is the ', oneWord);
//? pasa oneWord como callback

//! ======================================
//! CALLBACK FUNCTIONS
//! ======================================

//? callback = función pasada como argumento

// const hig5 = function () {
//   console.log('👍');
// };

//! eventos
// document.body.addEventListener('click', hig5);
//? hig5 se ejecuta cuando haces click

//! arrays
// ['Jonas', 'Martha', 'Adam'].forEach(hig5);
//? hig5 se ejecuta por cada elemento

//! ======================================
//! FUNCIONES QUE RETORNAN FUNCIONES
//! ======================================

//? también es función de orden superior

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//? greet retorna otra función

// const greeterHey = greet('Hey');
//? guarda la función retornada

// greeterHey('Jonas');
//? ejecuta la función interna

// greet('Hello')('Jonas');
//? ejecución inmediata

//! ======================================
//! VERSION CON ARROW FUNCTIONS
//! ======================================

//? forma más compacta

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonas');

//! ======================================
//! IDEA CLAVE
//! ======================================

//! Primera clase → funciones son valores
//! Orden superior → funciones que usan otras funciones

//? transformer → recibe función
//? greet → retorna función
//? hig5 → callback

//! ======================================
//! MÉTODOS CALL / APPLY
//! ======================================

//? Cuando extraemos un método de un objeto
//? se pierde el contexto (this)

// const lufthansa = {
//   airline: 'Lufthasa',
//   aitaCode: 'LH',
//   bookings: [],

//   //! método que usa this
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.aitaCode}${flightNum}`,
//     );

//     this.bookings.push({
//       flight: `${this.airline} flight ${this.aitaCode}${flightNum}`,
//       name,
//     });
//   },
// };

//? ejecución normal del método
// lufthansa.book(239, 'Jonas');
// lufthansa.book(635, 'Jonas Smith');

// console.log(lufthansa);

//! ======================================
//! REUTILIZAR MÉTODOS ENTRE OBJETOS
//! ======================================

//? otro objeto con estructura similar

// const eurowings = {
//   name: 'eurowings',
//   aitaCode: 'EW',
//   bookings: [],
// };

//? guardamos el método en una variable
//? aquí se pierde el contexto "this"

// const book = lufthansa.book;

//! ======================================
//! CALL METHOD
//! ======================================

//? call permite definir manualmente el this

// book.call(eurowings, 23, 'Sarah');

// console.log(eurowings);

//? ahora usamos lufthansa nuevamente

// book.call(lufthansa, 239, 'Mary Cooper');

// console.log(lufthansa);

//! ======================================
//! APPLY METHOD
//! ======================================

//? apply recibe los argumentos en un array

// const flightData = [583, 'Cooper'];

// book.apply(lufthansa, flightData);

//! ======================================
//! SPREAD (FORMA MODERNA)
//! ======================================

//? hoy se usa call + spread

// book.call(lufthansa, ...flightData);

//! ======================================
//! BIND METHOD
//! ======================================

// const lufthansa = {
//   airline: 'Lufthasa',
//   aitaCode: 'LH',
//   bookings: [],

//   //! Método para reservar vuelos
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.aitaCode}${flightNum}`,
//     );

//     this.bookings.push({
//       flight: `${this.airline} flight ${this.aitaCode}${flightNum}`,
//       name,
//     });
//   },
// };

// const eurowings = {
//   name: 'eurowings',
//   aitaCode: 'EW',
//   bookings: [],
// };

//! Extraemos el método (pierde el this)
// const book = lufthansa.book;

//! bind → fija el valor de this
// const bookEW = book.bind(eurowings);

// bookEW(23, 'Steven');
// console.log(eurowings); //? booking agregado correctamente

//! ======================================
//! PARTIAL APPLICATION CON BIND
//! ======================================

//! Predefinir argumentos
// const bookEW23 = book.bind(eurowings, 23);

// bookEW23('Cris'); //? solo pasamos el nombre
// bookEW23('Cris G');

//! ======================================
//! BIND CON EVENT LISTENERS
//! ======================================

// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this); //? apunta al objeto correcto gracias a bind
//   this.planes++;
//   console.log(this.planes);
// };

//! Sin bind → this sería el botón (error)
//! Con bind → this apunta a lufthansa
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//! ======================================
//! PARTIAL APPLICATION (FUNCIONES)
//! ======================================

//! Función para agregar impuestos
// const addTaxes = (rate = 0.23, value) => value + value * rate;

// console.log(addTaxes(0.1, 200)); //? 220

//! bind para fijar el rate
// const addVAT = addTaxes.bind(null, 0.23);

// console.log(addVAT(100)); //? 123
// console.log(addVAT(23)); //? 28.29

//! ======================================
//! ALTERNATIVA: CLOSURES
//! ======================================

// function addTaxes2(rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }

//! Creamos función con IVA fijo
// const addVAT2 = addTaxes2(0.23);

// console.log(addVAT2(100)); //? 123
// console.log(addVAT2(23)); //? 28.29

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const options = this.options;
    const value = prompt(options.join('\n'));
    if (value > options.length) {
      alert('Invalid value');
      return;
    }
    this.answers[value] += 1;
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    else console.log(this.answers.join(','));
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults();
poll.displayResults();
