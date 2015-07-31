var Ball = function (game, x, y) {
  this.game = game;
  this.sprite = game.add.sprite(x, y, 'ball');
  this.sprite.anchor.setTo(0.5, 0.5);
  this.game.physics.arcade.enable(this.sprite);
  this.sprite.body.velocity.x = -300;
  this.sprite.body.bounce.x = 1;
  this.sprite.body.bounce.y = 1;
  this.sprite.body.collideWorldBounds = true;
}

Ball.prototype.counter = function (delta) {
  this.sprite.body.velocity.y = delta * 10;
}
