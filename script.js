// document.addEventListener("DOMContentLoaded", function () {
//   const ruleButton = document.querySelector(".rule-btn");
//   const ruleBox = document.querySelector(".rule-box");
//   const crossButton = document.querySelector(".cross-btn");

//   ruleBox.style.display = "none";

//   function hideRuleBox() {
//     ruleBox.style.display = "none";
//   }
//   function showRuleBox() {
//     ruleBox.style.display = "block";
//   }
//   ruleButton.addEventListener("click", showRuleBox);
//   crossButton.addEventListener("click", hideRuleBox);

//   //implementing game's logic
//   // const rock = document.querySelector(".rock");
//   // const paper = document.querySelector(".paper");
//   // const scissor = document.querySelector(".scissor");

//   const score = JSON.parse(localStorage.getItem("score")) || {
//     computer: 0,
//     your: 0,
//   };
//   function playGame(playerMove) {
//     const computerMove = pickComputerMove();
//     let result = "";

//     if (playerMove === "scissor") {
//       if (computerMove === "rock") {
//         result = "You lose";
//       } else if (computerMove === "paper") {
//         result = "You win";
//       } else if (computerMove === "scissor") {
//         result = "tie";
//       }
//     } else if (playerMove === "paper") {
//       if (computerMove === "rock") {
//         result = "You win";
//       } else if (computerMove === "paper") {
//         result = "Tie";
//       } else if (computerMove === "scissor") {
//         result = "You lose";
//       }
//     } else if (playerMove === "rock") {
//       if (computerMove === "rock") {
//         result = "Tie";
//       } else if (computerMove === "paper") {
//         result = "You lose";
//       } else if (computerMove === "scissor") {
//         result = "You win";
//       }
//     }
//   } // end of playgame function

//   if (result === "You win") {
//     score.your++;
//     document.querySelector(".your-score").innerHTML = score.your;
//   } else if (result === "You lose") {
//     score.computer++;
//     document.querySelector(".computer-score").innerHTML = score.computer;
//   }

//   localStorage.setItem("score", JSON.stringify(score));

//   function updateScore() {
//     if (result === "You win") {
//       document.querySelector(".your-score").innerHTML = score.wins;
//       document.querySelector("computer-score").innerHTML = score.loss;
//     }
//   }

//   function pickComputerMove() {
//     const randomNumber = Math.random();
//     let computerMove = "";

//     if (randomNumber >= 0 && randomNumber < 1 / 3) {
//       computerMove = "rock";
//     } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
//       computerMove = "paper";
//     } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
//       computerMove = "scissor";
//     }
//     return computerMove;
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  const ruleButton = document.querySelector(".rule-btn");
  const ruleBox = document.querySelector(".rule-box");
  const crossButton = document.querySelector(".cross-btn");
  const yourScoreElement = document.querySelector(".your-score");
  const computerScoreElement = document.querySelector(".computer-score");

  ruleBox.style.display = "none";

  function hideRuleBox() {
    ruleBox.style.display = "none";
  }

  function showRuleBox() {
    ruleBox.style.display = "block";
  }

  ruleButton.addEventListener("click", showRuleBox);
  crossButton.addEventListener("click", hideRuleBox);

  const score = JSON.parse(localStorage.getItem("score")) || {
    your: 0,
    computer: 0,
  };

  function playGame(playerMove) {
    console.log("playgame function");
    const computerMove = pickComputerMove();
    let result = "";

    if (playerMove === "scissor") {
      if (computerMove === "rock") {
        result = "You lose";
      } else if (computerMove === "paper") {
        result = "You win";
      } else if (computerMove === "scissor") {
        result = "Tie";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You win";
      } else if (computerMove === "paper") {
        result = "Tie";
      } else if (computerMove === "scissor") {
        result = "You lose";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie";
      } else if (computerMove === "paper") {
        result = "You lose";
      } else if (computerMove === "scissor") {
        result = "You win";
      }
    }

    if (result === "You win") {
      score.your++;
    } else if (result === "You lose") {
      score.computer++;
    }

    yourScoreElement.textContent = score.your;
    computerScoreElement.textContent = score.computer;

    localStorage.setItem("score", JSON.stringify(score));
  }

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
});
