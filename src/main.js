// GLOBAL VARIABLE

var currentGame = new Game();

// SELECTORS
var heading = document.getElementById('header');


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
