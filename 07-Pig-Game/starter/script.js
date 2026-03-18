'use strict';

//! ======================================
//! UTILIDADES DE SELECCIÓN DE DOM
//! ======================================

//? $ → primer elemento que coincide con el selector
const $ = $class => document.querySelector($class);

//? $$ → todos los elementos que coinciden con el selector
const $$ = $$class => document.querySelectorAll($$class);

//! ======================================
//! ESTADO DEL JUEGO
//! ======================================

//? puntaje total acumulado de cada jugador [jugador0, jugador1]
const player = [0, 0];

//? referencia al elemento visual del dado
const diceElement = $('.dice');

//? elementos que muestran el puntaje actual (turno en curso) de cada jugador
const currentScore = [$('#current--0'), $('#current--1')];

//? elementos que muestran el puntaje total de cada jugador
const score = [$('#score--0'), $('#score--1')];

//? elementos de las pantallas de cada jugador
const playerScreen = [$('.player--0'), $('.player--1')];

//? cara actual del dado
let diceFace = 0;

//? suma acumulada del turno actual
let diceValue = 0;

//? indica cuál jugador tiene el turno (0 o 1)
let currentPlayer = 0;

//! ======================================
//! FUNCIÓN: INICIALIZAR JUEGO
//! ======================================

const init = function () {
  //? reinicia todas las variables del juego
  diceFace = 0;
  diceValue = 0;
  currentPlayer = 0;

  player[0] = 0;
  player[1] = 0;

  //? resetea puntajes en el DOM
  score[0].innerText = 0;
  score[1].innerText = 0;

  currentScore[0].innerText = 0;
  currentScore[1].innerText = 0;

  //? elimina la clase ganador de ambos jugadores
  playerScreen[0].classList.remove('player--winner');
  playerScreen[1].classList.remove('player--winner');

  //? activa el jugador 0 y desactiva el jugador 1
  playerScreen[0].classList.add('player--active');
  playerScreen[1].classList.remove('player--active');

  //? oculta el dado al inicio
  diceElement.classList.add('hiden');
};

//! ======================================
//! FUNCIÓN: GENERAR NÚMERO ALEATORIO DE DADO
//! ======================================

const GetRandomNumber = function () {
  //? devuelve un entero entre 1 y 6
  // return Math.trunc(Math.random() * (6 - 1 + 1) + 1);
  return Math.floor(Math.random() * 6) + 1;
};

//! ======================================
//! FUNCIÓN: CAMBIAR IMAGEN DEL DADO
//! ======================================

const SetDiceImage = function (value) {
  //? actualiza el src de la imagen del dado según el valor
  diceElement.src = `dice-${value}.png`;
};

//! ======================================
//! FUNCIÓN: MOSTRAR PUNTAJE ACTUAL DEL TURNO
//! ======================================

const SetValueOfDice = function (playerNumber, value) {
  //? actualiza el texto del puntaje actual del jugador
  currentScore[playerNumber].innerText = value;
};

//! ======================================
//! FUNCIÓN: ACUMULAR PUNTAJE AL PUNTAJE TOTAL
//! ======================================

const SaveValueOfDice = function (playerNumber, saveValue) {
  //? suma el puntaje del turno al total del jugador
  player[playerNumber] += saveValue;
};

//! ======================================
//! FUNCIÓN: ACTUALIZAR PUNTAJE TOTAL EN PANTALLA
//! ======================================

const SetEcoreOfPlayer = function (playerNumber) {
  //? muestra el puntaje total acumulado del jugador
  score[playerNumber].innerText = player[playerNumber];
};

//! ======================================
//! FUNCIÓN: CAMBIAR DE TURNO
//! ======================================

const ChangePlayerTurn = function () {
  //? alterna entre jugador 0 y jugador 1
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);

  ToggleSacreen();

  //? reinicia el puntaje del turno
  diceValue = 0;
};

//! ======================================
//! FUNCIÓN: ALTERNAR PANTALLA ACTIVA
//! ======================================

const ToggleSacreen = function () {
  //? toggle agrega/elimina la clase activa en cada jugador
  playerScreen[0].classList.toggle('player--active');
  playerScreen[1].classList.toggle('player--active');
};

//! ======================================
//! FUNCIÓN: VERIFICAR FIN DE JUEGO
//! ======================================

const EndGame = function (playerNumber) {
  //? devuelve true si el jugador alcanzó 100 puntos
  return player[playerNumber].score >= 100;
};

//! ======================================
//! EVENTO: BOTÓN TIRAR DADO
//! ======================================

$('.btn--roll').addEventListener('click', function () {
  //? genera un número de dado aleatorio
  diceFace = GetRandomNumber();
  diceValue += diceFace;

  //? muestra el dado al tirar
  diceElement.classList.remove('hiden');

  //! CASO ESPECIAL: si el dado cae en 1
  //? se pierde el turno y el puntaje acumulado
  if (diceFace == 1) {
    diceValue = 0;
    SetValueOfDice(currentPlayer, diceValue);
    ChangePlayerTurn();
    SetDiceImage(diceFace);
    return;
  }

  //? actualiza la pantalla con el puntaje del turno
  SetValueOfDice(currentPlayer, diceValue);
  SetDiceImage(diceFace);
});

//! ======================================
//! EVENTO: BOTÓN GUARDAR PUNTAJE
//! ======================================

$('.btn--hold').addEventListener('click', function () {
  //? guarda el puntaje del turno en el total del jugador
  SaveValueOfDice(currentPlayer, diceValue);

  //? reinicia el puntaje del turno a 0
  SetValueOfDice(currentPlayer, 0);

  //? actualiza el puntaje total en pantalla
  SetEcoreOfPlayer(currentPlayer);

  //! CASO ESPECIAL: si el jugador ganó
  if (EndGame(currentPlayer)) {
    //? elimina el estilo activo y resalta como ganador
    playerScreen[currentPlayer].classList.remove('player--active');
    playerScreen[currentPlayer].classList.add('player--winner');
    return;
  }

  //? si no ganó, cambia de turno
  ChangePlayerTurn();
});

//! ======================================
//! EVENTO: BOTÓN NUEVO JUEGO
//! ======================================

//? reinicia todo el juego al hacer clic
$('.btn--new').addEventListener('click', init);
