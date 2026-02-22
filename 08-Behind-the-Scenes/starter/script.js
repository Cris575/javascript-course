'use strict';

function calAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New output';
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 2));
    console.log(output);
  }
  printAge();
  return age;
}

// const firstName = 'Jonas';
// calAge(1991);
//console.log(age);
//printAge();

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Finctions

// console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));
// addExpr(1, 2);
// addArrow(1, 2);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
//console.log(numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All produts deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x == window.x);
console.log(y == window.y);
console.log(z == window.z);
