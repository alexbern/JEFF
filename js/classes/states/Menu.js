class Menu{
  preload(){
    this.initScene()
    this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    this.key1.onDown.add(this.startGame, this);
  }
  initScene(){
    this.stage.backgroundColor = "#B5CEE7";
    this.air = this.game.add.tileSprite(0, 0, window.innerWidth, 357, 'air');
    this.bush2 = this.game.add.tileSprite(0, window.innerHeight - 160, window.innerWidth, 86, 'bush2');
    this.bush2.anchor.setTo(0, 1);
    this.trees = this.game.add.tileSprite(0, window.innerHeight - 160, window.innerWidth, 332, 'trees');
    this.trees.anchor.setTo(0, 1);
    this.track = this.game.add.tileSprite(0, window.innerHeight - -65, window.innerWidth, 225, 'track');
    this.track.anchor.setTo(0, 1);

    this.logo = this.game.add.sprite(window.innerWidth/2 - 350, window.innerHeight/2 - 250, 'logo');
    this.logo.animations.add('balls');
    this.logo.animations.play('balls', 2, true);

    this.menuclouds = this.game.add.tileSprite(window.innerWidth/2 - 600, window.innerHeight/2 - 350, 1144, 301, 'menuclouds');
    this.game.add.tween(this.menuclouds).to({y:205}, 1500, Phaser.Easing.Linear.NONE, true, 0, 2000, true);
    this.startText = this.game.add.text(window.innerWidth/2, window.innerHeight/2, 'Til beide voetballen op om het spel te starten', { font: '25px Coves', fill: '#ffffff', align: 'center' });
    this.startText.anchor.setTo(0.5, 0.5);
    //this.game.add.tween(this.startText.scale).to( { x: 1.2, y: 1.2 }, 2000, Phaser.Easing.Linear.NONE, true, 0, 500, true);
  }
  startGame(){
    this.game.state.start('Play');
  }
}

module.exports = Menu;
