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

let randomNumber = generateRandomNumber();
let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', resetGame);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number');
    return;
  }

  if (score === 0) {
    displayMessage('💥 You lost the game!');
    return;
  }

  if (guess === randomNumber) {
    displayMessage('🎉 Correct Number!');
    winGame();
    return;
  }

  guess > randomNumber
    ? displayMessage('📈 Too high!')
    : displayMessage('📉 Too low!');

  updateScore();
});

function winGame() {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector(".number").style.width = "30rem";
  showCorrectNumber();
  setHighscore();
}

function updateScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function showCorrectNumber() {
  document.querySelector('.number').textContent = randomNumber;
}

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function resetGame() {
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  randomNumber = generateRandomNumber();
}

function setHighscore() {
  if (score > highscore) highscore = score;
  document.querySelector('.highscore').textContent = highscore;
}
