var Ball = function (game) {
  this.game = game;
  this.startPostion = {
    x: this.game.world.width / 2,
    y: this.game.world.height / 2
  };

  this.sprite = game.add.sprite(this.startPostion.x, this.startPostion.y, 'ball');
  this.sprite.anchor.setTo(0.5, 0.5);
  this.game.physics.arcade.enable(this.sprite);
  this.sprite.body.velocity.x = -300;
  this.sprite.body.bounce.x = 1;
  this.sprite.body.bounce.y = 1;
}

Ball.prototype.counter = function (delta) {
  this.sprite.body.velocity.y = delta * 10;
}

Ball.prototype.resetPosition = function () {
  this.sprite.x = this.startPostion.x;
  this.sprite.y = this.startPostion.y;
  this.sprite.body.velocity.y = 0;
  this.sprite.body.velocity.x = -300;
}
