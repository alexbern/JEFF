const five = require('johnny-five')
const board = new five.Board();
const sensorpoint = require('../../utils/sensorpoint');

class Menu{
  preload(){
    // board.on('ready', () => {
    //   let control1 = sensorpoint("A0", 580);
    //   this.sprite = this.game.add.sprite(100,100,'sprite');
    //   this.sprite.anchor.setTo(0.5, 0.5);
    // });
    this.startGame();
  }
  update(){

  }
  startGame(){
    this.game.state.start('Play');
  }
}

module.exports = Menu;
