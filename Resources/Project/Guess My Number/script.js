let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,
  highscore = 0;

// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    document.querySelector('.message').textContent = `⛔ NO NUMBER`;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🙌  Corret Number`;

    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? `⤴ To High` : `⤵ To Low`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      loseGame();
    }
  }
});

//Adding Action On Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = '"Start Guessing...."';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});

//Lose game Message
const loseGame = function () {
  document.querySelector('.message').textContent = '🔴  You Lose The Game';
  document.querySelector('body').style.backgroundColor = 'red';
};
