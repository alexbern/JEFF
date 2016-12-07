class Menu{
  preload(){
    this.startGame();
  }
  startGame(){
    this.game.state.start('Play');
  }
}

module.exports = Menu;
