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

function logger() {
  console.log("My name is Cris");
}

//Invocacion de la función
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Jiice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//Por defecto las fucniones devuelven undefined

const appleJuice = fruitProcessor(1, 2);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 2);
console.log(appleOrangeJuice);
