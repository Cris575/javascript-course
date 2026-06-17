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

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');

const allButtons = document.getElementsByTagName('button');

const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML =
  'We use cookies <button class="btn btn--close-cookie">Got it!</button>';

header.after(message);

const copy = message.cloneNode(true);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//Solo funciona si los estilos estan establecsidos en el css
console.log(message.style.height);

console.log(message.style.backgroundColor);

//Solo funciona si los estilos estan establecsidos en el css
console.log(message.style.color);

console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.id);
console.log(logo.className);
logo.setAttribute('comppany', 'Bankist');

console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// data attibutes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use
logo.className = 'Jonas';
