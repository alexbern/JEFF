const five = require('johnny-five')
const board = new five.Board();

class Menu{
  create(){

    board.on('ready', () => {
      var sensor = new five.Sensor("A0");
      sensor.on("change", (value) => {
        if (value > 580) {
          console.log('bal zit erop');
          this.stuff();
        }else{
          console.log('bal is weg');
        }
      });

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
