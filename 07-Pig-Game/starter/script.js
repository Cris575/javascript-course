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
const playerScreen = [$('.player--0'), $('.player--1')];

let diceFace = 0;
let diceValue = 0;
// let numberOfAttempts = 0;
let currentPlayer = 0;

const init = function () {
  diceFace = 0;
  diceValue = 0;
  currentPlayer = 0;

  player[0].score = 0;
  player[1].score = 0;

  score[0].innerText = 0;
  score[1].innerText = 0;

  currentScore[0].innerText = 0;
  currentScore[1].innerText = 0;

  ToggleSacreen();
};

const GetRandomNumber = function () {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
};

const SetDiceImage = function (value) {
  diceElement.src = `dice-${value}.png`;
};

const SetValueOfDice = function (playerNumber, value) {
  console.log(value);
  currentScore[playerNumber].innerText = value;
};

const SaveValueOfDice = function (playerNumber, saveValue) {
  player[playerNumber].score += saveValue;
};

const SetEcoreOfPlayer = function (playerNumber) {
  score[playerNumber].innerText = player[playerNumber].score;
};

const ChangePlayerTurn = function () {
  currentPlayer = currentPlayer == 1 ? 0 : 1;
  ToggleSacreen();
  diceValue = 0;
};

const ToggleSacreen = function () {
  playerScreen[0].classList.toggle('player--active');
  playerScreen[1].classList.toggle('player--active');
};

const EndGame = function (playerNumber) {
  return player[playerNumber].score >= 100;
};

$('.btn--roll').addEventListener('click', function () {
  diceFace = GetRandomNumber();
  diceValue += diceFace;

  if (diceFace == 1) {
    diceValue = 0;
    SetValueOfDice(currentPlayer, diceValue);
    ChangePlayerTurn();
    SetDiceImage(diceFace);
    return;
  }

  SetValueOfDice(currentPlayer, diceValue);
  SetDiceImage(diceFace);
});

$('.btn--hold').addEventListener('click', function () {
  if (EndGame(currentPlayer)) {
    playerScreen[currentPlayer].classList.remove('player--active');
    playerScreen[currentPlayer].classList.add('player--winner');
    return;
  }

  SaveValueOfDice(currentPlayer, diceValue);
  SetValueOfDice(currentPlayer, 0);
  SetEcoreOfPlayer(currentPlayer);
  ChangePlayerTurn();
});

$('.btn--new').addEventListener('click', init);
