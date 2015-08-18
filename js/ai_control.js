var AIControl = function (game, player, ball) {
  this.game = game;
  this.player = player;
  this.ball = ball;
};

AIControl.prototype.process = function () {

  var tableMiddle = this.game.world.width / 2;
  var ballReturning = this.ball.sprite.body.velocity.x > 0;
  var precisionDelta = this.player.sprite.height / 2;

  this.player.stop();

  if (ballReturning && this.ball.sprite.x > tableMiddle) {
    if (this.ball.sprite.inWorld) {
      if (this.ball.sprite.y  > this.player.sprite.y + precisionDelta) {
        this.player.moveDown();
      } else if (this.ball.sprite.y < this.player.sprite.y - precisionDelta) {
        this.player.moveUp();
      }
    }
  }

};
