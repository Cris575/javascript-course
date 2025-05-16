"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 10;
// const if = true;

//-----------------

// Functions

// function logger() {
//   console.log("My name is Cris");
// }

//! Invocación de la función
//* Por defecto las funciones devuelven undefined

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(1, 2);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 2);
// console.log(appleOrangeJuice);

//! Function declaration
//* Tiene hoisting, lo que significa que puede ser llamada antes de su declaración en el código

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

//! Function expression
//* No tiene hoisting. Si intentas llamarla antes de su declaración, habrá un error:

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

//! Arrow function

// const age1 = (birthYear) => 2037 - birthYear;
// const age3 = age1(2000);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Pepe"));
// console.log(yearsUntilRetirement(1980, "Bob"));

//! Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// const calcRetirement = function (age) {
//   return 65 - age;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = calcRetirement(age);

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years.`;
//   } else {
//     return `${firstName} is already retired.`;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Pedro"));
// console.log(yearsUntilRetirement(1950, "Mike"));

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => {
//   const avg = (score1 + score2 + score3) / 3;
//   return avg;
// };

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// function checkWinner(scoreDolphins, scoreKoalas) {
//   if (scoreDolphins >= 2 * scoreKoalas) {
//     console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
//   } else if (scoreKoalas >= 2 * scoreDolphins) {
//     console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

//! Arrays

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // const years = new Array(1991, 1992, 1993, 1994);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Miguel";
// console.log(friends);

// const cris = ["Jonas", "Dev", 2000];
// console.log(cris);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1991, 1992, 1993, 1994];

// for (let index = 0; index < years.length; index++) {
//   console.log(calcAge(years[index]));
// }

//! Array methods

//* Push
//* Agrega un elemento al final del array y retorna la nueva longitud de array

// const friends = ["Michael", "Steven", "Peter"];
// let newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

//* unshift
//* Agrega un elemento al principio del array y retorna la nueva longitud de array

// newLength = friends.unshift("Jhon");
// console.log(friends);
// console.log(newLength);

//* pop
//* Elimina un elemento al final del array y retorna el elemento eleimnado de array

// newLength = friends.pop();
// console.log(friends);
// console.log(newLength);

//* shift
//* Elimina un elemento al princicpio del array y retorna el elemento eleimnado de array

// newLength = friends.shift();
// console.log(friends);
// console.log(newLength);

//* indecOf
//*De vuelve la ubicaicon del elemento, si no lo encutra retorna -1
// console.log(friends.indexOf("Peter"));
// console.log(friends.indexOf("Bob"));

//* include
//* Localiza el elemento dentro de la matriz true si lo contiene false si no
//* Uitliza el operador es estricta igualdad ===
// console.log(friends.includes("Peter"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes("peter"));

// const bills = [125, 555, 44];
// const totals = [];

// const calcTip = (tips) => {
//   if (tips >= 50 && tips <= 300) {
//     return tips * 0.15;
//   } else {
//     return tips * 0.2;
//   }
// };

// for (let i = 0; i < bills.length; i++) {
//   totals.push(calcTip(bills[i]) + bills[i]);
// }

// console.log(totals);

//! Objetos

// const crisArray = [
//   "Cristian",
//   "González",
//   2037 - 1991,
//   "Alumno",
//   ["A", "B", "C"],
// ];

// const cristian = {
//   firstName: "Cristian",
//   lastName: "González",
//   age: 2037 - 1991,
//   position: "Alumno",
//   array: ["A", "B", "C"],
// };

// const cristian = {
//   firstName: "Jonas",
//   lastName: "González",
//   age: 2037 - 1991,
//   job: "Alumno",
//   array: ["Michel", "B", "C"],
// };

// console.log(cristian);

// console.log(cristian.lastName);
// console.log(cristian["lastName"]);

// const nameKey = "Name";
// console.log(cristian["first" + nameKey]);
// console.log(cristian["last" + nameKey]);

// const inetresetesIn = prompt("Que queires saber sobre mi?");

// if (cristian[inetresetesIn]) {
//   console.log(cristian[inetresetesIn]);
// } else {
//   console.log("Wrong request!");
// }

// cristian.location = "mexico";
// cristian["test"] = "mexico";

// console.log(
//   `${cristian.firstName} has ${cristian.array.length} friends, and his best friend is callled ${cristian.array[0]}`
// );

// const jonas = {
//   fisrtName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michel", "Peter", "Steven"],
//   hasDriverLicense: false,

// calcAge: function (this.birthYear) {
//   return 2037 - birthYeah;
// },

// calcAge: function () {
//   console.log(this);
//   return 2037 - this.birthYear;
// },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSumary: function () {
//     return `Jonas is a ${this.age}-year old ${this.job}, he has ${
//       this.hasDriverLicense ? "a" : "no"
//     } driver's license`;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas);

// console.log(jonas.getSumary());

// const mark = {
//   fullName: "Mark Miller ",
//   mass: 78,
//   height: 1.69,
//   calcBIM: function () {
//     this.bim = this.mass / (this.height * this.height);
//     return this.bim;
//   },
// };

// const john = {
//   fullName: "John Smith's ",
//   mass: 92,
//   height: 1.95,
//   calcBIM: function () {
//     this.bim = this.mass / (this.height * this.height);
//     return this.bim;
//   },
// };

// mark.calcBIM();
// john.calcBIM();

// if (john.bim > mark.bim) {
//   console.log(
//     `${john.fullName} bim (${john.bim}) is higher than ${mark.fullName} (${mark.bim}!)`
//   );
// } else if (mark.bim > john.bim) {
//   console.log(
//     `${mark.fullName} bim (${mark.bim}) is higher than ${john.fullName} (${john.bim}!)`
//   );
// }

// function test() {
//   console.log(this);
// }

// test();

//! Loops

// for (let index = 1; index <= 10; index++) {
//   console.log(`Lifting weights repetition ${index} 🏋️`);
// }

// const crisArray = [
//   "Cristian",
//   "González",
//   2037 - 1991,
//   "Alumno",
//   ["A", "B", "C"],
// ];

// let types = [];

// for (let index = 0; index < crisArray.length; index++) {
//   types[index] = typeof crisArray[index];
// }

// console.log(types);

//! Continues y brack

// for (let index = 0; index < crisArray.length; index++) {
//   if (typeof crisArray[index] !== "string") continue;

//   console.log(crisArray[index]);
// }

// for (let index = 0; index < crisArray.length; index++) {
//   if (typeof crisArray[index] === "number") break;

//   console.log(crisArray[index]);
// }

const crisArray = [
  "Cristian",
  "González",
  2037 - 1991,
  "Alumno",
  ["A", "B", "C"],
];

for (let index = crisArray.length - 1; index >= 0; index--) {
  console.log(crisArray[index]);
}

console.log(crisArray.reverse());

const crisArray2 = [
  ["A", "B", "C"],
  ["1", "2", "3"],
];

for (let i = 0; i < crisArray2.length; i++) {
  for (let a = 0; a < crisArray2[i].length; a++) {
    console.log(crisArray2[i][a]);
  }
}
