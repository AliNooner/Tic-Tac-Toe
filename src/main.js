// GLOBAL VARIABLE

var currentGame = new Game();

// SELECTORS
var heading = document.getElementById('header');
var playerOneWins = document.getElementById("mermaidWins");
var playerTwoWins = document.getElementById("fishWins");
var boardBoxes = document.querySelector("game-board-box");


// EVENT LISTENERS
// window.addEventListener('load', loadPage);

// FUNCTIONS

function updatePlayerTurnDisplay() {
  if (currentGame.turn === currentGame.player1 && currentGame.won === false) {
    heading.innerText = "It's 🐠 's turn ";
  } else if (currentGame.turn === currentGame.player2 && currentGame.won === false) {
    heading.innerText = "It's 🧜🏼‍♀️ 's turn";
  }
}

function displayWinner() {
  if (currentGame.won === true && currentGame.turn === currentGame.player1) {
    heading.innerText = "🧜🏼‍♀️ won!";
  } else if (currentGame.won === true && currentGame.turn === currentGame.player2) {
    heading.innerText = "🐠 won!";
  } else if (currentGame.won === false && currentGame.totalPlays === 9) {
    heading.innerText = "It's a draw!";
  }
}

function displayPlayerIcon() {
  if (currentGame.turn === currentGame.player1) {
    event.target.innerText = "🧜🏼‍♀️";
    event.target.classList.add("disable-click");
  } else if (currentGame.turn === currentGame.player2) {
    event.target.innerText = "🐠";
    event.target.classList.add("disable-click");
  }
}

function updateWinsDisplay() {
  if (currentGame.won === true && currentGame.turn === currentGame.player1) {
    playerOneWins.innerText = `${currentGame.player1.wins} Wins`
  } else if (currentGame.won === true && currentGame.turn === currentGame.player2) {
    playerTwoWins.innerText = `${currentGame.player2.wins} Wins`
  }
}

// create a function on how to play the game
// iterate through game boxe indexes
// include assignPlayerSpace function
// tallyPlays function
// toggleTurn function
// displayPlayerIcon function
// updatePlayerTurnDisplay function
// check each players wins (checkPlayerOneWin and checkPlayerTwoWin) functions
// updatePlayerTurnDisplay function
// create some sort of win game function to show the winner, disable the board, and clear the game board
// ^^ break down into separate functions?

function resetGameBoard() {
  if (currentGame.won === true || currentGame.totalPlays === 9) {
    currentGame.resetGameClass();
    for (var i = 0; i < boardBoxes.length; i++) {
      boardBoxes[i].innerText = "";
      boardBoxes[i].classList.remove("disable-click");
    }
    heading.innerText = "It's 🧜🏼‍♀️'s turn";
  }
}
