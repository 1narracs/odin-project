let gameBoardElement = document.querySelector(".game-board");
let squareElements = document.querySelectorAll(".square");
let playerPanelElements = document.querySelectorAll(".player-panel");

function Player(name, marker) {
  let score = 0;

  const getScore = () => score;
  const giveScore = () => score++;

  return { name, marker, getScore, giveScore };
}

const gameBoard = (function () {
  let board = new Array(9).fill("");

  const getBoard = () => board;

  const getSquare = (num) => board[num];

  const markSquare = (num, player) => {
    board[num] = player.marker;
    squareElements[num].innerHTML = player.marker;
  };

  const checkWin = (player) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winConditions.some(
      (condition) =>
        board[condition[0]] === player.marker &&
        board[condition[1]] === player.marker &&
        board[condition[2]] === player.marker
    );
  };

  const checkDraw = () => {
    return board.every((square) => square !== "");
  };

  const resetGame = () => {
    board = new Array(9).fill("");
    squareElements.forEach((element) => (element.innerHTML = ""));
  };

  return { getBoard, getSquare, markSquare, checkWin, checkDraw, resetGame };
})();

const gameController = (() => {
  let Player1 = Player("Player 1", "O");
  let Player2 = Player("Player 2", "X");

  let currentPlayer = Player1;

  const getPlayers = () => [Player1, Player2];

  const getCurrentPlayer = () => currentPlayer;

  const switchPlayer = () => {
    currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
  };

  const makeMove = (square) => {
    if (gameBoard.getSquare(square) === "") {
      gameBoard.markSquare(square, currentPlayer);

      if (gameBoard.checkWin(currentPlayer)) {
        endGame();
        return;
      }

      if (gameBoard.checkDraw()) {
        endGame();
        return;
      }

      switchPlayer();
    } else {
      console.log("invalid turn, go again.");
    }
  };

  const endGame = () => {
    gameBoard.resetGame();
    currentPlayer = Player1;
  };

  return { getPlayers, getCurrentPlayer, switchPlayer, makeMove, endGame };
})();

squareElements.forEach((square, idx) => {
  square.addEventListener("click", () => {
    console.log(`${square} clicked`);
    gameController.makeMove(idx);
  });
});

playerPanelElements.forEach((element, idx) => {
  element.innerHTML = `${
    gameController.getPlayers()[idx].name
  }: <span class="font-comico">${
    gameController.getPlayers()[idx].marker
  }</span>`;
});
