export default class Team {
  constructor(...players) {
    this.players = players;
  }

  * [Symbol.iterator]() {
    for (let index = 0; index < this.players.length; index += 1) {
      yield this.players[index];
    }
  }
}
