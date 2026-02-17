'use strict';

const $ = $class => document.querySelector($class);
const $$ = $$class => document.querySelectorAll($$class);

const player = [0, 0];
const diceElement = $('.dice');
const currentScore = [$('#current--0'), $('#current--1')];
const score = [$('#score--0'), $('#score--1')];
const playerScreen = [$('.player--0'), $('.player--1')];

let diceFace = 0;
let diceValue = 0;
let currentPlayer = 0;

const init = function () {
  diceFace = 0;
  diceValue = 0;
  currentPlayer = 0;

  player[0] = 0;
  player[1] = 0;

  score[0].innerText = 0;
  score[1].innerText = 0;

  currentScore[0].innerText = 0;
  currentScore[1].innerText = 0;

  playerScreen[0].classList.remove('player--winner');
  playerScreen[1].classList.remove('player--winner');

  playerScreen[0].classList.add('player--active');
  playerScreen[1].classList.remove('player--active');

  diceElement.classList.add('hiden');
};

const GetRandomNumber = function () {
  // return Math.trunc(Math.random() * (6 - 1 + 1) + 1);
  return Math.floor(Math.random() * 6) + 1;
};

const SetDiceImage = function (value) {
  diceElement.src = `dice-${value}.png`;
};

const SetValueOfDice = function (playerNumber, value) {
  currentScore[playerNumber].innerText = value;
};

const SaveValueOfDice = function (playerNumber, saveValue) {
  player[playerNumber] += saveValue;
};

const SetEcoreOfPlayer = function (playerNumber) {
  score[playerNumber].innerText = player[playerNumber];
};

const ChangePlayerTurn = function () {
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
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
  diceElement.classList.remove('hiden');

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
  SaveValueOfDice(currentPlayer, diceValue);
  SetValueOfDice(currentPlayer, 0);
  SetEcoreOfPlayer(currentPlayer);

  if (EndGame(currentPlayer)) {
    playerScreen[currentPlayer].classList.remove('player--active');
    playerScreen[currentPlayer].classList.add('player--winner');
    return;
  }

  ChangePlayerTurn();
});

$('.btn--new').addEventListener('click', init);
