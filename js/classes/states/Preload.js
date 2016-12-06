const five = require('johnny-five');
const board = new five.Board();

class Preload{
  constructor(){
  }
  preload(){
    this.load.image('sprite', 'assets/sprites/sprite.jpg');
    board.on('ready', () => {
      console.log('Board is ready');
      this.onLoadComplete();
    });
  }
  onLoadComplete(){
    this.game.state.start('Menu');
  }
}

module.exports = Preload;
