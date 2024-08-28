let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const clickEvent = (e) => {

  e.preventDefault();
  const guess = Number(document.querySelector(".guess-box").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".guess-result").textContent = "No Number!🚫";
  } else if (guess === secretNumber) {
    document.querySelector(".guess-result").textContent = "Correct Number!🎉";
    document.querySelector(".guess").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".highscore-value").textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".guess-result").textContent = "Too high!📈";
      score--;
      document.querySelector(".score-value").textContent = score;
    } else {
      document.querySelector(".guess-result").textContent =
        "You lost the game!😓";
      document.querySelector(".score-value").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".guess-result").textContent = "Too low!📉";
      score--;
      document.querySelector(".score-value").textContent = score;
    } else {
      document.querySelector(".guess-result").textContent =
        "You lost the game!😓";
      document.querySelector(".score-value").textContent = 0;
    }
  }
};

const inputEle = document.querySelector(".check-box");
inputEle.addEventListener('click', clickEvent)

document.querySelector(".again-text").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess-result").textContent = "Start guessing....";
  document.querySelector(".score-value").textContent = score;
  document.querySelector("body").style.backgroundColor = "rgb(21, 18, 18)";
  document.querySelector(".guess").textContent = "?";
  document.querySelector(".guess-box").value = " ";
});
