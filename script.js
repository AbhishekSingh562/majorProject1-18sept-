document.addEventListener("DOMContentLoaded", function () {
  const ruleButton = document.querySelector(".rule-btn");
  const ruleBox = document.querySelector(".rule-box");
  const crossButton = document.querySelector(".cross-btn");

  ruleBox.style.display = "none";

  function hideRuleBox() {
    ruleBox.style.display = "none";
  }

  function showRuleBox() {
    ruleBox.style.display = "block";
  }

  ruleButton.addEventListener("click", showRuleBox);
  crossButton.addEventListener("click", hideRuleBox);

  const yourScoreElement = document.querySelector(".your-score");
  const computerScoreElement = document.querySelector(".computer-score");

  yourScoreElement.textContent = score.your;
  computerScoreElement.textContent = score.computer;

  const replayButton = document.querySelector(".display button");
  const container1 = document.querySelector(".container1");
  const container2 = document.querySelector(".container2");

  replayButton.addEventListener("click", () => {
    container2.style.display = "none";
    container1.style.display = "block";
  });

  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissor = document.querySelector(".scissor");

  function updateComputerMove(move) {
    const computerMoveElement = document.getElementById("computer-move");
    computerMoveElement.innerHTML = `<img src="images/${move}.png">`;
  }

  rock.addEventListener("click", () => {
    container1.style.display = "none";
    container2.style.display = "block";
    document.getElementById("your-move").innerHTML =
      '<img src="images/rock.png">';
    const computerMove = pickComputerMove();
    updateComputerMove(computerMove);
  });
  paper.addEventListener("click", () => {
    container1.style.display = "none";
    container2.style.display = "block";
    document.getElementById("your-move").innerHTML =
      '<img src="images/paper.png">';
    const computerMove = pickComputerMove();
    updateComputerMove(computerMove);
  });
  scissor.addEventListener("click", () => {
    container1.style.display = "none";
    container2.style.display = "block";
    document.getElementById("your-move").innerHTML =
      '<img src="images/scissor.png">';
    const computerMove = pickComputerMove();
    updateComputerMove(computerMove);
  });
});

const score = JSON.parse(localStorage.getItem("score")) || {
  your: 0,
  computer: 0,
};

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissor";
  }
  return computerMove;
}

function playGame(playerMove) {
  console.log("playgame function");
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You lose";
      document.querySelector(".display-result").textContent = result;
    } else if (computerMove === "paper") {
      result = "You win";
      document.querySelector(".display-result").textContent = result;
    } else if (computerMove === "scissor") {
      result = "Game Tie";
      document.querySelector(".display-result").textContent = result;
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
      document.querySelector(".display-result").textContent = result;
    } else if (computerMove === "paper") {
      result = "Game Tie";
      document.querySelector(".display-result").textContent = result;
    } else if (computerMove === "scissor") {
      result = "You lose";
      document.querySelector(".display-result").textContent = result;
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Game Tie";
      document.querySelector(".display-result").textContent = result;
    } else if (computerMove === "paper") {
      result = "You lose";
      document.querySelector(".display-result").textContent = result;
    } else if (computerMove === "scissor") {
      result = "You win";
      document.querySelector(".display-result").textContent = result;
    }
  }

  if (result === "You win") {
    score.your++;
  } else if (result === "You lose") {
    score.computer++;
  }
  const yourScoreElement = document.querySelector(".your-score");
  const computerScoreElement = document.querySelector(".computer-score");

  yourScoreElement.textContent = score.your;
  computerScoreElement.textContent = score.computer;

  localStorage.setItem("score", JSON.stringify(score));
}
