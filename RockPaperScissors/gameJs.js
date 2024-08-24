const getComputerChoice = () => {
  let x = Math.floor(Math.random() * 3);
  if (x == 0) return "rock";
  if (x == 1) return "paper";
  if (x == 2) return "scissors";
};

function playRound(humanChoice, computerChoice) {
  let x = humanChoice.toLowerCase();
  let y = computerChoice;
  const status = document.querySelector("#status");
  if (
    (x == "paper" && y == "rock") ||
    (x == "rock" && y == "scissors") ||
    (x == "scissors" && y == "paper")
  ) {
    status.textContent = "You Win";
    return "Win";
  } else if (x == y) {
    status.textContent = "You Draw";
    return "Draw";
  } else {
    status.textContent = "You Lose";
    return "Lose";
  }
}

const playGame = (playRound, humanScore, computerScore) => {
  if (playRound == "Win") {
    humanScore++;
    return [humanScore, computerScore];
  }
  if (playRound == "Lose") {
    computerScore++;
    return [humanScore, computerScore];
  }
  if (playRound == "Draw") {
    return [humanScore, computerScore];
  }
};
let round = 0;
let humanScore = 0;
let computerScore = 0;

const getHumanChoice = (humanSelection) => {
  const result = document.querySelector("#result");
  const status = document.querySelector("#status");
  if (round < 5) {
    const computerSelection = getComputerChoice();
    const playResult = playRound(humanSelection, computerSelection);
    [humanScore, computerScore] = playGame(
      playResult,
      humanScore,
      computerScore
    );
    result.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
    round++;
  } else {
    if (humanScore > computerScore) {
      status.textContent = `Final! You Win`;
    } else if (humanScore < computerScore) {
      status.textContent = `Final! You Lose`;
    } else {
      status.textContent = `Final! You Draw`;
    }
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
