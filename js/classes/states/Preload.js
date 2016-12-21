require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

const ports = [
  { id: "B", port: "/dev/cu.wchusbserial1410" },
  { id: "A", port: "/dev/cu.wchusbserial1420" }
];

const five = require('johnny-five');
const boards = new five.Boards(ports);
window.jeffApp.boards = boards;

class Preload{
  preload(){
    this.load.json('soundData', 'assets/data/sounds.json');

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
    this.load.image('yellowpoint', 'assets/sprites/yellowpoint.png');
    this.load.image('bluepoint', 'assets/sprites/bluepoint.png');
    this.load.image('mapping', 'assets/sprites/mapping.png');

    this.load.image('footballsensor', 'assets/sprites/voetbalsensor.png');
    this.load.image('tennissensor', 'assets/sprites/tennisballsensor.png');
    this.load.image('baseballsensor', 'assets/sprites/baseballsensor.png');
    this.load.image('basketballsensor', 'assets/sprites/basketsensor.png');

    this.load.image('p1e1', 'assets/sprites/p1_encouragement_1.png');
    this.load.image('p1e2', 'assets/sprites/p1_encouragement_2.png');
    this.load.image('p1e3', 'assets/sprites/p1_encouragement_3.png');

    this.load.image('p2e1', 'assets/sprites/p2_encouragement_1.png');
    this.load.image('p2e2', 'assets/sprites/p2_encouragement_2.png');
    this.load.image('p2e3', 'assets/sprites/p2_encouragement_3.png');

    this.load.audio('basket1', 'assets/sounds/basket1.mp3');
    this.load.audio('basket2', 'assets/sounds/basket2.mp3');
    this.load.audio('basket3', 'assets/sounds/basket3.mp3');
    this.load.audio('basket4', 'assets/sounds/basket4.mp3');

    this.load.audio('football1', 'assets/sounds/football1.mp3');
    this.load.audio('football2', 'assets/sounds/football2.mp3');
    this.load.audio('football3', 'assets/sounds/football3.mp3');
    this.load.audio('football4', 'assets/sounds/football4.mp3');

    this.load.audio('tennis1', 'assets/sounds/tennis1.mp3');
    this.load.audio('tennis2', 'assets/sounds/tennis2.mp3');
    this.load.audio('tennis3', 'assets/sounds/tennis3.mp3');
    this.load.audio('tennis4', 'assets/sounds/tennis4.mp3');

    this.load.audio('baseball1', 'assets/sounds/baseball1.mp3');

    this.load.audio('demo1', 'assets/sounds/demo1.mp3');

    this.load.audio('ready', 'assets/sounds/ready.ogg');
    this.load.audio('ready2', 'assets/sounds/ready2.wav');
    this.load.audio('whoosh', 'assets/sounds/whoosh1.mp3');
    this.load.audio('countdown', 'assets/sounds/countdown.mp3');
    this.load.audio('minicountdown', 'assets/sounds/minicountdown.mp3');
    this.load.audio('error', 'assets/sounds/error.wav');
    this.load.audio('sound2', 'assets/sounds/sound2.wav');
    this.load.audio('gunshot', 'assets/sounds/gunshot.mp3');

    boards.on('ready', () => {
      console.log('Boards are ready to use');
      this.onLoadComplete();
    });
  }
  onLoadComplete(){
    this.game.state.start('Menu');
  }
}

module.exports = Preload;
