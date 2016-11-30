const five = require('johnny-five')
const board = new five.Board();
const sensorpoint = require('../../utils/sensorpoint');

class Menu{
  create(){

    board.on('ready', () => {
      let stuff = sensorpoint("A0", "580");

      this.sprite = this.game.add.sprite(100,100,'sprite');
      this.sprite.anchor.setTo(0.5, 0.5);
    });
  }
  update(){
  }
  stuff(){
    console.log('do stuff');
  }
}

module.exports = Menu;