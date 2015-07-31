var Keyboard = function (game) {
  var upKey   = game.input.keyboard.addKey(Phaser.Keyboard.UP),
      downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

  function upHold() {
    return upKey.isDown;
  }

  function downHold() {
    return downKey.isDown;
  }

  this.hold = {
      up: upHold,
      down: downHold
  }
}
