'use strict';

///////////////////////////////////////
//* Scoping en la práctica

function calcAge(birthYear) {

  const age = 2037 - birthYear; //? variable local del scope de la función

  function printAge() {

    //* Cadena de scopes (scope chain)
    //? printAge puede acceder a birthYear, age y firstName del scope externo

    let output = `${firstName}, tienes ${age}, naciste en ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {

      //! var ignora el block scope (vive en el scope de la función)
      var millenial = true;

      //* Shadowing de variable
      //? se crea una nueva variable con el mismo nombre que la externa
      const firstName = 'Steven';

      //* Reasignación de variable del scope superior
      output = 'NEW OUTPUT!';

      const str = `Oh, y eres millenial, ${firstName}`;
      console.log(str);

      //* Función dentro de un bloque
      //? en strict mode solo existe dentro de este bloque
      function add(a, b) {
        return a + b;
      }
    }

    //console.log(str); //! Error: solo existe dentro del if
    console.log(millenial); //! funciona porque var no respeta block scope

    //console.log(add(2,3)); //! error en strict mode

    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);


///////////////////////////////////////
//* Hoisting y TDZ en la práctica

//* Variables

console.log(me); //? var se eleva (hoisting) con valor undefined
//console.log(job); //! Error: está en TDZ
//console.log(year); //! Error: está en TDZ

var me = 'Jonas';
let job = 'teacher';
const year = 1991;


//* Funciones

console.log(addDecl(2,3)); //! function declaration se eleva completamente
//console.log(addExpr(2,3)); //! no se puede usar antes de declararla
console.log(addArrow); //? undefined por hoisting de var
//console.log(addArrow(2,3)); //! error si aún no se asigna

function addDecl(a,b){
  return a + b;
}

const addExpr = function(a,b){
  return a + b;
};

var addArrow = (a,b)=> a + b;


//* Ejemplo clásico de bug con var

console.log(undefined);

if(!numProducts) deleteShoppingCart(); //! undefined se evalúa como false

var numProducts = 10;

function deleteShoppingCart(){
  console.log('Todos los productos eliminados!');
}


//* Variables en el objeto window

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //! true
console.log(y === window.y); //! false
console.log(z === window.z); //! false


///////////////////////////////////////
//* La palabra clave this en la práctica

console.log(this); //? en navegador apunta a window

const calcAge = function(birthYear){

  console.log(2037 - birthYear);

  //! en strict mode this es undefined en funciones normales
  console.log(this);

};

calcAge(1991);


const calcAgeArrow = birthYear => {

  console.log(2037 - birthYear);

  //! arrow functions no tienen this propio
  //! heredan el this del contexto donde se crean
  console.log(this);

};

calcAgeArrow(1980);


const jonas = {

  year:1991,

  calcAge:function(){

    console.log(this); //? el objeto que llama el método

    console.log(2037 - this.year);

  }

};

jonas.calcAge();


const matilda = {

  year:2017

};

matilda.calcAge = jonas.calcAge;

matilda.calcAge(); //? ahora this apunta a matilda


const f = jonas.calcAge;

f(); //! this se pierde (undefined en strict mode)



///////////////////////////////////////
//* Funciones normales vs arrow functions

const jonas = {

  firstName:'Jonas',
  year:1991,

  calcAge:function(){

    console.log(2037 - this.year);

    //* Arrow function hereda el this del método

    const isMillenial = ()=>{

      console.log(this);

      console.log(this.year >= 1981 && this.year <= 1996);

    };

    isMillenial();

  },


  //! Error común
  //! Arrow functions no deben usarse como métodos de objeto

  greet:()=>{

    console.log(this);

    console.log(`Hey ${this.firstName}`);

  }

};

jonas.greet();
jonas.calcAge();


//* keyword arguments

const addExpr = function(a,b){

  console.log(arguments); //? disponible solo en funciones normales

  return a + b;

};

addExpr(2,5);
addExpr(2,5,8,12);


var addArrow = (a,b)=>{

  //! arrow functions no tienen arguments
  console.log(arguments);

  return a + b;

};

addArrow(2,5,8);



///////////////////////////////////////
//* Referencias de objetos (Shallow vs Deep Copy)

const jessica1 = {

  firstName:'Jessica',
  lastName:'Williams',
  age:27

};


//? Los objetos se pasan por referencia

function marryPerson(originalPerson,newLastName){

  //! se modifica el objeto original
  originalPerson.lastName = newLastName;

  return originalPerson;

}

const marriedJessica = marryPerson(jessica1,'Davis');

console.log('Antes:',jessica1);
console.log('Después:',marriedJessica);


const jessica = {

  firstName:'Jessica',
  lastName:'Williams',
  age:27,
  familiy:['Alice','Bob']

};


//* Shallow Copy

//? copia solo el primer nivel del objeto

const jessicaCopy = {...jessica};

jessicaCopy.lastName = 'Davis';


//* Deep Copy

//? structuredClone crea una copia profunda

const jessicaClone = structuredClone(jessica);

jessicaClone.familiy.push('Mary');
jessicaClone.familiy.push('John');

console.log('Original:',jessica);
console.log('Clon:',jessicaClone);