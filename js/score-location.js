var ScoreLocation = function (game, position, score, player, ball) {
  this.game = game;
  this.position = position;
  this.score = score;
  this.player = player;
  this.ball = ball;
  this.sprite = game.add.sprite(this.getX(), 0);
  this.sprite.width = 5;
  this.sprite.height =  game.world.height;
  game.physics.arcade.enable(this.sprite);
  this.sprite.body.immovable = true;
};

ScoreLocation.LEFT = 0;
ScoreLocation.RIGHT = 1;

ScoreLocation.prototype.getX = function () {
  return this.position == ScoreLocation.LEFT ? 0 : this.game.world.width - 5;
};

ScoreLocation.prototype.checkScore = function () {
  this.game.physics.arcade.overlap(this.sprite, this.ball.sprite, this.addScore, null, this);
};

ScoreLocation.prototype.addScore = function () {
  this.score.increment(this.player);
  this.ball.resetPosition();
};
