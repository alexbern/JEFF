class Preload{
  constructor(){
  }
  preload(){
    this.load.image('sprite', 'assets/sprites/sprite.jpg');
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
  }
  onLoadComplete(){
    this.game.state.start('Menu');
  }
}

module.exports = Preload;
