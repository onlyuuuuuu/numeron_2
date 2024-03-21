// Iteration 8: Making scoreboard functional
const playAgainBtn = document.getElementById("play-again-button");
const scoreBoard = document.getElementById("score-board");

if (playAgainBtn) {
  playAgainBtn.onclick = () => {
    window.location.href = "./index.html";
  };
}

const score = localStorage.getItem("score");
if (scoreBoard && score) {
  scoreBoard.innerText = score;
}
