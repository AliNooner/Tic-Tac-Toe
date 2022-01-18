// GLOBAL VARIABLE

var currentGame = new Game();

// SELECTORS
var heading = document.getElementById("header");
var playerOneWins = document.getElementById("mermaidWins");
var playerTwoWins = document.getElementById("fishWins");
var boardBoxes = document.getElementById("gameBoard");
var gameBoardBox = document.querySelector("game-board-box");


// EVENT LISTENERS
window.addEventListener('load', loadPage);
boardBoxes.addEventListener("click", playTurn);
// {
//   console.log("I'm also here")
//     playTurn(event)})

// FUNCTIONS

function loadPage(event) {
  // console.log(currentGame)
  // for (var i = 0; i < boardBoxes.length; i++) {
    // console.log(boardBoxes.length)
    // boardBoxes.addEventListener("click", function() {
    //   console.log("I'm also here")
    //   playTurn(event);
    // });
  }
// }

// function startGame(event) {
  // playTurn(event);
// }

function playTurn(event) {
  console.log(event.target.id)
  // for (var i = 0; i < currentGame.gameBoard.length; i++) {
      // console.log(boardBoxes[i].id)
    // if (event.target.id === boardBoxes[i].id) {
      // console.log(boardBoxes[i].id)
      currentGame.assignSpace(event.target.id);
    // }
  // }
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
  } else if (currentGame.turn === currentGame.player2 && currentGame.won === false) {
    heading.innerText = "It's 🐠 's turn";
  }
}

function displayWinner() {
  if (currentGame.won === true && currentGame.turn === currentGame.player1) {
    heading.innerText = "🐠 won!";
  } else if (currentGame.won === true && currentGame.turn === currentGame.player2) {
    heading.innerText = "🧜 won!";
  } else if (currentGame.won === false && currentGame.totalPlays === 9) {
    heading.innerText = "It's a draw!";
  }
}

function displayPlayerIcon() {
  if (currentGame.turn === currentGame.player1) {
    event.target.innerText = '🧜🏼‍♀️';
    event.target.classList.add("disable-click");
  } else if (currentGame.turn === currentGame.player2) {
    event.target.innerText = '🐠';
    event.target.classList.add("disable-click");
  }
}

function updateWinsDisplay() {
  if (currentGame.won === true && currentGame.turn === currentGame.player2) {
    playerOneWins.innerText = `${currentGame.player1.wins} Wins`
  } else if (currentGame.won === true && currentGame.turn === currentGame.player1) {
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
    // for (var i = 0; i < boardBoxes.length; i++) {
      boardBoxes.innerText = null;
      gameBoardBox.classList.remove("disable-click");
    }
    heading.innerText = "It's 🧜🏼‍♀️'s turn";
  }


function disableBoard() {
  if (currentGame.won === true) {
    // for (var i = 0; i < gameBoardBox.length; i++) {
      // boardBoxes[i].classList.add("disable-click");
      boardBoxes.classList.add("disable-click");
    }
  }
// }

function clearGameBoard() {
  setTimeout(function() {resetGameBoard()}, 4000);
}

// function playTurn(event) {
//   for (var i = 0; i < boardBoxes.length; i++) {
//     if (event.target.id === boardBoxes[i].id) {
//       currentGame.assignPlayerSpace(boardBoxes[i].id);
//     }
//   }
//   displayPlayerIcon();
//   currentGame.tallyPlays();
//   currentGame.toggleTurn();
//   updatePlayerTurnDisplay();
//   currentGame.checkPlayerOneWin();
//   currentGame.checkPlayerTwoWin();
//   winGame();
// }

function winGame() {
  disableBoard();
  // displayWinner();
  // updateWinsDisplay();
  // clearGameBoard();
  resetGameBoard();
}
