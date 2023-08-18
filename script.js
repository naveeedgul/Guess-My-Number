'use strict';
const number = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const highScoreLabel = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');

let score = 20;
let highScore = 0;

let randNumber = Math.trunc(Math.random() * 20 + 1);
checkBtn.addEventListener('click', function () {
  if (guess.value == randNumber) {
    message.textContent = `Congrats you guessed it right`;
    number.textContent = randNumber;
    document.body.style.backgroundColor = `Green`;
    if (score > highScore) {
      highScoreLabel.textContent = score;
    }
  } else if (guess.value !== randNumber) {
    if (guess.value < randNumber) {
      message.textContent = `Too Low`;
      score--;
      scoreLabel.textContent = score;
    } else if (guess.value > randNumber) {
      message.textContent = `Too High`;
      score--;
      scoreLabel.textContent = score;
    }
  }
});
againBtn.addEventListener('click', function () {
  score = 20;
  scoreLabel.textContent = `20`;
  randNumber = Math.trunc(Math.random() * 20 + 1);
  guess.value = '';

  number.textContent = `?`;
  message.textContent = `Start guessing...`;
  document.body.style.backgroundColor = `#222`;
});
