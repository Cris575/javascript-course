'use strict';

const $ = $class => document.querySelector($class); // returns the first element that matches the selector
const $$ = $$class => document.querySelectorAll($$class); // returns all elements that match the selector

const modal = $('.modal');
const overlay = $('.overlay');
const btnCloseModal = $('.close-modal');
const btnsOpenModal = $$('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < 3; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
