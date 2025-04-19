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

//!Invocacion de la función

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Jiice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

//!Por defecto las fucniones devuelven undefined

// const appleJuice = fruitProcessor(1, 2);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 2);
// console.log(appleOrangeJuice);

//! Fucntion dlecaration
//* Tine Hosting, lo que significa que puede ser llamada antes de su declaración en el código

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//! Function expression
//* No tiene hoisting. Si intentas llamarla antes de su declaración, habrá un error:

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
