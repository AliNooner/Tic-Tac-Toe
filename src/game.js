class Game {
  constructor() {
    this.player1 = new Player(1, '🧜🏼‍♀️');
    this.player2 = new Player(2, '🐠');
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
    this.turn = this.player;
    this.won = false;
    this.totalPlays = 0;
  }
}

tallyPlays() {
  this.totalPlays++;
}
