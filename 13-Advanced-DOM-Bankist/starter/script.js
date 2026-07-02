'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Menu fade animation
const handlerHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
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

// Button Scrollin

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    const e = event.target;
    event.preventDefault();
    if (e.classList.contains('nav__link')) {
      const id = e.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  // Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Paassing "argumnet" into handler
// El objeto del evento (e) se pasa automáticamente como el primer argumento que recibe la función.
nav.addEventListener('mouseover', handlerHover.bind(0.5));

nav.addEventListener('mouseout', handlerHover.bind(1));

// https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener#usecapture

// Stiky navigation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Intersection Observer API
// Eata funcion se llamaras cada vez que el elemento sea observado por el elemto root que sea definido
const obsCallback = function (entries, observer) {
  // entries.forEach(entry => console.log(entry));
};

const obsOptions = {
  root: null,
  threshold: /*0.1*/ [0, 0.2], // Es el limite de observasion // 0% Que el evento se activara cada que se mueva la vista
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(section1);

const obsCallback2 = function (entries, observer) {
  entries.forEach(entry => console.log(entry));

  // if (entry.isIntersecting) nav.classList.add('sticky');
  // else nav.classList.remove('sticky');
};

const obsOptions2 = {
  root: null,
  threshold: /*0.1*/ 1, // Es el limite de observasion // 0% Que el evento se activara cada que se mueva la vista
};

const observer2 = new IntersectionObserver(obsCallback2, obsOptions2);

observer2.observe(nav);
