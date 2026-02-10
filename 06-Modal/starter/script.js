'use strict';

const $ = $class => document.querySelector($class); // returns the first element that matches the selector
const $$ = $$class => document.querySelectorAll($$class); // returns all elements that match the selector

const modal = $('.modal');
const overlay = $('.overlay');
const btnCloseModal = $('.close-modal');
const btnsOpenModal = $$('.show-modal');

for (let i = 0; i < 3; i++) {
    console.log(btnsOpenModal[i].textContent)
}