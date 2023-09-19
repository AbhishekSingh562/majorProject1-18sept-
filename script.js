document.addEventListener("DOMContentLoaded", function () {
  const ruleButton = document.querySelector(".rule-btn");
  const ruleBox = document.querySelector(".rule-box");
  const crossButton = document.querySelector(".cross-btn");
  const hurrayPage = document.getElementById("hurray-page");
  const nextButton = document.querySelector(".next-btn");
  const container = document.querySelector(".container");
  // const firstPage = document.querySelector(".first-page");
  const playAgainButtom = document.querySelector(".hurray-page button");

  playAgainButtom.addEventListener("click", () => {
    hurrayPage.style.display = "none";
    container1.style.display = "block";
    container.style.display = "block";
  });

  nextButton.addEventListener("click", () => {
    // Hide container1 and container2
    container.style.display = "none";

    // Show the hurray-page
    hurrayPage.style.display = "flex";
  });

  hideRuleBox();
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

  //showing you-picked
  rock.addEventListener("click", () => {
    container1.style.display = "none";
    container2.style.display = "block";
    document.getElementById("your-move").innerHTML =
      '<img src="images/rock.png">';
  });
  paper.addEventListener("click", () => {
    container1.style.display = "none";
    container2.style.display = "block";
    document.getElementById("your-move").innerHTML =
      '<img src="images/paper.png">';
  });
  scissor.addEventListener("click", () => {
    container1.style.display = "none";
    container2.style.display = "block";
    document.getElementById("your-move").innerHTML =
      '<img src="images/scissor.png">';
  });
});

//after dom content load !!
const score = JSON.parse(localStorage.getItem("score")) || {
  your: 0,
  computer: 0,
};

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissor";
  }
  return computerMove;
}

// function updateComputerMove(move) {
//   const computerMoveElement = document.getElementById("computer-move");
//   computerMoveElement.innerHTML = `<img src="images/${move}.png">`;
// }

function playGame(playerMove) {
  console.log("playgame function");
  const computerMove = pickComputerMove();
  const computerMoveElement = document.getElementById("computer-move");
  computerMoveElement.innerHTML = `<img src="images/${computerMove}.png">`;

  // updateComputerMove(computerMove);

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
    const nextButton = document.querySelector(".next-btn");
    nextButton.style.display = "block";
  } else if (result === "You lose") {
    score.computer++;
    const nextButton = document.querySelector(".next-btn");
    nextButton.style.display = "none";
  } else if (result === "Game Tie") {
    const nextButton = document.querySelector(".next-btn");
    nextButton.style.display = "none";
  }

  //score updations
  const yourScoreElement = document.querySelector(".your-score");
  const computerScoreElement = document.querySelector(".computer-score");

  yourScoreElement.textContent = score.your;
  computerScoreElement.textContent = score.computer;

  localStorage.setItem("score", JSON.stringify(score));
}
