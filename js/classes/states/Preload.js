const ports = [
  { id: "A", port: "/dev/cu.wchusbserial1410" },
  { id: "B", port: "/dev/cu.wchusbserial1420" }
];

const five = require('johnny-five');
//const boards = new five.Boards(ports);
//window.jeffApp.boards = boards;

class Preload{
  preload(){
    this.load.image('sprite', 'assets/sprites/sprite.jpg');
    this.load.spritesheet('p1sheet', 'assets/sprites/p1spritesheet.png', 200, 200, 12);
    this.load.spritesheet('p2sheet', 'assets/sprites/p2spritesheet.png', 200, 200, 12);
    this.load.spritesheet('p1ballsheet', 'assets/sprites/p1ballspritesheet.png', 132, 300, 2);
    this.load.spritesheet('p2ballsheet', 'assets/sprites/p2ballspritesheet.png', 150, 300, 2);
    this.load.spritesheet('p1stage', 'assets/sprites/p1stage.png', 400, 400, 3);
    this.load.image('track', 'assets/sprites/track.png');
    this.load.image('clouds', 'assets/sprites/clouds.png');
    this.load.image('trees', 'assets/sprites/trees.png');
    this.load.image('bush1', 'assets/sprites/bush1.png');
    this.load.image('bush2', 'assets/sprites/bush2.png');
    this.load.image('air', 'assets/sprites/air.png');
    this.load.spritesheet('logo', 'assets/sprites/logospritesheet.png', 739, 200, 4);
    this.load.spritesheet('countdown', 'assets/sprites/countdownspritesheet.png', 400, 200, 4);
    this.load.image('menuclouds', 'assets/sprites/menuclouds.png');
    this.load.image('p1wintype', 'assets/sprites/p1wintype.png');
    this.load.image('p2wintype', 'assets/sprites/p2wintype.png');
    this.load.image('basketbal', 'assets/sprites/basketbal.png');
    this.load.image('voetbal', 'assets/sprites/voetbal.png');
    this.load.image('honkbal', 'assets/sprites/honkbal.png');
    this.load.image('tennisbal', 'assets/sprites/tennisbal.png');
    this.load.image('speaker', 'assets/sprites/speaker.png');

    // boards.on('ready', () => {
    //   console.log('Boards are ready to use');
    //   this.onLoadComplete();
    // });
    this.onLoadComplete();

    // this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
  }
  onLoadComplete(){
    this.game.state.start('Gameover');
  }
}

module.exports = Preload;
