// const five = require('johnny-five'),
//   board = new five.Board();
//
// board.on('ready', () => {
//   const led = new five.Led(10);
//   let isOn = false;
//   setInterval(() => {
//     isOn = !isOn;
//     if(isOn) led.on();
//     else led.off();
//   }, 1000);
// });

let game;

init = () =>{
  game = new Phaser.Game(480, 320, Phaser.AUTO);
}

init();
