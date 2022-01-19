// GLOBAL VARIABLE

var currentGame = new Game();

// SELECTORS
var heading = document.getElementById("header");
var playerOneWins = document.getElementById("mermaidWins");
var playerTwoWins = document.getElementById("fishWins");
var boardBoxes = document.getElementById("gameBoard");
var gameBoardBox = document.querySelectorAll(".game-board-box");


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
    console.log("here")
    heading.innerText = "It's 🧜🏼‍♀️ 's turn";
  // } else currentGame.turn === currentGame.player2 && currentGame.won === false {
  } else {
    heading.innerText = "It's 🐠 's turn";
  }
}

function displayWinner() {
  if (currentGame.won === true && currentGame.turn === currentGame.player1) {
    heading.innerText = "🐠 won!";
    console.log("fishwins")
  } else if (currentGame.won === true && currentGame.turn === currentGame.player2) {
    console.log("mermaidwins")
    heading.innerText = "🧜 won!";
  } else if(!currentGame.won && currentGame.totalPlays === 9) {
    console.log("draw")
    heading.innerText = "It's a draw!";
  }
}


function displayPlayerIcon() {
  if (currentGame.turn === currentGame.player1) {
    event.target.innerText = '🧜🏼‍♀️';
    console.log(event.target.id)
    // event.target.classList.add("disable-click");
  } else if (currentGame.turn === currentGame.player2) {
    event.target.innerText = '🐠';
    // event.target.classList.add("disable-click");
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
    // for (var i = 0; i < gameBoardBox.length; i++) {
    // debugger
      // gameBoardBox.innerText = '';
      boardBoxes.classList.add("disable-click");
      heading.innerText = "It's 🧜🏼‍♀️'s turn";
    }
  }
// }



function disableBoard() {
  if (currentGame.won === true) {
    // for (var i = 0; i < gameBoardBox.length; i++) {
      // boardBoxes[i].classList.add("disable-click");
      // boardBoxes.innerText = null;
      gameBoardBox.classList.add("disable-click");
      console.log("here")
    }
  }



function clearGameBoard() {
  setTimeout(function() {
    resetGameBoard()
    // for (var i=0; i <gameBoardBox.length; i++) {
      // boardBoxes.innerText = '';
    //   boardBoxes.classList.remove("disable-click");
    //   console.log("hiiii")
    //   gameBoardBox.classList.remove("disable-click");
    // }
    // gameBoardBox.classList.remove("disable-click");
  }, 6000);
  // gameBoardBox.innerText = '';
}

function removeIcons() {
  // var gameBoardBox = document.querySelectorAll(".game-board-box");
  if (currentGame.won) {
  for (var i = 0; i < gameBoardBox.length; i++) {
    // debugger
    gameBoardBox[i].innerText = '';
    // boardBoxes.classList.remove("disable-click");
    console.log("hiiii")
    // gameBoardBox.classList.remove("disable-click");
}
}
}

function winGame() {
  updateWinsDisplay();
  displayWinner();
  disableBoard();
  // clearGameBoard();
  resetGameBoard();
  setTimeout(removeIcons, 5000);
  // removeIcons();
}
