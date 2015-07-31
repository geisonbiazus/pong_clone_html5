Player = function (game, x, y) {
  this.game = game;
  this.sprite = game.add.sprite(x, y, 'player');
  this.sprite.anchor.setTo(0.5, 0.5);
  this.game.physics.arcade.enable(this.sprite);
  this.sprite.body.collideWorldBounds = true;
  this.sprite.body.immovable = true;
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

Player.prototype.checkCounter = function (object) {
  this.game.physics.arcade.collide(this.sprite, object.sprite, this.counter, null, object);
};

Player.prototype.counter = function (playerSprite, ballSprite) {
  var delta = ballSprite.body.center.y - playerSprite.body.center.y;
  this.counter(delta);
};
