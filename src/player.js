class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  addWin() {
    this.wins += 1;
  }
}
