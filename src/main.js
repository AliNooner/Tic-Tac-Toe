// GLOBAL VARIABLE

var currentGame = new Game();

// SELECTORS
var heading = document.getElementById('header');


// EVENT LISTENERS

// FUNCTIONS

function updatePlayerTurnDisplay() {
  if (currentGame.turn === currentGame.player1 && currentGame.won === false) {
    heading.innerText = 'It is 🐠 turn';
  } else if (currentGame.turn === currentGame.player2 && currentGame.won === false) {
    heading.innerText = 'It is 🧜🏼‍♀️ turn';
  }
}
