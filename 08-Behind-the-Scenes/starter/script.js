'use strict';

//! ======================================
//! SCOPING EN LA PRÁCTICA
//! ======================================

function calcAge(birthYear) {

  const age = 2037 - birthYear; //? variable local de la función

  function printAge() {

    //! Scope Chain
    //? printAge puede acceder a variables de su función padre

    let output = `${firstName}, tienes ${age}, naciste en ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {

      //! var NO respeta el block scope
      var millenial = true;

      //! Shadowing
      //? se crea una nueva variable con el mismo nombre
      const firstName = 'Steven';

      //! Reasignación de variable externa
      output = 'NEW OUTPUT!';

      const str = `Oh, y eres millenial, ${firstName}`;
      console.log(str);

      //! función dentro de un bloque
      function add(a, b) {
        return a + b;
      }
    }

    //console.log(str); //! error porque vive solo dentro del bloque
    console.log(millenial); //! funciona por usar var
    console.log(output);

  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);


//! ======================================
//! HOISTING Y TEMPORAL DEAD ZONE
//! ======================================

//? var se eleva con valor undefined
console.log(me);

//console.log(job); //! ReferenceError
//console.log(year); //! ReferenceError

var me = 'Jonas';
let job = 'teacher';
const year = 1991;


//! ======================================
//! HOISTING EN FUNCIONES
//! ======================================

console.log(addDecl(2,3)); //! funciona

//console.log(addExpr(2,3)); //! error

console.log(addArrow); //? undefined

function addDecl(a,b){
  return a + b;
}

const addExpr = function(a,b){
  return a + b;
};

var addArrow = (a,b)=> a + b;


//! ======================================
//! BUG CLÁSICO POR HOISTING
//! ======================================

console.log(undefined);

if(!numProducts) deleteShoppingCart(); //! undefined es falsy

var numProducts = 10;

function deleteShoppingCart(){
  console.log('Todos los productos eliminados');
}


//! ======================================
//! VARIABLES EN WINDOW
//! ======================================

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //! true
console.log(y === window.y); //! false
console.log(z === window.z); //! false



//! ======================================
//! THIS EN FUNCIONES
//! ======================================

console.log(this); //? window en navegador

const calcAge = function(birthYear){

  console.log(2037 - birthYear);

  //! en strict mode this es undefined
  console.log(this);

};

calcAge(1991);


//! ======================================
//! THIS EN ARROW FUNCTIONS
//! ======================================

const calcAgeArrow = birthYear => {

  console.log(2037 - birthYear);

  //! hereda this del contexto superior
  console.log(this);

};

calcAgeArrow(1980);


//! ======================================
//! THIS EN OBJETOS
//! ======================================

const jonas = {

  year:1991,

  calcAge:function(){

    console.log(this); //? el objeto que llama el método

    console.log(2037 - this.year);

  }

};

jonas.calcAge();

const matilda = { year:2017 };

matilda.calcAge = jonas.calcAge;

matilda.calcAge(); //? ahora this es matilda


//! ======================================
//! PERDER EL CONTEXTO DE THIS
//! ======================================

const f = jonas.calcAge;

f(); //! this se vuelve undefined



//! ======================================
//! FUNCIONES NORMALES VS ARROW
//! ======================================

const jonas2 = {

  firstName:'Jonas',
  year:1991,

  calcAge:function(){

    console.log(2037 - this.year);

    //! arrow function hereda this del método
    const isMillenial = ()=>{

      console.log(this);

      console.log(this.year >= 1981 && this.year <= 1996);

    };

    isMillenial();

  },


  //! ERROR COMÚN
  //! arrow functions no deben usarse como métodos

  greet:()=>{

    console.log(this);

    console.log(`Hey ${this.firstName}`);

  }

};

jonas2.greet();
jonas2.calcAge();


//! ======================================
//! ARGUMENTS EN FUNCIONES
//! ======================================

const addExpr2 = function(a,b){

  console.log(arguments); //? disponible en funciones normales

  return a + b;

};

addExpr2(2,5);
addExpr2(2,5,8,12);


var addArrow2 = (a,b)=>{

  //! arrow functions no tienen arguments
  console.log(arguments);

  return a + b;

};

addArrow2(2,5,8);


//! ======================================
//! REFERENCIAS DE OBJETOS
//! ======================================

const jessica1 = {

  firstName:'Jessica',
  lastName:'Williams',
  age:27

};


//? los objetos se pasan por referencia

function marryPerson(originalPerson,newLastName){

  originalPerson.lastName = newLastName;

  return originalPerson;

}

const marriedJessica = marryPerson(jessica1,'Davis');

console.log('Antes:',jessica1);
console.log('Después:',marriedJessica);


//! ======================================
//! SHALLOW COPY
//! ======================================

const jessica = {

  firstName:'Jessica',
  lastName:'Williams',
  age:27,
  familiy:['Alice','Bob']

};

//? copia solo el primer nivel

const jessicaCopy = {...jessica};

jessicaCopy.lastName = 'Davis';


//! ======================================
//! DEEP COPY
//! ======================================

//? copia profunda de todo el objeto

const jessicaClone = structuredClone(jessica);

jessicaClone.familiy.push('Mary');
jessicaClone.familiy.push('John');

console.log('Original:',jessica);
console.log('Clon:',jessicaClone);