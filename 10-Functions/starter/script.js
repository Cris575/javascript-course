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
