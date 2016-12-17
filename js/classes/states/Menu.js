class Menu{
  create(){
    this.counter = 0;

    this.initScene()

    this.p1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    this.p2 = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
  }

  update(){
    /////////////////
    // TODO MET JUISTE INPUTS
    /////////////////

    if(this.p1.isDown){
      this.player1.frame = 1;
    }else{
      this.player1.frame = 0;
    }

    if(this.p2.isDown){
      this.player2.frame = 1;
    }else{
      this.player2.frame = 0;
    }

    if (this.p1.isDown && this.p2.isDown) {
      this.initStart();
    }

  }
  initScene(){
    this.stage.backgroundColor = "#B5CEE7";
    this.air = this.game.add.tileSprite(0, 0, window.innerWidth, 357, 'air');
    this.bush2 = this.game.add.tileSprite(0, window.innerHeight - 260, window.innerWidth, 86, 'bush2');
    this.bush2.anchor.setTo(0, 1);
    this.trees = this.game.add.tileSprite(0, window.innerHeight - 260, window.innerWidth, 332, 'trees');
    this.trees.anchor.setTo(0, 1);
    this.track = this.game.add.tileSprite(0, window.innerHeight - 35, window.innerWidth, 225, 'track');
    this.track.anchor.setTo(0, 1);

    this.player1 = this.game.add.sprite(window.innerWidth/2 - 80, window.innerHeight - 290, 'p1ballsheet');
    this.player2 = this.game.add.sprite(window.innerWidth/2 + 80, window.innerHeight - 290, 'p2ballsheet');
    this.player1.anchor.setTo(0.5, 0.5);
    this.player2.anchor.setTo(0.5, 0.5);
    this.player1.scale.setTo(1.1, 1.1);
    this.player2.scale.setTo(1.1, 1.1);

    this.bush1 = this.game.add.tileSprite(0, window.innerHeight, window.innerWidth, 96, 'bush1');
    this.bush1.anchor.setTo(0, 1);

    this.menuclouds = this.game.add.tileSprite(0, 50, window.innerWidth, 190, 'menuclouds');
    this.menuclouds.autoScroll(-10, 0);

    this.logo = this.game.add.sprite(window.innerWidth/2 - 350, window.innerHeight/2 - 300, 'logo');
    this.logo.animations.add('balls');
    this.logo.animations.play('balls', 2, true);

    this.startText = this.game.add.text(window.innerWidth/2, window.innerHeight/2 - 80, 'Til beide voetballen op om het spel te starten', { font: '25px Calibri', fill: '#ffffff', align: 'center' });
    this.startText.anchor.setTo(0.5, 0.5);

  }
  initStart(){
    if (this.counter === 0) {
      this.counter++;
      this.add.tween(this.logo).to({x: (-1000)}, 800, "Linear", true);
      this.add.tween(this.startText).to({x: (-1000)}, 800, "Linear", true);
      const interval = setInterval(()=>{
        clearInterval(interval);
        this.startGame();
      }, 3000);
    }
  }
  startGame(){
    this.game.state.start('Play');
  }
}

module.exports = Menu;
