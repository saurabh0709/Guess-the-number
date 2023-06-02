let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }

  if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Numberc🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30%";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  if (guess !== secretNumber) {
    if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "Too low!📉";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "you lost!";
        document.querySelector(".score").textContent = 0;
      }
    }
    if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "Too high!📉";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "you lost!";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "20%";
  document.querySelector(".guess").value = "";
});

