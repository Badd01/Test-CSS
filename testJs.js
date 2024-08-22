const getComputerChoice = () => {
  let x = Math.floor(Math.random() * 3);
  if (x == 0) return "rock";
  if (x == 1) return "paper";
  if (x == 2) return "scissors";
};

const getHumanChoice = () => {
  let x = prompt("Your choice");

  return x;
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
    console.log("You Win");
    return "Win";
  } else if (
    (x == "paper" && y == "paper") ||
    (x == "rock" && y == "rock") ||
    (x == "scissors" && y == "scissors")
  ) {
    console.log("You Draw");
    return "Draw";
  } else {
    console.log("You Lose");
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
const round = 5;
let humanScore = 0;
let computerScore = 0;
for (let i = 0; i < round; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  console.log("Your Choice: " + humanSelection);
  console.log("Computer Choice: " + computerSelection);
  const playResult = playRound(humanSelection, computerSelection);
  [humanScore, computerScore] = playGame(playResult, humanScore, computerScore);
}
