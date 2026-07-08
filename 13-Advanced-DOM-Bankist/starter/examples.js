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

//! ======================================
//! STICKY NAVIGATION (FORMA TRADICIONAL)
//! ======================================

//? obtener la posición inicial de la sección

const initialCoords = section1.getBoundingClientRect();

//! ======================================
//! SCROLL
//! ======================================

//? escuchar el desplazamiento
//? de la ventana

window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//? cuando el scroll supera
//? la posición inicial de section1,
//? el menú se vuelve fijo

//! ======================================
//! PROBLEMA DE ESTA TÉCNICA
//! ======================================

//? el evento scroll se ejecuta
//? MUCHAS veces por segundo

//? puede afectar el rendimiento

//? por eso existe:
//? Intersection Observer API

//! ======================================
//! INTERSECTION OBSERVER API
//! ======================================

//? observa cuándo un elemento
//? entra o sale del viewport
//? sin usar el evento scroll

//! ======================================
//! CALLBACK DEL OBSERVER
//! ======================================

//? se ejecuta cada vez que cambia
//? el estado de intersección

const obsCallback = function (entries, observer) {
  entries.forEach(entry => console.log(entry));
};

//? entries → elementos observados
//? observer → el propio observador

//! ======================================
//! OPCIONES DEL OBSERVER
//! ======================================

const obsOptions = {
  //! elemento de referencia

  root: null,

  //? null = viewport

  //! porcentaje visible necesario
  //! para disparar el callback

  threshold: [0, 0.2],

  //? 0 → cuando entra o sale
  //? 0.2 → cuando el 20% es visible
};

//! ======================================
//! CREAR OBSERVER
//! ======================================

const observer = new IntersectionObserver(obsCallback, obsOptions);

//! ======================================
//! OBSERVAR ELEMENTO
//! ======================================

//? comenzar a observar section1

observer.observe(section1);

//! ======================================
//! ENTRY
//! ======================================

//? cada entry contiene información útil

// entry.target
//? elemento observado

// entry.isIntersecting
//? true si es visible

// entry.intersectionRatio
//? porcentaje visible

// entry.boundingClientRect
//? posición del elemento

//! ======================================
//! ROOT
//! ======================================

//? root: null

//? usa el viewport

//? también puede ser:

// root: document.querySelector('.container')

//? observa respecto a otro contenedor

//! ======================================
//! THRESHOLD
//! ======================================

//? threshold: 0

// callback cuando aparece
// o desaparece

//? threshold: 1

// callback cuando el elemento
// está completamente visible

//? threshold: [0, 0.5, 1]

// callback en cada uno
// de esos porcentajes

//! ======================================
//! IDEA CLAVE
//! ======================================

//! scroll → se ejecuta constantemente

//! IntersectionObserver
//? solo se ejecuta cuando cambia
//? la visibilidad del elemento

//! ======================================
//! STICKY NAVIGATION
//! CON INTERSECTION OBSERVER
//! ======================================

//? elemento que será observado

const header = document.querySelector('.header');

//! ======================================
//! ALTURA DEL NAV
//! ======================================

//? obtener la altura del menú

const navHeight = nav.getBoundingClientRect().height;

console.log(navHeight);

//! ======================================
//! CALLBACK DEL OBSERVER
//! ======================================

//? se ejecuta cuando cambia
//? la visibilidad del header

const stickyNav = function (entries) {
  //! solo estamos observando
  //! un elemento

  const [entry] = entries;

  //! cuando el header deja de verse

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

//! ======================================
//! CREAR OBSERVER
//! ======================================

const headerObserver = new IntersectionObserver(stickyNav, {
  //! viewport

  root: null,

  //! ejecutar cuando cruza el 0%

  threshold: 0,

  //! adelantar el punto de activación

  rootMargin: `-${navHeight}px`,
});

//! ======================================
//! COMENZAR A OBSERVAR
//! ======================================

//? observar el header

headerObserver.observe(header);

//! ======================================
//! ENTRY.ISINTERSECTING
//! ======================================

//? true
//? el elemento está visible

//? false
//? el elemento salió del viewport

//! ======================================
//! ROOTMARGIN
//! ======================================

//? modifica el tamaño del viewport
//? usado por el observer

rootMargin: `-${navHeight}px`;

//? reduce el viewport hacia arriba
//? en la altura del menú

//? así el sticky se activa
//? justo antes de que el nav
//? llegue al borde superior

//! ======================================
//! THRESHOLD
//! ======================================

//? threshold: 0

// callback cuando el elemento
// entra o sale del viewport

//! ======================================
//! FLUJO
//! ======================================

//? 1. observar el header

//? 2. hacer scroll

//? 3. el header sale del viewport

//? 4. isIntersecting = false

//? 5. agregar clase sticky

//? 6. volver arriba

//? 7. isIntersecting = true

//? 8. quitar clase sticky

//! ======================================
//! IDEA CLAVE
//! ======================================

//! observar el header
//! para decidir cuándo fijar el nav

//! ======================================
//! REVEAL SECTIONS
//! ======================================

//? mostrar las secciones
//? conforme aparecen en pantalla

const allSections = document.querySelectorAll('.section');

//! ======================================
//! CALLBACK DEL OBSERVER
//! ======================================

//? se ejecuta cuando una sección
//? cambia su visibilidad

const revealSection = function (entries, observer) {
  const [entry] = entries;

  //! si aún no es visible
  //! salir inmediatamente

  if (!entry.isIntersecting) return;

  //! hacer visible la sección

  entry.target.classList.remove('section--hidden');

  //! dejar de observarla
  //! para mejorar rendimiento

  observer.unobserve(entry.target);
};

//! ======================================
//! CREAR OBSERVER
//! ======================================

const sectionObserver = new IntersectionObserver(revealSection, {
  //! viewport

  root: null,

  //! ejecutar cuando el 15%
  //! sea visible

  threshold: 0.15,
});

//! ======================================
//! OBSERVAR TODAS LAS SECCIONES
//! ======================================

allSections.forEach(function (section) {
  //! comenzar a observar

  sectionObserver.observe(section);

  //! ocultar inicialmente

  section.classList.add('section--hidden');
});

//! ======================================
//! ENTRY.TARGET
//! ======================================

//? elemento observado
//? que activó el callback

entry.target;

//! ======================================
//! ENTRY.ISINTERSECTING
//! ======================================

//? true
//? la sección ya es visible

//? false
//? aún no aparece

//! ======================================
//! UNOBSERVE()
//! ======================================

//? deja de observar un elemento

observer.unobserve(entry.target);

//? el callback ya no volverá
//? a ejecutarse para esa sección

//! ======================================
//! FLUJO
//! ======================================

//? 1. ocultar todas las secciones

//? 2. observar cada una

//? 3. hacer scroll

//? 4. una sección entra al viewport

//? 5. quitar section--hidden

//? 6. dejar de observar

//! ======================================
//! CSS (EJEMPLO)
//! ======================================

// .section--hidden {
//   opacity: 0;
//   transform: translateY(8rem);
// }

//? al quitar la clase,
//? la sección aparece con transición

//! ======================================
//! IDEA CLAVE
//! ======================================

//! observar
//! → detectar visibilidad
//! → mostrar
//! → dejar de observar

//! ======================================
//! REVEAL SECTIONS
//! ======================================

//? mostrar las secciones
//? cuando entren al viewport

const allSections = document.querySelectorAll('.section');

//! ======================================
//! CALLBACK DEL OBSERVER
//! ======================================

//? se ejecuta cada vez que una o más
//? secciones cambian su visibilidad

const revealSection = function (entries, observer) {
  console.log(entries);

  //! entries es un arreglo
  //! de objetos IntersectionObserverEntry

  entries.forEach(entry => {
    //! ignorar las secciones
    //! que aún no son visibles

    if (!entry.isIntersecting) return;

    //! mostrar la sección

    entry.target.classList.remove('section--hidden');

    //! dejar de observarla
    //! ya no es necesario

    observer.unobserve(entry.target);
  });
};

//! ======================================
//! CREAR OBSERVER
//! ======================================

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,

  //! ejecutar cuando el 15%
  //! de la sección sea visible

  threshold: 0.15,
});

//! ======================================
//! OBSERVAR TODAS LAS SECCIONES
//! ======================================

allSections.forEach(function (section) {
  //! comenzar a observar

  sectionObserver.observe(section);

  //! ocultar inicialmente

  section.classList.add('section--hidden');
});

//! ======================================
//! ¿QUÉ ES ENTRIES?
//! ======================================

//? entries es un arreglo porque
//? un mismo observer puede estar
//? observando varios elementos

// [
//   IntersectionObserverEntry,
//   IntersectionObserverEntry,
//   ...
// ]

//! ======================================
//! CADA ENTRY CONTIENE
//! ======================================

// entry.target
//? elemento observado

// entry.isIntersecting
//? indica si es visible

// entry.intersectionRatio
//? porcentaje visible

// entry.boundingClientRect
//? posición del elemento

// entry.time
//? momento en que ocurrió el cambio

//! ======================================
//! ¿POR QUÉ FOREACH?
//! ======================================

//? el callback puede recibir
//? varias entradas al mismo tiempo

entries.forEach(entry => {
  // procesar cada sección
});

//! ======================================
//! DIFERENCIA CON LA VERSIÓN ANTERIOR
//! ======================================

//? antes

const [entry] = entries;

//? solo se procesaba
//? la primera entrada

//? ahora

entries.forEach(entry => {
  // procesa TODAS las entradas
});

//? más genérico y reutilizable

//! ======================================
//! IDEA CLAVE
//! ======================================

//! entries
//! → lista de cambios detectados

//! entry
//! → información de un elemento observado

//! ======================================
//! LAZY LOADING DE IMÁGENES
//! ======================================

//? cargar imágenes únicamente
//? cuando estén cerca del viewport

const imgTargets = document.querySelectorAll('img[data-src]');

//? selecciona solo las imágenes
//? que tienen el atributo data-src

//! ======================================
//! CALLBACK DEL OBSERVER
//! ======================================

//? se ejecuta cuando una imagen
//? cambia su visibilidad

const loadImg = function (entries, observer) {
  entries.forEach(entry => {
    //! si la imagen aún no es visible
    //! no hacer nada

    if (!entry.isIntersecting) return;

    //! ======================================
    //! REEMPLAZAR LA IMAGEN
    //! ======================================

    //? cambiar la imagen de baja calidad
    //? por la imagen original

    entry.target.src = entry.target.dataset.src;

    //! ======================================
    //! ELIMINAR EFECTO BORROSO
    //! ======================================

    //? quitar la clase de desenfoque

    entry.target.classList.remove('lazy-img');

    //! ======================================
    //! DEJAR DE OBSERVAR
    //! ======================================

    observer.unobserve(entry.target);
  });
};

//! ======================================
//! CREAR OBSERVER
//! ======================================

const imgObserver = new IntersectionObserver(loadImg, {
  //! viewport

  root: null,

  //! apenas entra al viewport

  threshold: 0,

  //! comenzar a cargar
  //! 150px antes de que aparezca

  rootMargin: '150px',
});

//! ======================================
//! OBSERVAR TODAS LAS IMÁGENES
//! ======================================

imgTargets.forEach(img => imgObserver.observe(img));

//! ======================================
//! DATASET
//! ======================================

// HTML:
//
// <img
//   src="img-low.jpg"
//   data-src="img.jpg"
// >

//? data-src se accede mediante:

entry.target.dataset.src;

//! ======================================
//! ¿POR QUÉ USAR DATA-SRC?
//! ======================================

//? src
//? imagen pequeña (rápida)

//? data-src
//? imagen original (alta calidad)

//? solo se carga cuando es necesaria

//! ======================================
//! ROOTMARGIN
//! ======================================

//? amplía o reduce el área
//? donde se activa el observer

rootMargin: '150px';

//? empieza a cargar la imagen
//? antes de que sea visible

//? mejora la experiencia
//? porque la imagen ya estará lista
//? cuando el usuario llegue a ella

//! ======================================
//! UNOBSERVE()
//! ======================================

//? la imagen solo necesita
//? cargarse una vez

observer.unobserve(entry.target);

//! ======================================
//! FLUJO
//! ======================================

//? 1. cargar imagen pequeña

//? 2. observar la imagen

//? 3. el usuario hace scroll

//? 4. la imagen entra al área
//?    definida por rootMargin

//? 5. reemplazar src

//? 6. quitar efecto borroso

//? 7. dejar de observar

//! ======================================
//! IDEA CLAVE
//! ======================================

//! src
//! → imagen inicial

//! data-src
//! → imagen real

//! IntersectionObserver
//! → decide cuándo cargarla

//! ======================================
//! SLIDER (CARRUSEL)
//! ======================================

//? seleccionar elementos del slider

const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const dotContainer = document.querySelector('.dots');

//! ======================================
//! VARIABLES DEL SLIDER
//! ======================================

//? diapositiva actual

let curSlide = 0;

//? número total de diapositivas

const maxSlide = slides.length;

const slider = document.querySelector('.slider');

// slider.style.transform = 'scale(0.4)';
// slider.style.overflow = 'visible';

//! ======================================
//! CREAR INDICADORES (DOTS)
//! ======================================

//? crear un punto por cada diapositiva

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot"
        data-slide="${i}">
      </button>`,
    );
  });
};

//! ======================================
//! ACTIVAR DOT
//! ======================================

//? resaltar el punto correspondiente
//? a la diapositiva actual

const activateDot = function (slide) {
  //! quitar el estado activo
  //! de todos los puntos

  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  //! activar el punto actual

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

//! ======================================
//! CREAR DOTS
//! ======================================

createDots();

//! ======================================
//! MOVER A UNA DIAPOSITIVA
//! ======================================

//? posicionar todas las diapositivas

const goToSlide = function (slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });

  activateDot(slide);
};

//? estado inicial

goToSlide(0);

//! ======================================
//! ¿CÓMO FUNCIONA translateX?
//! ======================================

//? slide = 0

// slide 0 → 0%
// slide 1 → 100%
// slide 2 → 200%

//? slide = 1

// slide 0 → -100%
// slide 1 → 0%
// slide 2 → 100%

//? siempre la diapositiva actual
//? queda en translateX(0%)

//! ======================================
//! SIGUIENTE DIAPOSITIVA
//! ======================================

const nextSlide = function () {
  //! si estamos en la última
  //! volver al inicio

  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;

  goToSlide(curSlide);
};

//! ======================================
//! DIAPOSITIVA ANTERIOR
//! ======================================

const prevSlide = function () {
  //! si estamos en la primera
  //! ir a la última

  if (curSlide === 0) curSlide = maxSlide - 1;
  else curSlide--;

  goToSlide(curSlide);
};

//! ======================================
//! BOTONES DEL SLIDER
//! ======================================

//? siguiente

btnRight.addEventListener('click', nextSlide);

//? anterior

btnLeft.addEventListener('click', prevSlide);

//! ======================================
//! NAVEGACIÓN CON TECLADO
//! ======================================

//? ArrowRight → siguiente

//? ArrowLeft → anterior

document.addEventListener('keydown', function (e) {
  e.key === 'ArrowRight' && nextSlide();

  e.key === 'ArrowLeft' && prevSlide();
});

//! ======================================
//! EVENT DELEGATION EN LOS DOTS
//! ======================================

//? escuchar todos los botones
//? desde su contenedor

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    //! obtener el número
    //! del slide

    curSlide = Number(e.target.dataset.slide);

    goToSlide(curSlide);
  }
});

//! ======================================
//! DATASET
//! ======================================

// HTML:
//
// <button
//   data-slide="2">
// </button>

//? acceder al atributo

e.target.dataset.slide;

//! ======================================
//! FLUJO DEL SLIDER
//! ======================================

//? 1. crear dots

//? 2. mostrar slide inicial

//? 3. usuario pulsa botón

//? 4. actualizar curSlide

//? 5. mover diapositivas

//? 6. actualizar dot activo

//! ======================================
//! IDEA CLAVE
//! ======================================

//! curSlide
//! → controla el estado

//! translateX()
//! → mueve las diapositivas

//! activateDot()
//! → sincroniza los indicadores

//! ======================================
//! CICLO DE VIDA DE UNA PÁGINA
//! ======================================

//? existen eventos que indican
//? en qué etapa se encuentra
//? la carga del documento

//! ======================================
//! DOMContentLoaded
//! ======================================

//? se dispara cuando el HTML
//? ha sido completamente cargado
//? y convertido en el DOM

//? NO espera a que terminen de cargar
//? imágenes, videos o estilos

document.addEventListener('DOMContentLoaded', function (e) {
  console.log(e);
});

//! ======================================
//! LOAD
//! ======================================

//? se dispara cuando TODOS los recursos
//? de la página han terminado de cargar

//? incluye:
//? ✔ HTML
//? ✔ CSS
//? ✔ JavaScript
//? ✔ imágenes
//? ✔ fuentes
//? ✔ videos
//? ✔ iframes

window.addEventListener('load', function (e) {
  console.log(e);
});

//! ======================================
//! BEFOREUNLOAD
//! ======================================

//? se ejecuta justo antes
//? de abandonar la página

//? útil para advertir al usuario
//? sobre cambios sin guardar

// window.addEventListener(
//   'beforeunload',
//   function (e) {

//     e.preventDefault();

//     console.log(e);

//     //! algunos navegadores
//     //! requieren asignar un valor
//     //! para mostrar el diálogo

//     e.returnValue = '';

//   }
// );

//! ======================================
//! ORDEN DE EJECUCIÓN
//! ======================================

// 1. Se descarga el HTML
// 2. Se crea el DOM
// 3. DOMContentLoaded
// 4. Se cargan imágenes,
//    fuentes y demás recursos
// 5. load
// 6. El usuario usa la página
// 7. beforeunload (si sale)

//! ======================================
//! ¿CUÁNDO USAR CADA UNO?
//! ======================================

//! DOMContentLoaded

//? inicializar la aplicación
//? agregar eventos
//? manipular el DOM

//! load

//? trabajar con imágenes
//? tamaños reales de elementos
//? recursos externos

//! beforeunload

//? evitar perder información
//? antes de cerrar o recargar

//! ======================================
//! IDEA CLAVE
//! ======================================

//! DOMContentLoaded
//! → el DOM está listo

//! load
//! → toda la página está lista

//! beforeunload
//! → el usuario está por salir

///! ======================================
//! CARGA DE SCRIPTS EN HTML
//! ======================================

//? Existen tres formas principales
//? de cargar un archivo JavaScript:
//
//? 1. Normal
//? 2. async
//? 3. defer

//! ======================================
//! SCRIPT NORMAL
//! ======================================

// HTML:
//
// <script src="script.js"></script>

/*
  HEAD

  1. El navegador comienza
     a analizar el HTML.

  2. Cuando encuentra el
     <script>, detiene el
     procesamiento del HTML.

  3. Descarga el archivo JS
     (si aún no está descargado).

  4. Ejecuta el JavaScript.

  5. Continúa analizando
     el resto del HTML.

  Resultado:
  El HTML queda bloqueado
  mientras el script se descarga
  y se ejecuta.
*/

/*
  BODY (al final)

  1. Se analiza casi todo
     el HTML.

  2. Se encuentra el script.

  3. Se ejecuta.

  Como el DOM ya está casi listo,
  el bloqueo es mucho menor.
*/

//! ======================================
//! SCRIPT ASYNC
//! ======================================

// HTML:
//
// <script async src="script.js"></script>

/*
  HEAD

  1. El navegador analiza
     el HTML.

  2. El JavaScript se descarga
     en paralelo.

  3. Cuando termina de descargarse,
     el navegador DETIENE el HTML.

  4. Ejecuta inmediatamente
     el script.

  5. Continúa analizando
     el HTML.

  Resultado:
  ✔ Descarga paralela.
  ✖ La ejecución puede interrumpir
    el análisis del HTML.
*/

/*
  BODY

  Aunque esté al final,
  async sigue ejecutándose
  tan pronto termina
  la descarga.

  No garantiza el orden
  entre varios scripts.
*/

//! ======================================
//! SCRIPT DEFER
//! ======================================

// HTML:
//
// <script defer src="script.js"></script>

/*
  HEAD

  1. El navegador analiza
     el HTML.

  2. El script se descarga
     en paralelo.

  3. El HTML nunca se detiene.

  4. Cuando el DOM termina
     de construirse,
     el script se ejecuta.

  Resultado:
  ✔ Descarga paralela.
  ✔ No bloquea el HTML.
  ✔ Espera a que el DOM
    esté listo.
*/

/*
  BODY

  Si el script ya está
  al final del body,
  defer aporta muy poco,
  porque el DOM prácticamente
  ya está construido.
*/

//! ======================================
//! ASYNC VS DEFER
//! ======================================

// async
//? descarga en paralelo
//? ejecuta inmediatamente
//? NO mantiene el orden
//? puede interrumpir el HTML

// defer
//? descarga en paralelo
//? ejecuta al terminar el DOM
//? mantiene el orden
//? no bloquea el HTML

//! ======================================
//! ¿CUÁNDO USAR CADA UNO?
//! ======================================

//! Script normal
//? solo para ejemplos
//? o scripts muy pequeños

//! async
//? analytics
//? publicidad
//? scripts independientes

//! defer
//? aplicaciones web
//? scripts que manipulan el DOM
//? varios archivos JS

//! ======================================
//! IDEA CLAVE
//! ======================================

//! Normal
//! → descarga y ejecuta bloqueando

//! async
//! → descarga en paralelo
//! → ejecuta inmediatamente

//! defer
//! → descarga en paralelo
//! → ejecuta al finalizar el DOM
