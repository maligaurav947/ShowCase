const resultUser = document.getElementById("resultContainerUser");
const resultComputer = document.getElementById("resultContainerComputer");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resetBtn = document.getElementById("reset");
const winnerorNot = document.getElementById("winnerornot");
const mainbody = document.getElementById("body");
const scoreUser = document.getElementById("scoreuser");
const scoreComputer = document.getElementById("scorecomputer");
var scorecomputerNo = 1;
var scoreuserNO = 1;
let computerChoise;

rockBtn.addEventListener("click", () => {
  resultUser.innerHTML = rockBtn.value;
  generateComputerChoise();
  winnerORNot();
  //score();
});

paperBtn.addEventListener("click", () => {
  resultUser.innerHTML = paperBtn.value;
  generateComputerChoise();
  winnerORNot();
  //score();
});

scissorsBtn.addEventListener("click", () => {
  resultUser.innerHTML = scissorsBtn.value;
  generateComputerChoise();
  winnerORNot();
  //score();
});

resetBtn.addEventListener("click", () => {
  resultUser.innerText = "";
  resultComputer.innerText = "";
  winnerorNot.innerHTML = "";
  mainbody.style.backgroundColor = "";
});

function generateComputerChoise() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoise = "Rock";
  }
  if (randomNumber === 2) {
    computerChoise = "Paper";
  }
  if (randomNumber === 3) {
    computerChoise = "Scissors";
  }
  resultComputer.innerHTML = computerChoise;
}

function winnerORNot() {
  if (resultUser.innerHTML == resultComputer.innerHTML) {
    winnerorNot.innerHTML = "You Win";
    mainbody.style.backgroundColor = "#6CC551";
    if (winnerorNot.innerHTML == "You Win") {
      scoreUser.innerHTML = scoreuserNO;
      scoreuserNO++;
    }
  } else {
    winnerorNot.innerHTML = "You Loose";
    mainbody.style.backgroundColor = "#9F2042";
    if (winnerorNot.innerHTML == "You Loose") {
      scoreComputer.innerHTML = scorecomputerNo;
      scorecomputerNo++;
    }
  }
}
