'use strict';

const $ = element => document.querySelector(element);
const $$ = elements => document.querySelectorAll(elements);

// $('.number').textContent = '13';
// $('.score').textContent = '10';
// console.log($('.guess').value);
// $('.guess').value = 23;
// console.log($('.guess').value);

let count = 0;

$('.check').addEventListener('click', function () {
  $('.guess').value = count += 1;
});
