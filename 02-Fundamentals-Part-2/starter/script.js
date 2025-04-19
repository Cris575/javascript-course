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

// const yearUntilRetirament = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirament(1991, "Pepe"));
// console.log(yearUntilRetirament(1980, "Bob"));

//! Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples pieces and ${orangesPieces} oranges pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

function calAge(birthYear) {
  return 2037 - birthYear;
}

const calRetirement = function (age) {
  return 65 - age;
};

const yearUntilRetirament = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = calRetirement(age);

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  //return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirament(1991, "Pedro"));
console.log(yearUntilRetirament(1950, "Mike"));
