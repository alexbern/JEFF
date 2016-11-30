require('../vendors/johnny-five-init');
const Preload = require('./classes/states/Preload');
const Menu = require('./classes/states/Menu');

let game;

init = () =>{
  game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);
  game.state.add('Preload',Preload,true);
  game.state.add('Menu', Menu,false);
}

init();
