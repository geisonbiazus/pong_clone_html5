var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

Player = function (game, x, y) {
  this.game = game;
  this.sprite = game.add.sprite(x, y, 'player');
  this.sprite.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enable(this.sprite);
}

Player.prototype.move = function (direction) {
  this.sprite.body.velocity.y = 300 * direction;
}

Player.prototype.stop = function () {
  this.sprite.body.velocity.y = 0;
}

var Direction = {
  UP : -1,
  DOWN : 1
};

var MainState = (function (game) {

  var player1, player2;
  var height, width;
  var upKey, downKey;

  function preload() {
    game.load.image('player', 'assets/player.png');
  }

  function create () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    height = game.world.height;
    width = game.world.width;

    player1 = new Player(game, 20, height / 2);
    player2 = new Player(game, width - 20, height / 2);

    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  }

  function update() {
    player1.stop();
    player2.stop();
    if (upKey.isDown) {
      player1.move(Direction.UP);
      player2.move(Direction.UP);
    } else if (downKey.isDown) {
      player1.move(Direction.DOWN);
      player2.move(Direction.DOWN);
    }
  }



  return {
    preload : preload,
    create : create,
    update : update
  };

})(game);

game.state.add('main', MainState);
game.state.start('main');
