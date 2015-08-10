var HumanControl = function (game, player) {
  this.game = game;
  this.player = player;
  this.keyboard = new Keyboard(game);
};

HumanControl.prototype.process = function () {
  this.player.stop();

  if (this.keyboard.hold.up()) {
    this.player.moveUp();
  } else if (this.keyboard.hold.down()) {
    this.player.moveDown();
  }
};
