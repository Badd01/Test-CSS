let humanScore = 0;
let computerScore = 0;
let round = 0;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const playRound = (humanChoice, computerChoice) => {
  const x = humanChoice.toLowerCase();
  const y = computerChoice;

  if (x === y) {
    return "Draw";
  } else if (
    (x === "paper" && y === "rock") ||
    (x === "rock" && y === "scissors") ||
    (x === "scissors" && y === "paper")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
};

const updateScore = (result) => {
  if (result === "Win") {
    humanScore++;
  } else if (result === "Lose") {
    computerScore++;
  }
  document.getElementById("result").innerText = `Round: ${
    round + 1
  }, Result: ${result}, Your Score: ${humanScore}, Computer Score: ${computerScore}`;
};

const handleClick = (choice) => {
  if (round < 5) {
    const computerChoice = getComputerChoice();
    const result = playRound(choice, computerChoice);
    updateScore(result);
    round++;
  }
  if (round == 5) {
    document.querySelector(
      "#result"
    ).textContent = `Game Over! Final Score - You: ${humanScore}, Computer: ${computerScore}`;
  }
};

document
  .querySelector("#rock")
  .addEventListener("click", () => handleClick("rock"));
document
  .querySelector("#paper")
  .addEventListener("click", () => handleClick("paper"));
document
  .querySelector("#scissors")
  .addEventListener("click", () => handleClick("scissors"));
