var Border = function (game, x, y) {
  this.game = game;
  this.sprite = game.add.sprite(x, y);
  this.sprite.width = game.world.width;
  this.sprite.height = 5;
  game.physics.arcade.enable(this.sprite);
  this.sprite.body.immovable = true;
}

Border.prototype.checkCollision = function (object) {
  game.physics.arcade.collide(object.sprite, this.sprite);
}
