var AIControl = function (game, player, ball) {
  this.game = game;
  this.player = player;
  this.ball = ball;
};

AIControl.prototype.process = function () {
  this.player.sprite.y = this.ball.sprite.y;
};
