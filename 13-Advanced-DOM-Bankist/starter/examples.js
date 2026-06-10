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
