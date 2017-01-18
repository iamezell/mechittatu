export default class Actor extends Phaser.Sprite{
  constructor(state, x, y, image){
    super(state.game, x, y, image);
    this.game = state.game;
    this.state = state;
    this.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

  }

  add () {
    this.game.add.existing(this);
  }

  update () {

  }

}
