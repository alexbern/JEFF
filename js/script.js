require('../vendors/johnny-five-init');
const Preload = require('./classes/states/Preload');
const Menu = require('./classes/states/Menu');
const Play = require('./classes/states/Play');
const Gameover = require('./classes/states/Gameover');

let game;

init = () =>{
  game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);
  game.state.add('Preload',Preload,true);
  game.state.add('Menu',Menu,false);
  game.state.add('Play',Play,false);
  game.state.add('Gameover',Gameover,false);
}

init();
