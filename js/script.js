require('./johnny-five-init');

const five = require('johnny-five'),
  board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(13);
  let isOn = false;
  setInterval(() => {
    isOn = !isOn;
    if(isOn) led.on();
    else led.off();
  }, 2000);
});

let game;

init = () =>{
  game = new Phaser.Game(480, 320, Phaser.AUTO);
}

init();
