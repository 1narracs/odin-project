const choices = ["scissors", "paper", "rock"];
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("dis-player-score").innerHTML = `Player: ${playerScore}`
  document.getElementById("dis-computer-score").innerHTML = `Puter: ${computerScore}`
}

function announceWinner(winner) {
  if (winner = "player") {
    alert("Player wins the game! Congratulations");
  } else if (winner = "computer") {
    alert("Computer wins... Try again?");
  }
  resetScores()
}

function keepScore(result) {
  if (result == "player") {
    playerScore += 1;
    document.getElementById("dis-player-score").innerHTML = `Player: ${playerScore}`
  }
  else if (result == "computer") {
    computerScore += 1;
    document.getElementById("dis-computer-score").innerHTML = `Puter: ${computerScore}`
  }

  if (playerScore >= 5) {
    announceWinner("player")
  }
  
  if (computerScore >= 5) {
    announceWinner("computer")
  }
}

function resetComputerChoice() {
  computerChoice = setComputerChoice();
}

function setComputerChoice() {
  let roll = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[roll];
  return computerChoice;
}

function playRound() {
  resetComputerChoice();

  if (playerChoice == computerChoice) {
    return "tie";
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function updateResults(result) {

}

function playGame(playerInput) {
  playerChoice = playerInput;

  console.log(playerChoice);

  let result = playRound();

  if (result == "tie") {
    document.getElementById("dis-player-choice").innerHTML = `Player chose: ${playerChoice}`;
    document.getElementById("dis-computer-choice").innerHTML = `Computer chose: ${computerChoice}`
    document.getElementById("dis-result").innerHTML = `-- Tie --`
  } else if (result == "player") {
    document.getElementById("dis-player-choice").innerHTML = `Player chose: ${playerChoice}`;
    document.getElementById("dis-computer-choice").innerHTML = `Computer chose: ${computerChoice}`
    document.getElementById("dis-result").innerHTML = `-- Player wins round --`
  } else if (result == "computer") {
    document.getElementById("dis-player-choice").innerHTML = `Player chose: ${playerChoice}`;
    document.getElementById("dis-computer-choice").innerHTML = `Computer chose: ${computerChoice}`
    document.getElementById("dis-result").innerHTML = `-- Computer wins round --`
  }

  keepScore(result);

}