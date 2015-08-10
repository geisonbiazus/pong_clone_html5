var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

var MainState = (function (game) {

  var height, width;
  var borderTop, borderBottom;
  var player1, player2, ball;
  var scoreLocationLeft, scoreLocationRight;
  var score;
  var humanControl, aiControl;

  function preload() {
    game.load.image('player', 'assets/player.png');
    game.load.image('ball', 'assets/ball.png');
    game.load.image('table_division', 'assets/table_division.png');
  }

  function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    height = game.world.height;
    width = game.world.width;

    game.add.sprite(width / 2, 0, 'table_division').anchor.setTo(0.5, 0);;

    borderTop = new Border(game, 0, 0);
    borderBottom = new Border(game, 0, height - 5);

    player1 = new Player(game, 20, height / 2);
    player2 = new Player(game, width - 20, height / 2);
    ball = new Ball(game);

    humanControl = new HumanControl(game, player1);
    aiControl = new AIControl(game, player2, ball);
    score = new Score(game, player1, player2);

    scoreLocationLeft = new ScoreLocation(game, ScoreLocation.LEFT, score, player1, ball);
    scoreLocationRight = new ScoreLocation(game, ScoreLocation.RIGHT, score, player2, ball);

  }

  function update() {

    humanControl.process();
    aiControl.process();

    borderTop.checkCollision(ball);
    borderBottom.checkCollision(ball);
    scoreLocationLeft.checkScore();
    scoreLocationRight.checkScore();

    player1.checkCounter(ball);
    player2.checkCounter(ball);
  }

  function render() {
    // game.debug.body(scoreLocationLeft.sprite);
  }

  return {
    preload: preload,
    create: create,
    update: update,
    render: render
  };

})(game);

game.state.add('main', MainState);
game.state.start('main');
