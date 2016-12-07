const five = require('johnny-five');
const board = new five.Board();

class Preload{
  preload(){
    this.load.image('sprite', 'assets/sprites/sprite.jpg');
    this.load.spritesheet('p1sheet', 'assets/sprites/p1spritesheet.png', 200, 200, 12);
    this.load.image('track', 'assets/sprites/track.png');
    this.load.image('trees', 'assets/sprites/trees.png');
    this.load.image('bush1', 'assets/sprites/bush1.png');
    this.load.image('bush2', 'assets/sprites/bush2.png');
    this.load.image('air', 'assets/sprites/air.png');
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
