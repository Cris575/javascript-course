'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 0, mainIndex = 1, time, address }) {
    console.log(starterIndex, mainIndex, time, address);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

//! ======================================
//! WHICH DATA STRUCTURE TO USE?
//! ======================================

//? FUENTES DE DATOS:
//? 1. Desde el propio programa: datos escritos directamente en el código (ej. mensajes de estado)
//? 2. Desde la UI: datos ingresados por el usuario o datos escritos en el DOM (ej. tareas en una lista)
//? 3. Desde fuentes externas: datos obtenidos de una API (ej. datos JSON)

//! ARRAYS vs. SETS
//? Usar ARRAYS cuando necesites una lista ordenada de valores (puede contener duplicados)
//? Usar ARRAYS cuando necesites manipular datos (tiene muchos métodos)

// const tasksArr = ['Code', 'Eat', 'Code'];

//? Usar SETS cuando necesites trabajar con valores únicos
//? Usar SETS cuando el alto rendimiento sea realmente importante
//? Usar SETS para eliminar duplicados de arrays

// const tasksSet = new Set(['Code', 'Eat', 'Code']);

//! OBJECTS vs. MAPS
//? Usar OBJECTS para un almacenamiento clave/valor más "tradicional"
//? Usar OBJECTS cuando necesites incluir funciones (métodos)
//? Usar OBJECTS cuando trabajes con JSON (puede convertirse a map después)
//? Más fácil de escribir y acceder a valores con . y []

// const taskObj = {
//   task: 'Code',
//   date: 'today',
//   repeat: true,
// };

//? Usar MAPS para un mejor rendimiento
//? Usar MAPS cuando las llaves necesiten tener cualquier tipo de datos (no solo strings)
//? Usar MAPS cuando necesites mapear llaves a valores
//? Usar MAPS cuando necesites llaves que NO sean strings
//? Fácil de iterar y calcular el tamaño

// const taskMap = new Map([
//   ['task', 'Code'],
//   ['date', 'today'],
//   [false, 'Start coding!'],
// ]);

//! ======================================
//! MAPS: FUNDAMENTALS
//! ======================================

//! Los Maps son una estructura de datos para guardar pares clave-valor
//? Diferencia con Objetos: las llaves pueden ser de CUALQUIER tipo (objetos, arrays, etc.)

// const rest = new Map();

//! set() agrega elementos y devuelve el map (permite encadenamiento)
// rest.set('name', 'Classcio Italiano');
// rest.set(1, 'Firenze');
// rest.set(2, 'Lisbon');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

//! get() recupera el valor usando la llave
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//! has() verifica si existe una llave
// console.log(rest.has('categories'));

//! delete() elimina un elemento por su llave
// rest.delete(2);
// console.log(rest);

//! size devuelve el número de elementos
// console.log(rest.size);

//! clear() elimina todo el contenido del map
// rest.clear();

//! Usar arrays como llaves
// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.get([1, 2])); //? undefined (son objetos diferentes en memoria)

//! Para que funcione, se debe guardar la referencia en una variable
// const arrMap = [1, 2];
// rest.set(arrMap, 'Test');
// console.log(rest.get(arrMap));

//! Los elementos del DOM también pueden ser llaves
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(document.querySelector('h1')));

//! ======================================
//! MAPS: ITERATION & CONVERSIONS
//! ======================================

//! Crear un Map usando un array de pares [key, value]
// const question = new Map([
//   ['question', 'Test'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   [true, 'Correct'],
//   [false, 'Nop'],
// ]);

// console.log(question);

//! ======================================
//! OBJECT → MAP
//! ======================================

//? Object.entries() convierte un objeto en un array de pares [key,value]
//? Esto permite crear un Map a partir de un objeto

// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//! ======================================
//! ITERAR UN MAP
//! ======================================

//? Los Maps son iterables, por lo que se pueden recorrer con for...of
//? Cada elemento se obtiene como [key,value]

// for (const [a, b] of question) {
//   //! Filtrar solo las llaves que son números
//   if (typeof a === 'number') {
//     console.log(a, ':', b);
//   }
// }

//! ======================================
//! MAP → ARRAY
//! ======================================

//? El operador spread (...) convierte el Map en un array de pares [key,value]

// console.log([...question]);

//? Obtener solo las llaves del Map
// console.log([...question.keys()]);

//? Obtener solo los valores del Map
// console.log([...question.values()]);

//! ======================================
//! SET
//! ======================================

//! orderSet: Set con pedidos del restaurante
//? Un Set elimina automáticamente los duplicados
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza', //? duplicado → será ignorado
//   'Risotto',
//   'Pasta', //? duplicado → será ignorado
//   'Pizza', //? duplicado → será ignorado
//   'Pizza', //? duplicado → será ignorado
// ]);
//? resultado: Set(3) { 'Pasta', 'Pizza', 'Risotto' }

//! Un Set es una colección de valores únicos (no permite duplicados)

// console.log(orderSet);

//! Crear un Set a partir de un string (cada letra será un valor único)
// console.log(new Set('Jonas'));

//! Propiedades y métodos básicos
// console.log(orderSet.size); //? número de elementos únicos
// console.log(orderSet.has('Pizza')); //? true si el elemento existe
// console.log(orderSet.has('Bread')); //? false si no existe

//! Agregar y eliminar elementos
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');

// console.log(orderSet);

// orderSet.clear(); //? elimina todos los elementos del Set

// console.log(orderSet);

//! Iterar un Set
// for (const element of orderSet) {
//   console.log(element);
// }

//! ======================================
//! EJEMPLO: ELIMINAR DUPLICADOS
//! ======================================

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//! Convertimos el array a Set para eliminar duplicados
// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);

//! Contar valores únicos
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size,
// );

//! Contar letras únicas en un string
// console.log(new Set('Cris').size);

//! ======================================
//! OPERACIONES CON SETS
//! ======================================

//! Intersección → elementos que existen en ambos sets
// const commonFoods = italianFoods.intersection(mexicanFoods);

// console.log('Intersection:', commonFoods);
//? Set con elementos en común
// console.log([...commonFoods]);
//? Convertido a array

//! Unión → todos los elementos sin duplicados
// const italianMexicanFusion = italianFoods.union(mexicanFoods);

// console.log(italianMexicanFusion);
//? Set combinado sin duplicados

//! Forma alternativa de hacer unión (manual)
// console.log([...new Set([...italianFoods, ...mexicanFoods])]);
//? Array sin duplicados

//! Diferencia → elementos que están en italianFoods pero NO en mexicanFoods
// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);

// console.log(uniqueItalianFoods);
//? Solo comida italiana única

//! Diferencia inversa → elementos que están en mexicanFoods pero NO en italianFoods
// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);

// console.log(uniqueMexicanFoods);
//? Solo comida mexicana única

//! Diferencia simétrica → elementos que están en uno u otro, pero NO en ambos
// const uniqueItalianAndMexicanFoods =
// mexicanFoods.symmetricDifference(italianFoods);

// console.log(uniqueItalianAndMexicanFoods);
//? Exclusivos de cada set

//! Verificar si NO tienen elementos en común
// console.log(italianFoods.isDisjointFrom(mexicanFoods));
//? true = no comparten nada

//! ======================================
//! OBJECT.KEYS()
//! ======================================

//! Object.keys() devuelve un array con las propiedades del objeto
// const properties = Object.keys(openingHours);

//? ejemplo del resultado:
//? ['thu', 'fri', 'sat']

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

//? properties.length → número de propiedades
//? recorremos cada día del objeto

//! ======================================
//! OBJECT.VALUES()
//! ======================================

//! Object.values() devuelve los valores del objeto
// const values = Object.values(openingHours);
// console.log(values);

//? ejemplo:
//? [
//?   { open: 12, close: 22 },
//?   { open: 11, close: 23 },
//?   { open: 0, close: 24 }
//? ]

//! usamos destructuring para extraer open y close
// for (const { open, close } of values) {
//   console.log(open, close);
// }

//? { open, close } extrae las propiedades del objeto

//! ======================================
//! OBJECT.ENTRIES()
//! ======================================

//! Object.entries() devuelve pares [key, value]
// const entries = Object.entries(openingHours);

// console.log(entries);

//? ejemplo:
//? [
//?   ['thu', {open:12, close:22}],
//?   ['fri', {open:11, close:23}],
//?   ['sat', {open:0, close:24}]
//? ]

//! destructuring doble
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

//? day → clave del objeto
//? {open, close} → valores del objeto interno

//! ======================================
//! OPTIONAL CHAINING (?.)
//! ======================================

//! ?. evita errores cuando una propiedad no existe
//? Si la propiedad es undefined o null → devuelve undefined
//? En lugar de lanzar un error

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//? Primera línea:
//? si "mon" no existe → devuelve undefined

//? Segunda línea:
//? también protege si "openingHours" no existe

//! ======================================
//! OPTIONAL CHAINING CON PROPIEDADES DINÁMICAS
//! ======================================

// for (const day of weekdays) {
//   //! accede dinámicamente a openingHours[day]
//   const open = restaurant.openingHours[day]?.open ?? 'closed';

//   console.log(`On ${day}, we open at ${open}`);
// }

//? [day] permite usar el valor de la variable como propiedad
//? ?.open evita error si ese día no existe
//? ?? 'closed' da un valor por defecto

//! flujo:
//? si existe open → usa ese valor
//? si es undefined → usa "closed"

//! ======================================
//! OPTIONAL CHAINING CON MÉTODOS
//! ======================================

//! ?.() intenta ejecutar un método solo si existe

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist');

//? order existe → se ejecuta
//? orderRisoto no existe → devuelve undefined
//? entonces ?? devuelve "Method does not exist"

//! ======================================
//! OPTIONAL CHAINING CON ARRAYS
//! ======================================

// const user = [{ name: 'Jonas', email: 'hello@jonas.com' }];

//! acceder a elementos del array de forma segura
// console.log(user[0]?.name ?? 'User array empty');
// console.log(user[1]?.name ?? 'User array empty');

//? user[0] existe → imprime "Jonas"
//? user[1] no existe → undefined
//? ?? devuelve "User array empty"

//! ======================================
//! COMBINAR ARRAYS CON SPREAD (...)
//! ======================================

//! ... copia los elementos de un array dentro de otro
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);

//? El nuevo array "menu" contiene:
//? primero los starterMenu
//? luego los mainMenu

//! ======================================
//! ITERAR ARRAYS CON FOR...OF
//! ======================================

//! for...of recorre directamente los valores del array
// for (const item of menu) {
//   console.log(item);
// }

//? item representa cada elemento del array
//? No devuelve el índice, solo el valor

//! ======================================
//! ARRAY.ENTRIES()
//! ======================================

//! entries() devuelve pares [index, value]

// for (const item of menu.entries()) {
//   const [index, str] = item;

//   console.log(index, str);
// }

//? menu.entries() produce algo así:
//? [0, 'Pizza']
//? [1, 'Pasta']
//? [2, 'Risotto']

//! ======================================
//! DESTRUCTURING PARA EXTRAER VALORES
//! ======================================

//! usamos destructuring para separar index y valor
// const [index, str] = item;

//? index → posición del elemento
//? str → valor del elemento en el array

// const rest1 = {
//   name: 'Carpi',
//   numGuest: 20,
// };

// const rest2 = {
//   name: 'La Pizza ',
//   owner: 'Giovanni Rossi',
// };

//! ======================================
//! OR ASSIGNMENT OPERATOR (||=)
//! ======================================

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

//! ||= asigna el valor SOLO si el actual es falsy
//? falsy: 0, '', null, undefined, false, NaN

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//? Si numGuest es falsy → se convierte en 10
//? Si numGuest tiene valor truthy → se mantiene

//! ======================================
//! NULLISH ASSIGNMENT OPERATOR (??=)
//! ======================================

//! ??= asigna SOLO si el valor es null o undefined
//? A diferencia de ||=, aquí 0 o '' SÍ se respetan

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

//? Si numGuest es null o undefined → se convierte en 10
//? Si tiene valor (incluso 0) → se mantiene

//! ======================================
//! AND ASSIGNMENT OPERATOR (&&=)
//! ======================================

//! &&= asigna el valor SOLO si el actual es truthy

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

//? Si owner existe (truthy) → se reemplaza por '<ANONYMOUS>'
//? Si owner es falsy → no cambia

//! ======================================
//! NULLISH COALESCING OPERATOR (??)
//! ======================================

// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//! ?? devuelve el primer valor que NO sea null o undefined
// const guestCorrect = restaurant.numGuests ?? 10;
//? Si numGuests es null o undefined → usa 10
//? Si numGuests tiene valor (incluso 0) → usa ese valor

//! ======================================
//! SHORT CIRCUITING (||)
//! ======================================

//! OR devuelve el primer valor truthy
// console.log(3 || 'Cris');

//? '' es falsy → devuelve el siguiente valor
// console.log('' || 'Cris');

//? true es truthy → se detiene ahí
// console.log(true || 0);

//? ambos falsy → devuelve el último
// console.log(undefined || null);

//? recorre hasta encontrar el primer truthy
// console.log(false || false || true);

//? 'Hello' es el primer truthy
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//! ======================================
//! VALORES POR DEFECTO
//! ======================================

// restaurant.numGuests = 0;

//? operador ternario
//? si numGuests es truthy usa ese valor
//? si no usa 10
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

//? OR usado como valor por defecto
//? si numGuests es falsy usa 10
// const guests2 = restaurant.numGuests || 10;

// console.log(guests2);

//! ======================================
//! SHORT CIRCUITING (&&)
//! ======================================

//! AND devuelve el primer valor falsy
// console.log(0 && 'Cris');

//? ambos truthy → devuelve el último
// console.log(7 && 'Cris');

//? null es el primer falsy → se detiene ahí
// console.log('Kello' && 23 && null && 'Cris');

//! ======================================
//! EJECUCIÓN CONDICIONAL DE FUNCIONES
//! ======================================

//? forma clásica de comprobar si existe la función
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Peperoni', 'cheese');
// }

//? forma corta usando AND
//? si orderPizza existe se ejecuta
// restaurant.orderPizza && restaurant.orderPizza('Peperoni', 'cheese');

//! ======================================
//! REST PATTERN (...)
//! ======================================

//? SPREAD: cuando ... está en el lado DERECHO del =
// const arr = [1, 2, ...[3, 4]];
//? Expande los valores → [1,2,3,4]

//? REST: cuando ... está en el lado IZQUIERDO del =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
//? Recoge los elementos restantes en un array
//console.log(a,b,others)

//! El REST siempre debe ser el último elemento
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

//? pizza = primer elemento
//? risotto = tercer elemento
//? otherFood = resto de elementos

//console.log(pizza, risotto, otherFood);

//! ======================================
//! REST EN OBJETOS
//! ======================================

//? Extrae una propiedad y agrupa las restantes
// const { sat, ...weekdays } = restaurant.openingHours;

//? sat = horario del sábado
//? weekdays = resto de días

//console.log(weekdays)

//! ======================================
//! REST EN FUNCIONES
//! ======================================

//? Permite recibir cantidad variable de argumentos

// const add = function (...numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   console.log(sum);
// };

//? numbers se convierte en un array

//! ======================================
//! SPREAD OPERATOR (...)
//! ======================================

//? Permite EXPANDIR elementos de un iterable
//? (arrays, strings, maps, sets)

//! ======================================
//! SPREAD CON ARRAYS
//! ======================================

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];

//? ...arr expande los valores → [1,2,7,8,9]

//! Expandir elementos individualmente
// console.log(...newArr);

//? imprime 1 2 7 8 9

//! Agregar elementos a un array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];

//? agrega elemento sin modificar el original

//! Copiar un array
// const mainMenuCopy = [...restaurant.mainMenu];

//? crea una copia superficial (shallow copy)

//! Unir arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//? muy usado para concatenar arrays

//! ======================================
//! SPREAD CON STRINGS
//! ======================================

// const str = 'jonas';
// const letters = [...str, ' ', 'S.'];

//? convierte string en array de caracteres

// console.log(letters);

//! ======================================
//! FUNCIONES CON SPREAD
//! ======================================

//? Spread permite enviar un array como argumentos

// const ingredients = [
//   prompt("Ingrediente 1"),
//   prompt("Ingrediente 2"),
//   prompt("Ingrediente 3"),
// ];

// restaurant.orderPasta(...ingredients);

//? ...ingredients separa el array en valores individuales

//! ======================================
//! SPREAD EN OBJETOS
//! ======================================

//? Permite copiar propiedades de objetos

// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Guiseppe',
// };

//? copia todas las propiedades del objeto restaurant

//! Copiar objeto
// const restaurantCopy = { ...restaurant };

// restaurantCopy.name = 'Roma';

//? spread en objetos también es copia superficial

//! ======================================
//! DESTRUCTURING DE OBJETOS
//! ======================================

//? Permite extraer propiedades de un objeto fácilmente

// const { name, openingHours, categories } = restaurant;

//? crea variables con esos nombres

//! Renombrar variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

//? name → restaurantName

//! Valores por defecto
// const { menu = [], starterMenu: starter = {} } = restaurant;

//? si la propiedad no existe usa el valor default

//! ======================================
//! MUTACIÓN DE VARIABLES
//! ======================================

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

//? paréntesis necesarios para evitar que JS lo interprete como bloque

//! ======================================
//! DESTRUCTURING ANIDADO
//! ======================================

// const {
//   fri: { open: o, close: c },
// } = openingHours;

//? extrae propiedades dentro de objetos anidados

//! ======================================
//! ARRAY DESTRUCTURING
//! ======================================

// const arr = [2, 3, 4];
// const [x, y, z] = arr;

//? asigna cada posición del array a una variable

//! Saltar elementos
// let [main, , secondary] = restaurant.categories;

//? la coma salta un elemento

//! ======================================
//! INTERCAMBIAR VARIABLES
//! ======================================

// [main, secondary] = [secondary, main];

//? forma moderna de intercambiar valores

//! ======================================
//! MÚLTIPLES VALORES DE RETORNO
//! ======================================

// const [starter, mainCourse] = restaurant.order(2, 0);

//? útil cuando una función devuelve un array

//! ======================================
//! DESTRUCTURING ANIDADO EN ARRAYS
//! ======================================

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;

// const [i, j, [k, l]] = nested;

//? permite acceder a arrays dentro de arrays

//! ======================================
//! VALORES POR DEFECTO
//! ======================================

// const [p, q, r = 0] = [8, 9];

// console.log(p, q, r);

//? si no existe el valor usa el valor por defecto
