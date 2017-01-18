import Actor from './Actor';

export default class BPSymbol extends Actor {

  constructor (state, x, y, image) {
    super(state, x, y, image);
    this.body.collideWorldBounds = true;
    this.lastPos = {x, y};
    this.diff = {
      x: 0,
      y : 0
    }
  }

  update () {

  }

}
