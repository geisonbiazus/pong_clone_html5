Player = function (game, x, y) {
  this.game = game;
  this.sprite = game.add.sprite(x, y, 'player');
  this.sprite.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enable(this.sprite);
};

Player.UP = -1;
Player.DOWN = 1;

Player.prototype.moveUp = function () {
  if (!this.touchingTop()) {
    this.move(Player.UP);
  }
};

Player.prototype.moveDown = function () {
  if (!this.touchingBottom()) {
    this.move(Player.DOWN);
  }
};

Player.prototype.move = function (direction) {
  this.sprite.body.velocity.y = 300 * direction;
};

Player.prototype.stop = function () {
  this.sprite.body.velocity.y = 0;
};

Player.prototype.touchingBottom = function () {
  return (this.sprite.y + this.sprite.height / 2) >= this.game.world.height;
}

Player.prototype.touchingTop = function () {
  return (this.sprite.y - this.sprite.height / 2) <= 0;
}
