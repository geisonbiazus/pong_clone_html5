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
  this.resetPosition()
};

Ball.prototype.counter = function (delta) {
  this.sprite.body.velocity.y = delta * 10;
};

Ball.prototype.resetPosition = function (callback) {
  self = this;
  setTimeout(function () {
    self.sprite.x = self.startPostion.x;
    self.sprite.y = self.startPostion.y;
    self.sprite.body.velocity.y = 0;
    self.sprite.body.velocity.x = -300;
    if (callback) callback();
  }, 1000);
};
