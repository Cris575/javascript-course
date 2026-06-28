'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//------- Code -------

//! ======================================
//! SELECCIONAR ELEMENTOS DEL DOM
//! ======================================

//? acceder a elementos principales del documento

console.log(document.documentElement);
//? <html>

console.log(document.head);
//? <head>

console.log(document.body);
//? <body>

//! ======================================
//! QUERYSELECTOR()
//! ======================================

//? devuelve el PRIMER elemento que coincida

const header = document.querySelector('.header');

//? busca por clase

//! ======================================
//! QUERYSELECTORALL()
//! ======================================

//? devuelve TODOS los elementos coincidentes
//? en un NodeList

const allSections = document.querySelectorAll('.section');

console.log(allSections);

//! ======================================
//! GETELEMENTBYID()
//! ======================================

//? busca por id

document.getElementById('section--1');

//? ⚠️ NO lleva "#"
//? document.getElementById('#section--1') ❌

//! ======================================
//! GETELEMENTSBYTAGNAME()
//! ======================================

//? devuelve una HTMLCollection

const allButtons = document.getElementsByTagName('button');

console.log(allButtons);

//! ======================================
//! GETELEMENTSBYCLASSNAME()
//! ======================================

//? devuelve elementos por clase

console.log(document.getElementsByClassName('btn'));

//! ======================================
//! CREAR ELEMENTOS
//! ======================================

//? crea elemento en memoria
//? aún NO aparece en la página

const message = document.createElement('div');

message.classList.add('cookie-message');

//? agregar clase

// message.textContent = 'We use cookies';

//? insertar HTML dentro del elemento

message.innerHTML =
  'We use cookies <button class="btn btn--close-cookie">Got it!</button>';

//! ======================================
//! INSERTAR ELEMENTOS
//! ======================================

//? un elemento NO puede existir
//? en dos lugares al mismo tiempo

header.prepend(message);

//? inserta dentro del header
//? al INICIO

// header.append(message);

//? inserta dentro del header
//? al FINAL

// header.append(message.cloneNode(true));

//? cloneNode(true)
//? crea una copia completa

//! ======================================
//! BEFORE() Y AFTER()
//! ======================================

header.before(message);

//? inserta antes del header

header.after(message);

//? inserta después del header

//! ======================================
//! IMPORTANTE
//! ======================================

//? estas líneas NO crean copias

header.prepend(message);
header.before(message);
header.after(message);

//? cada vez el elemento se mueve
//? a la nueva ubicación

//? al final solo queda en:
//? header.after(message)

//! ======================================
//! CLONAR ELEMENTOS
//! ======================================

//? para tener varias copias

const copy = message.cloneNode(true);

//? true = copiar hijos también

// header.append(copy);

//! ======================================
//! IDEA CLAVE
//! ======================================

//! querySelector → primer elemento
//! querySelectorAll → todos

//! createElement → crear
//! prepend → dentro arriba
//! append → dentro abajo
//! before → fuera antes
//! after → fuera después

//Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    console.log('');
    message.remove();
  });

//! ======================================
//! MODIFICAR ESTILOS
//! ======================================

//? modificar estilos inline desde JavaScript

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//! ======================================
//! STYLE SOLO LEE ESTILOS INLINE
//! ======================================

//? si la propiedad viene del CSS
//? style NO la mostrará

console.log(message.style.height);

//? ''

console.log(message.style.backgroundColor);

//? '#37383d'

console.log(message.style.color);

//? ''
//? porque viene del CSS

//! ======================================
//! GETCOMPUTEDSTYLE()
//! ======================================

//? obtiene los estilos finales calculados

console.log(getComputedStyle(message).height);

console.log(getComputedStyle(message).color);

//? funciona aunque el estilo venga del CSS

//! ======================================
//! MODIFICAR USANDO VALOR ACTUAL
//! ======================================

//? aumentar altura actual en 40px

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

//? parseFloat elimina "px"
//? luego volvemos a agregarlo

//! ======================================
//! CSS CUSTOM PROPERTIES
//! ======================================

//? modificar variables CSS

document.documentElement.style.setProperty('--color-primary', 'orangered');

//? cambia la variable global del CSS

//! ======================================
//! ATRIBUTOS HTML
//! ======================================

const logo = document.querySelector('.nav__logo');

console.log(logo.src);

console.log(logo.alt);

console.log(logo.id);

console.log(logo.className);

//! ======================================
//! SETATTRIBUTE()
//! ======================================

//? crear o modificar atributos

logo.setAttribute('company', 'Bankist');

//? atributo personalizado

//! ======================================
//! GETATTRIBUTE()
//! ======================================

//? obtiene el valor real del HTML

console.log(logo.getAttribute('src'));

//! ======================================
//! DIFERENCIA IMPORTANTE
//! ======================================

console.log(logo.src);

//? URL absoluta completa

console.log(logo.getAttribute('src'));

//? valor original del HTML

//! ======================================
//! LINKS
//! ======================================

const link = document.querySelector('.nav__link--btn');

console.log(link.href);

//? URL absoluta

console.log(link.getAttribute('href'));

//? valor original definido en HTML

//! ======================================
//! DATA ATTRIBUTES
//! ======================================

// HTML:
//? data-version-number="3.0"

console.log(logo.dataset.versionNumber);

//? acceso mediante dataset

//! ======================================
//! MANEJO DE CLASES
//! ======================================

//? agregar clase

logo.classList.add('c');

//? eliminar clase

logo.classList.remove('c');

//? agregar si no existe
//? quitar si existe

logo.classList.toggle('c');

//? devuelve true o false

logo.classList.contains('c');

//! ======================================
//! NO RECOMENDADO
//! ======================================

logo.className = 'Jonas';

//? reemplaza TODAS las clases existentes
//? puede romper estilos

//! ======================================
//! IDEA CLAVE
//! ======================================

//! style → estilos inline
//! getComputedStyle → estilos finales

//! getAttribute → valor HTML original
//! property (.src, .href) → valor procesado

//! classList → forma segura de manejar clases

//! ======================================
//! SCROLLING HASTA UNA SECCIÓN
//! ======================================

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (event) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);

  //! ======================================
  //! GETBOUNDINGCLIENTRECT()
  //! ======================================

  //? devuelve información sobre la posición
  //? y tamaño de un elemento

  //? top
  //? left
  //? right
  //? bottom
  //? width
  //? height

  //? todas las medidas son relativas
  //? al viewport (área visible)

  console.log(event.target.getBoundingClientRect());

  //? posición del botón pulsado

  //! ======================================
  //! SCROLL ACTUAL
  //! ======================================

  //? distancia desplazada desde el inicio
  //? de la página

  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

  //? scrollX → horizontal
  //? scrollY → vertical

  //! ======================================
  //! VIEWPORT
  //! ======================================

  //? tamaño visible de la ventana

  console.log(
    'Height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth,
  );

  //? altura visible
  //? anchura visible

  //! ======================================
  //! SCROLL MANUAL (ANTIGUO)
  //! ======================================

  //? mover la ventana a coordenadas específicas

  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY,
  // );

  //! ======================================
  //! SCROLL SUAVE (ANTIGUO)
  //! ======================================

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  //! ======================================
  //! SCROLL MODERNO
  //! ======================================

  //? desplaza automáticamente
  //? hasta el elemento

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//! ======================================
//! GETBOUNDINGCLIENTRECT()
//! EJEMPLO
//! ======================================

//? si el elemento está 800px debajo
//? del viewport

// {
//   top: 800,
//   left: 0,
//   width: 1000,
//   height: 600
// }

//! ======================================
//! DIFERENCIA IMPORTANTE
//! ======================================

//! getBoundingClientRect()
//? posición respecto al viewport

//! window.scrollY
//? posición respecto al documento completo

//! ======================================
//! MÉTODO RECOMENDADO
//! ======================================

//? antes:
//? scrollTo()

//? ahora:
section1.scrollIntoView({
  behavior: 'smooth',
});

//? más limpio
//? más legible
//? menos cálculos

//! ======================================
//! IDEA CLAVE
//! ======================================

//! getBoundingClientRect()
//? dónde está el elemento

//! scrollIntoView()
//? llevar la pantalla hasta él

//! ======================================
//! EVENT LISTENERS
//! ======================================

//? seleccionar elemento

const h1 = document.querySelector('h1');

//! ======================================
//! CALLBACK FUNCTION
//! ======================================

//? función que se ejecutará cuando ocurra el evento

const alertH1 = function (event) {
  alert('addEventListener: Great!');
};

//! ======================================
//! ADDEVENTLISTENER()
//! ======================================

//? agregar un listener al elemento

h1.addEventListener('mouseenter', alertH1);

//? mouseenter se dispara cuando
//? el cursor entra al elemento

//! ======================================
//! REMOVEEVENTLISTENER()
//! ======================================

//? elimina un listener previamente registrado

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

//? después de 3 segundos
//? el evento deja de existir

//! ======================================
//! IMPORTANTE
//! ======================================

//? removeEventListener necesita
//? EXACTAMENTE la misma referencia

// ✔ funciona
h1.addEventListener('mouseenter', alertH1);
h1.removeEventListener('mouseenter', alertH1);

// ❌ no funciona
h1.removeEventListener('mouseenter', function () {
  alert('Hello');
});

//! ======================================
//! EVENT OBJECT
//! ======================================

//? el parámetro event contiene
//? información sobre el evento

const alertH1 = function (event) {
  console.log(event);

  alert('addEventListener: Great!');
};

//? event.target → elemento que disparó el evento
//? event.type → tipo de evento
//? event.clientX → posición X del mouse
//? event.clientY → posición Y del mouse

//! ======================================
//! MOUSEENTER
//! ======================================

//? se ejecuta UNA VEZ cuando el mouse entra

h1.addEventListener('mouseenter', alertH1);

//? parecido a hover

//! ======================================
//! VERSIÓN ANTIGUA
//! ======================================

//? no recomendada

h1.onmouseenter = function () {
  alert('Hello');
};

//? solo permite UN handler
//? addEventListener permite varios

//! ======================================
//! IDEA CLAVE
//! ======================================

//! addEventListener → agregar evento
//! removeEventListener → quitar evento

//? guardar la función en una variable
//? permite eliminarla después

//! ======================================
//! FUNCIONES AUXILIARES
//! ======================================

//? genera un número aleatorio entre min y max

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

//? genera un color RGB aleatorio

const randomColor = () =>
  `rgb(${randomInt(0, 255)},
       ${randomInt(0, 255)},
       ${randomInt(0, 255)})`;

//! ======================================
//! PROPAGACIÓN DE EVENTOS
//! ======================================

//? cuando ocurre un evento:
//? 1. Capturing phase ↓
//? 2. Target phase 🎯
//? 3. Bubbling phase ↑

//! ======================================
//! LISTENER DEL LINK
//! ======================================

//? por defecto addEventListener escucha
//? en la fase de bubbling

document
  .querySelector('.nav__link')
  .addEventListener('click', function (event) {
    this.style.backgroundColor = randomColor();

    console.log('LINK:', event.target, event.currentTarget);

    // event.stopPropagation();
  });

//! ======================================
//! LISTENER DEL CONTENEDOR
//! ======================================

//? también escucha en bubbling

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    this.style.backgroundColor = randomColor();

    console.log('CONTAINER:', event.target, event.currentTarget);
  });

//! ======================================
//! LISTENER DEL NAV
//! ======================================

//? tercer parámetro = true
//? escucha durante la fase de captura

document.querySelector('.nav').addEventListener(
  'click',
  function (event) {
    this.style.backgroundColor = randomColor();

    console.log('NAV:', event.target, event.currentTarget);
  },
  true,
);

//! ======================================
//! EVENT.TARGET
//! ======================================

//? elemento donde ocurrió el click

console.log(event.target);

//! ======================================
//! EVENT.CURRENTTARGET
//! ======================================

//? elemento que tiene el listener

console.log(event.currentTarget);

//? normalmente es igual a this

console.log(this === event.currentTarget);

//! ======================================
//! EJEMPLO DE PROPAGACIÓN
//! ======================================

//? click en .nav__link

// Capturing ↓
// nav

// Target 🎯
// nav__link

// Bubbling ↑
// nav__links
// nav

//! ======================================
//! ORDEN DE EJECUCIÓN
//! ======================================

//? debido a que nav usa captura:

// 1. NAV
// 2. LINK
// 3. CONTAINER

//? si nav NO usara captura:

// 1. LINK
// 2. CONTAINER
// 3. NAV

//! ======================================
//! STOPPROPAGATION()
//! ======================================

//? detiene la propagación

event.stopPropagation();

//? evita que el evento siga
//? hacia los elementos padre

//! ======================================
//! IDEA CLAVE
//! ======================================

//! target → dónde ocurrió el evento
//! currentTarget → quién lo está manejando

//! captura ↓
//! bubbling ↑

//! ======================================
//! EVENT DELEGATION
//! ======================================

//? técnica para manejar eventos
//? desde un elemento padre

//? en lugar de agregar un listener
//? a cada elemento hijo

//! ======================================
//! FORMA TRADICIONAL
//! ======================================

//? un listener por cada link

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (event) {
//
//     event.preventDefault();
//
//     const id = this.getAttribute('href');
//
//     document
//       .querySelector(id)
//       .scrollIntoView({ behavior: 'smooth' });
//
//   });
// });

//? funciona
//? pero crea muchos listeners

//! ======================================
//! EVENT DELEGATION GLOBAL
//! ======================================

//? escuchar clicks en todo el documento

// document.addEventListener('click', function (event) {
//
//   const e = event.target;
//
//   if (e.classList.contains('nav__link')) {
//
//     event.preventDefault();
//
//     const id = e.getAttribute('href');
//
//     document
//       .querySelector(id)
//       .scrollIntoView({ behavior: 'smooth' });
//   }
// });

//? funciona
//? pero escucha TODOS los clicks de la página

//! ======================================
//! EVENT DELEGATION CORRECTA
//! ======================================

//? escuchar en el padre común

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    const e = event.target;

    event.preventDefault();

    if (e.classList.contains('nav__link')) {
      const id = e.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });

//! ======================================
//! CÓMO FUNCIONA
//! ======================================

//? 1. click en un link

//? 2. el evento ocurre en el link

//? 3. el evento burbujea al padre

//? 4. el padre captura el evento

//? 5. event.target indica
//?    qué hijo fue pulsado

//! ======================================
//! LOS 3 PASOS DE EVENT DELEGATION
//! ======================================

//! 1. agregar listener al padre

document.querySelector('.nav__links');

//! 2. determinar qué elemento originó el evento

event.target;

//! 3. aplicar lógica solo si coincide

if (e.classList.contains('nav__link')) {
  // ...
}

//! ======================================
//! EVENT.TARGET
//! ======================================

//? elemento donde ocurrió el click

const e = event.target;

//? si haces click en:
//? <a class="nav__link">

//? e será ese enlace

//! ======================================
//! CLASSLIST.CONTAINS()
//! ======================================

//? verifica si el elemento tiene la clase

if (e.classList.contains('nav__link')) {
  // ejecutar código
}

//! ======================================
//! PREVENTDEFAULT()
//! ======================================

//? evita comportamiento por defecto

event.preventDefault();

//? evita que el navegador
//? navegue automáticamente al href

//! ======================================
//! SCROLL SUAVE
//! ======================================

document.querySelector(id).scrollIntoView({
  behavior: 'smooth',
});

//! ======================================
//! VENTAJAS
//! ======================================

//? menos listeners

//? mejor rendimiento

//? funciona con elementos
//? agregados dinámicamente

//? código más limpio

//! ======================================
//! IDEA CLAVE
//! ======================================

//! escuchar en el padre
//! actuar sobre el hijo

//! ======================================
//! DOM TRAVERSING
//! ======================================

//? recorrer el DOM desde un elemento
//? hacia hijos, padres o hermanos

const h1 = document.querySelector('h1');

//! ======================================
//! BAJAR EN EL DOM (CHILDREN)
//! ======================================

//? buscar elementos descendientes

console.log(h1.querySelectorAll('.highlight'));

//? todos los elementos con la clase
//? .highlight dentro del h1

console.log(h1.childNodes);

//? TODOS los nodos hijos
//? (elementos, texto, comentarios, etc.)

console.log(h1.children);

//? solo elementos HTML hijos

h1.firstElementChild.style.color = 'white';

//? primer elemento hijo

h1.lastElementChild.style.color = 'orangered';

//? último elemento hijo

//! ======================================
//! SUBIR EN EL DOM (PARENTS)
//! ======================================

console.log(h1.parentNode);

//? nodo padre

console.log(h1.parentElement);

//? elemento padre

//! ======================================
//! CLOSEST()
//! ======================================

//? busca el ancestro más cercano
//? que coincida con el selector

h1.closest('.header').style.background = 'red';

//? encuentra el .header más cercano

h1.closest('h1').style.background = 'blue';

//? devuelve el propio h1
//? porque también coincide

//! ======================================
//! HERMANOS (SIBLINGS)
//! ======================================

//? elementos hermanos

console.log(h1.previousElementSibling);

//? hermano anterior

console.log(h1.nextElementSibling);

//? hermano siguiente

//! ======================================
//! NODOS HERMANOS
//! ======================================

//? incluye nodos de texto

console.log(h1.previousSibling);

console.log(h1.nextSibling);

//! ======================================
//! RECORRER TODOS LOS HERMANOS
//! ======================================

console.log(h1.parentElement.children);

//? colección de todos los hijos
//? del padre del h1

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

//? reduce el tamaño de todos
//? excepto el h1

//! ======================================
//! CHILDNODES VS CHILDREN
//! ======================================

//! childNodes
//? devuelve TODOS los nodos
//? texto, comentarios y elementos

//! children
//? devuelve solo elementos HTML

//! ======================================
//! PARENTNODE VS PARENTELEMENT
//! ======================================

//! parentNode
//? devuelve cualquier nodo padre

//! parentElement
//? devuelve únicamente un elemento HTML

//! ======================================
//! IDEA CLAVE
//! ======================================

//! querySelectorAll() → bajar
//! parentElement → subir
//! closest() → buscar ancestro
//! previousElementSibling() → hermano anterior
//! nextElementSibling() → hermano siguiente
