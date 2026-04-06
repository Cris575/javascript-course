'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number!';
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//! ======================================
//! VARIABLES DEL JUEGO
//! ======================================

//? número aleatorio generado al inicio del juego
let randomNumber = generateRandomNumber();

//? puntaje más alto alcanzado por el jugador
let highscore = 0;

//? intentos restantes del jugador
let score = 20;

//! ======================================
//! FUNCIÓN: MOSTRAR MENSAJE
//! ======================================

//? función reutilizable para cambiar el mensaje en pantalla
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//! ======================================
//! EVENTO: BOTÓN "OTRA VEZ"
//! ======================================

//? reinicia el juego al hacer clic en el botón "Again"
document.querySelector('.again').addEventListener('click', resetGame);

//! ======================================
//! EVENTO: BOTÓN "CHECK"
//! ======================================

document.querySelector('.check').addEventListener('click', function () {
  //? convierte el valor del input a número
  const guess = Number(document.querySelector('.guess').value);

  //! CASO 1: no se ingresó ningún número
  if (!guess) {
    displayMessage('⛔ No number');
    return;
  }

  //! CASO 2: el jugador se quedó sin intentos
  if (score === 0) {
    displayMessage('💥 You lost the game!');
    return;
  }

  //! CASO 3: el jugador acertó el número
  if (guess === randomNumber) {
    displayMessage('🎉 Correct Number!');
    winGame();
    return;
  }

  //! CASO 4: el número es muy alto o muy bajo
  //? operador ternario para mostrar el mensaje correcto
  guess > randomNumber
    ? displayMessage('📈 Too high!')
    : displayMessage('📉 Too low!');

  updateScore();
});

//! ======================================
//! FUNCIÓN: GANAR EL JUEGO
//! ======================================

function winGame() {
  //? cambia el fondo a verde al ganar
  document.querySelector('body').style.backgroundColor = '#60b347';

  //? amplía el recuadro del número como efecto visual
  document.querySelector('.number').style.width = '30rem';

  showCorrectNumber();
  setHighscore();
}

//! ======================================
//! FUNCIÓN: ACTUALIZAR PUNTAJE
//! ======================================

function updateScore() {
  //? reduce el score en 1 por cada intento fallido
  score--;
  document.querySelector('.score').textContent = score;
}

//! ======================================
//! FUNCIÓN: MOSTRAR EL NÚMERO CORRECTO
//! ======================================

function showCorrectNumber() {
  //? revela el número secreto en pantalla
  document.querySelector('.number').textContent = randomNumber;
}

//! ======================================
//! FUNCIÓN: GENERAR NÚMERO ALEATORIO
//! ======================================

function generateRandomNumber() {
  //? genera un entero entre 1 y 20
  return Math.trunc(Math.random() * 20) + 1;
}

//! ======================================
//! FUNCIÓN: REINICIAR EL JUEGO
//! ======================================

function resetGame() {
  //? limpia el input del jugador
  document.querySelector('.guess').value = '';

  //? restaura el tamaño del recuadro del número
  document.querySelector('.number').style.width = '15rem';

  //? oculta el número secreto
  document.querySelector('.number').textContent = '?';

  //? restaura el score a 20
  document.querySelector('.score').textContent = 20;

  //? restaura el color de fondo original
  document.querySelector('body').style.backgroundColor = '#222';

  displayMessage('Start guessing...');

  //? genera un nuevo número para la nueva partida
  randomNumber = generateRandomNumber();
}

//! ======================================
//! FUNCIÓN: ACTUALIZAR HIGHSCORE
//! ======================================

function setHighscore() {
  //? solo actualiza el highscore si el score actual es mayor
  if (score > highscore) highscore = score;
  document.querySelector('.highscore').textContent = highscore;
}
