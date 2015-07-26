var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

var MainState = (function () {

  var Direction = {
    UP : -1,
    DOWN : 1
  };

  var player;
  var height, width;
  var upKey, downKey;

  function preload() {
    game.load.image('player', 'assets/player.png');
  }

  function create () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    height = game.world.height;
    width = game.world.width;

    player = game.add.sprite(15, height / 2, 'player');
    player.anchor.setTo(0, 0.5);
    game.physics.arcade.enable(player);

    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  }

  function update() {
    player.body.velocity.y = 0;
    if (upKey.isDown) move(Direction.UP);
    else if (downKey.isDown) move(Direction.DOWN);
  }

  function move(direction) {
    player.body.velocity.y = 200 * direction;
  }

  return {
    preload : preload,
    create : create,
    update : update
  };

})();

game.state.add('main', MainState);
game.state.start('main');
