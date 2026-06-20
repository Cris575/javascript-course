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
