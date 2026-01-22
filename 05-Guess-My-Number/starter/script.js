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

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const message = document.querySelector('.message');


console.log(randomNumber);

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    
    if(!guess){
        message.textContent = '⛔ No number';
        return;
    }

    if(score === 0){
        message.textContent = '💥 You lost the game!';
        return;
    }

    if(guess === randomNumber){
        message.textContent = '🎉 Correct Number!';
        return;
    }

    guess > randomNumber 
    ? message.textContent = '📈 Too high!'
    : message.textContent = '📉 Too low!';

    updateScore();

})

function updateScore(){
    score--;
    document.querySelector('.score').textContent = score;
}
