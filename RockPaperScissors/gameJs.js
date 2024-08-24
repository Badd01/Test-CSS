const getComputerChoice = () => {
  let x = Math.floor(Math.random() * 3);
  if (x == 0) return "rock";
  if (x == 1) return "paper";
  if (x == 2) return "scissors";
};

function playRound(humanChoice, computerChoice) {
  let x = humanChoice.toLowerCase();
  let y = computerChoice;

  if (x != "paper" && x != "rock" && x != "scissors") {
    alert("Again");
  }
  if (
    (x == "paper" && y == "rock") ||
    (x == "rock" && y == "scissors") ||
    (x == "scissors" && y == "paper")
  ) {
    return "Win";
  } else if (x == y) {
    return "Draw";
  } else {
    return "Lose";
  }
}

const playGame = (playRound, humanScore, computerScore) => {
  if (playRound == "Win") {
    humanScore++;
    console.log("Your Score:" + humanScore, "Computer Score: " + computerScore);
    return [humanScore, computerScore];
  }
  if (playRound == "Lose") {
    computerScore++;
    console.log("Your Score:" + humanScore, "Computer Score: " + computerScore);
    return [humanScore, computerScore];
  }
  if (playRound == "Draw") {
    console.log("Your Score:" + humanScore, "Computer Score: " + computerScore);
    return [humanScore, computerScore];
  }
};
let round = 0;
let humanScore = 0;
let computerScore = 0;

const getHumanChoice = (humanSelection) => {
  if (round < 5) {
    const computerSelection = getComputerChoice();
    const playResult = playRound(humanSelection, computerSelection);
    [humanScore, computerScore] = playGame(
      playResult,
      humanScore,
      computerScore
    );
    round++;
  } else {
    document.querySelector(
      "#result"
    ).textContent = `Result: You${humanScore} - Computer${computerScore}`;
  }
};
document.querySelector("#rock").addEventListener("click", () => {
  getHumanChoice("rock");
});
document.querySelector("#paper").addEventListener("click", () => {
  getHumanChoice("paper");
});
document.querySelector("#scissors").addEventListener("click", () => {
  getHumanChoice("scissors");
});
