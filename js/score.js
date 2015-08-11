var Score = function (game, player1, player2) {
  this.game = game;
  this.player1 = player1;
  this.player2 = player2;
  this.scorePlayer1 = 0;
  this.scorePlayer2 = 0;

  this.scoreText1 = game.add.text(32, 16, '0', { fontSize: '32px', fill: '#FFFFFF' });
  this.scoreText2 = game.add.text(game.world.width - 48, 16, '0', { fontSize: '32px', fill: '#FFFFFF' });
};

Score.prototype.increment = function (player) {
  if (player === this.player1) {
    this.scorePlayer2++;
  } else {
    this.scorePlayer1++;
  }
  this.scoreText1.text = this.scorePlayer1;
  this.scoreText2.text = this.scorePlayer2;
}
