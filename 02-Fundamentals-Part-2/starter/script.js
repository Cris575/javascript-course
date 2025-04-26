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

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1992, 1993, 1994);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Miguel";
console.log(friends);

const cris = ["Jonas", "Dev", 2000];
console.log(cris);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1991, 1992, 1993, 1994];

for (let index = 0; index < years.length; index++) {
  console.log(calcAge(years[index]));
}
