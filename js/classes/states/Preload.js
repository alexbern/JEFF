// const five = require('johnny-five');
// const board = new five.Board();

class Preload{
  preload(){
    this.load.image('sprite', 'assets/sprites/sprite.jpg');
    this.load.spritesheet('p1sheet', 'assets/sprites/p1spritesheet.png', 200, 200, 12);
    this.load.spritesheet('p2sheet', 'assets/sprites/p2spritesheet.png', 200, 200, 12);
    this.load.image('track', 'assets/sprites/track.png');
    this.load.image('clouds', 'assets/sprites/clouds.png');
    this.load.image('trees', 'assets/sprites/trees.png');
    this.load.image('bush1', 'assets/sprites/bush1.png');
    this.load.image('bush2', 'assets/sprites/bush2.png');
    this.load.image('air', 'assets/sprites/air.png');
    this.load.spritesheet('logo', 'assets/sprites/logospritesheet.png', 739, 200, 4);
    this.load.spritesheet('countdown', 'assets/sprites/countdownspritesheet.png', 400, 200, 4);
    this.load.image('menuclouds', 'assets/sprites/menuclouds.png');

    // board.on('ready', () => {
    //   console.log('Board is ready');
    //   this.onLoadComplete();
    // });

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
  }
  onLoadComplete(){
    this.game.state.start('Menu');
  }
}

module.exports = Preload;
