Player = function (game, x, y) {
  this.UP = -1;
  this.DOWN = 1;

  this.game = game;
  this.sprite = game.add.sprite(x, y, 'player');
  this.sprite.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enable(this.sprite);
};

Player.UP = -1;
Player.DOWN = 1;

Player.prototype.moveUp = function () {
  this.move(Player.UP);
};

Player.prototype.moveDown = function () {
  this.move(Player.DOWN);
};

Player.prototype.move = function (direction) {
  this.sprite.body.velocity.y = 300 * direction;
};

Player.prototype.stop = function () {
  this.sprite.body.velocity.y = 0;
};
