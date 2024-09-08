let gameBoard = {};

function createPlayer(name, choose) {
  let score = 0;
  return { name, choose, score };
}

//module pattern: Immediately Invoked Function Expression
const gamePlay = (function () {
  const result = (player1, player2) => {
    if (player1.score > player2.score) {
      console.log(player1.name + " Win");
    } else if (player1.score === player2.score) {
      console.log(player1.name + " and" + player2.name + " Draw");
    } else {
      console.log(player2.name + " Win");
    }
  };
  const gameLogic = (player1, player2) => {
    const cells = document.querySelectorAll(".cell");
    let playerTurn = true;
    let player1Position = [];
    let player2Position = [];
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (!cell.textContent)
          if (playerTurn === true) {
            cell.textContent = player1.choose;
            player1Position += index;
            playerTurn = !playerTurn;
          } else {
            cell.textContent = player2.choose;
            player2Position += index;
            playerTurn = !playerTurn;
          }
        console.log(player1Position, player2Position);
      });
    });
  };
  return { result, gameLogic };
})();

const mrA = createPlayer("mrA", "X");
const mrB = createPlayer("mrB", "O");
gamePlay.gameLogic(mrA, mrB);
