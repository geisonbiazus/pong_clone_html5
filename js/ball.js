var Ball = function (game) {
  this.game = game;
  this.startPostion = {
    x: this.game.world.width / 2,
    y: this.game.world.height / 2
  };
  this.sprite = game.add.sprite(-10, -10, 'ball');
  this.sprite.anchor.setTo(0.5, 0.5);
  this.game.physics.arcade.enable(this.sprite);
  this.sprite.body.bounce.x = 1;
  this.sprite.body.bounce.y = 1;
  this.resetPosition(Ball.LEFT);
};

Ball.LEFT = -1;
Ball.RIGHT = 1;
Ball.MAX_VELOCITY = 700;

Ball.prototype.counter = function (delta, force) {
  var velocity = this.sprite.body.velocity;
  var absX = Math.abs(velocity.x);
  var direction = velocity.x < 0 ? -1 : 1;
  velocity.y = delta * 10;
  velocity.x *= (absX + (absX * force / 2)) / absX;
  if (Math.abs(velocity.x) > Ball.MAX_VELOCITY) {
    velocity.x = Ball.MAX_VELOCITY * direction;
  }
};

Ball.prototype.resetPosition = function (direction, callback) {
  self = this;
  setTimeout(function () {
    self.sprite.x = self.startPostion.x;
    self.sprite.y = self.startPostion.y;
    self.sprite.body.velocity.y = 0;
    self.sprite.body.velocity.x = 300 * direction;
    if (callback) callback();
  }, 1000);
};
