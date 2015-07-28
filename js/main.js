var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

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
      player1.moveUp();
      player2.moveUp();
    } else if (downKey.isDown) {
      player1.moveDown();
      player2.moveDown();
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
