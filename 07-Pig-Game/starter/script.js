'use strict';

const $ = $class => document.querySelector($class);
const $$ = $$class => document.querySelectorAll($$class);

// const score = [0, 0];
const player = {
  0: {
    numaberPlayer: 1,
    score: 0,
  },
  1: {
    numaberPlayer: 2,
    score: 0,
  },
};
// const numaberPlayer = [1, 2];
const diceElement = $('.dice');
const currentScore = [$('#current--0'), $('#current--1')];
const score = [$('#score--0'), $('#score--1')];

let diceFace = 0;
// let numberOfAttempts = 0;
let currentPlayer = 0;

const GetRandomNumber = function () {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
};

const SetDiceImage = function (value) {
  diceElement.src = `dice-${value}.png`;
};

const SetValueOfDice = function (playerNumber, value) {
  currentScore[playerNumber].innerText = value;
};

const SaveValueOfDice = function (playerNumber, saveValue) {
  player[playerNumber].score += saveValue;
};

const SetEcoreOfPlayer = function (playerNumber) {
  score[playerNumber].innerText = player[playerNumber].score;
};

$('.btn--roll').addEventListener('click', function () {
  diceFace = GetRandomNumber();
  console.log(diceFace);
  if (diceFace == 1) {
    currentPlayer = currentPlayer == 1 ? 0 : 1;
  }
  console.log('jugador: ' + currentPlayer);

  SetDiceImage(diceFace);
  SetValueOfDice(currentPlayer, diceFace);
});

$('.btn--hold').addEventListener('click', function () {
  SaveValueOfDice(currentPlayer, diceFace);
  SetEcoreOfPlayer(currentPlayer);
});
