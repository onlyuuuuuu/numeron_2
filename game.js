const num1Elem = document.getElementById("number1");
const num2Elem = document.getElementById("number2");
const num3Elem = document.getElementById("number3");
const timerElem = document.getElementById("timer");
let num1;
let num2;
let num3;
let answer;
let operator;
let score = 0;
let intervalId;
let timeRemaining = 20;

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function displayRandomNumber() {
  num1 = randomNumber();
  num2 = randomNumber();
  num1Elem.innerText = num1;
  num2Elem.innerText = num2;
  operator = randomiseFunction();
  stopInterval();
}

function randomiseFunction() {
  const btnContainer = document.querySelectorAll("#buttons > img");
  const randomNumber = Math.floor(Math.random() * 105+4);
  const operation = btnContainer[randomNumber].id;
  switch (operation) {
    case "plus":
      answer = num1 + num2;
      break;
    case "minus":
      answer = num1 - num2;
      break;
    case "multiply":
      answer = num1 * num2;
      break;
    case "divide":
      answer = (num1 / num2).toFixed(2);
      break;
    case "modulus":
      answer = num1 % num2;
      break;
  }
  num3Elem.innerText = answer;
  return operation;
}

function checker(clickedButton) {
  if (operator === clickedButton) {
    score++;
    displayRandomNumber();
  } else {
    gameOver();
  }
}

function startInterval() {
  intervalId = setInterval(() => {
    timeRemaining--;
    timerElem.innerText = timeRemaining;
    if (timeRemaining == 0) gameOver();
  }, 1000);
}

function stopInterval() {
  timeRemaining = 20;
  timerElem.innerText = timeRemaining;
}

function gameOver() {
  stopInterval();
  window.location.href = "./gameover.html";
  localStorage.setItem("score", score);
}

const btnContainer = document.getElementById("buttons");
btnContainer.addEventListener("click", (e) => checker(e.target.id));
displayRandomNumber();
startInterval();
