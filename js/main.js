var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

var MainState = (function (game) {

  var player1, player2, ball;
  var height, width;
  var keyboard;

  function preload() {
    game.load.image('player', 'assets/player.png');
    game.load.image('ball', 'assets/ball.png');
  }

  function create () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    keyboard = new Keyboard(game);

    height = game.world.height;
    width = game.world.width;

    player1 = new Player(game, 20, height / 2);
    player2 = new Player(game, width - 20, height / 2);
    ball = new Ball(game, width / 2, height / 2);
  }

  function update() {
    player1.stop();
    player2.stop();

    if (keyboard.hold.up()) {
      player1.moveUp();
      player2.moveUp();
    } else if (keyboard.hold.down()) {
      player1.moveDown();
      player2.moveDown();
    }

    player1.checkCounter(ball);
    player2.checkCounter(ball);
  }

  return {
    preload : preload,
    create : create,
    update : update
  };

})(game);

game.state.add('main', MainState);
game.state.start('main');
