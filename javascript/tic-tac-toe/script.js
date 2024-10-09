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
    // console.log(`${player.name} marks square ${num}.`);
    board[num] = player.marker;
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

  const resetGame = () => (board = new Array(9).fill(""));

  return { getBoard, getSquare, markSquare, checkWin, checkDraw, resetGame };
})();

const gameController = (() => {
  let Player1 = Player("Player 1", "O");
  let Player2 = Player("Player 2", "X");

  let currentPlayer = Player1;

  const switchPlayer = () => {
    // console.log("--- Switching player ---");
    currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
    // console.log(`${currentPlayer.name}'s turn`);
  };

  const makeMove = (square) => {
    if (gameBoard.getSquare(square) === "") {
      gameBoard.markSquare(square, currentPlayer);
      // console.log(`postion after move ${gameBoard.getBoard()}`);

      if (gameBoard.checkWin(currentPlayer)) {
        // console.log(`~~~ ${currentPlayer.name} wins! ~~~`);
        endGame();
        return;
      }

      if (gameBoard.checkDraw()) {
        // console.log(`~~~ it's a draw. ~~~`);
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

  return { switchPlayer, makeMove, endGame };
})();

/// TESTING ///
gameController.makeMove(0);
gameController.makeMove(0);
gameController.makeMove(3);
gameController.makeMove(1);
gameController.makeMove(4);
gameController.makeMove(2);
gameController.makeMove(5);
