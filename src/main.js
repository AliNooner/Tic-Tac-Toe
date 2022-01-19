// GLOBAL VARIABLE
var currentGame = new Game();

// SELECTORS
var heading = document.getElementById("header");
var playerOneWins = document.getElementById("mermaidWins");
var playerTwoWins = document.getElementById("fishWins");
var boardBoxes = document.getElementById("gameBoard");
var gameBoardBox = document.querySelectorAll(".game-board-box");


// EVENT LISTENERS
boardBoxes.addEventListener("click", playTurn);


// FUNCTIONS
function playTurn(event) {
  console.log(event.target.id)
  currentGame.assignSpace(event.target.id);
  displayPlayerIcon();
  currentGame.tallyPlays();
  currentGame.toggleTurn();
  updatePlayerTurnDisplay();
  currentGame.checkPlayerOneWin();
  currentGame.checkPlayerTwoWin();
  winGame();
}

function updatePlayerTurnDisplay() {
  if (currentGame.turn === currentGame.player1 && currentGame.won === false) {
    heading.innerText = "It's 🧜🏼‍♀️ 's turn";
  } else {
    heading.innerText = "It's 🐠 's turn";
  }
}

function displayWinner() {
  if (currentGame.won === true && currentGame.turn === currentGame.player1) {
    heading.innerText = "🐠 won!";
  } else if (currentGame.won === true && currentGame.turn === currentGame.player2) {
    heading.innerText = "🧜 won!";
  } else if(!currentGame.won && currentGame.totalPlays === 9) {
    heading.innerText = "It's a draw!";
  }
}

function displayPlayerIcon() {
  if (currentGame.turn === currentGame.player1) {
    event.target.innerText = '🧜🏼‍♀️';
  } else if (currentGame.turn === currentGame.player2) {
    event.target.innerText = '🐠';
  }
}

function updateWinsDisplay() {
  if (currentGame.won === true && currentGame.turn === currentGame.player2) {
    playerOneWins.innerText = `${currentGame.player1.wins} Wins`
  } else if (currentGame.won === true && currentGame.turn === currentGame.player1) {
    playerTwoWins.innerText = `${currentGame.player2.wins} Wins`
  }
}

function resetGameBoard() {
    currentGame.resetGameClass();
      heading.innerText = "It's 🧜🏼‍♀️'s turn";
    }

function removeIcons() {
  if (currentGame.won || currentGame.totalPlays === 9) {
  for (var i = 0; i < gameBoardBox.length; i++) {
    gameBoardBox[i].innerText = '';
    boardBoxes.classList.remove("disable-click");
    }
}
resetGameBoard();
}

function winGame() {
  if (currentGame.won) {
  boardBoxes.classList.add("disable-click");
  updateWinsDisplay();
  displayWinner();
  setTimeout(removeIcons, 5000);
  }
}
