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

let randomNumber;
let highscore = 0;
let score = 20;
const message = document.querySelector('.message');

document.querySelector('.again').addEventListener('click', resetGame);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '⛔ No number';
    return;
  }

  if (score === 0) {
    message.textContent = '💥 You lost the game!';
    return;
  }

  if (guess === randomNumber) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector(".number").style.width = "30rem";
    showCorrectNumber();
  setHighscore();
    return;
  }

  guess > randomNumber
    ? (message.textContent = '📈 Too high!')
    : (message.textContent = '📉 Too low!');

  updateScore();
});

function updateScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function showCorrectNumber() {
  document.querySelector('.number').textContent = randomNumber;
}

function generateRandomNumber() {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
}

function resetGame() {
  document.querySelector('.score').textContent = 20;
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  generateRandomNumber();
}

function setHighscore() {
  if(score > highscore)
    highscore = score;
  
  document.querySelector('.highscore').textContent = highscore;
}
