const GameBoard = (function () {
  // Array save number cell
  const board = Array(9).fill(""); //  limit 9

  const getBoard = () => board;

  const setSquare = (index, marker) => {
    if (!board[index]) {
      board[index] = marker;
      return true; // Marker success
    }
    return false; // Marker failed
  };

  const resetBoard = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  };

  return { getBoard, setSquare, resetBoard };
})();

const Player = (name, marker) => {
  return { name, marker };
};

const Game = (function () {
  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");
  let currentPlayer = player1;
  let gameActive = true;

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const checkWinner = () => {
    const board = GameBoard.getBoard();
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      // Check board[] if 3 board[] have same value "X" or "O"
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    // Check if board fill and nobody win then draw
    return board.includes("") ? null : "Draw";
  };

  const playRound = (index) => {
    //if not active game or cant' marker then stop
    if (!gameActive || !GameBoard.setSquare(index, currentPlayer.marker))
      return;
    displayController.render();
    const winner = checkWinner();

    if (winner) {
      gameActive = false;
      // Make sure done action before show message, wait 100 millisecond
      setTimeout(() => {
        displayController.showMessage(
          winner === "Draw" ? "Draw!" : `${currentPlayer.name} wins!`
        );
      }, 100);
    } else {
      switchPlayer();
    }

    displayController.render();
  };

  const restartGame = () => {
    gameActive = true;
    GameBoard.resetBoard();
    currentPlayer = player1;
    displayController.render();
  };

  return { playRound, restartGame };
})();

const displayController = (function () {
  // Change to array to get index
  const squares = [...document.querySelectorAll(".square")];

  const render = () => {
    const board = GameBoard.getBoard();
    squares.forEach((square, index) => {
      square.textContent = board[index];
    });
  };

  const showMessage = (message) => {
    alert(message);
  };

  squares.forEach((square, index) => {
    square.addEventListener("click", () => Game.playRound(index));
  });

  document
    .getElementById("restart")
    .addEventListener("click", Game.restartGame);

  return { render, showMessage };
})();

Game.restartGame();
