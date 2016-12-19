class Gameover{
  init(winner){
    this.winner = winner;
  }
  preload(){
    this.initScene()
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

    if (this.winner === 'player1') {
      this.stage = this.game.add.sprite(window.innerWidth/2 - 200, window.innerHeight/2 + 20, 'p1stage');
    }else{
      this.stage = this.game.add.sprite(window.innerWidth/2 - 200, window.innerHeight/2 + 20, 'p1stage');
    }


    //this.stage.animations.add('wave');
    //this.stage.animations.play('wave', 3, true);

    this.bush1 = this.game.add.tileSprite(0, window.innerHeight, window.innerWidth, 96, 'bush1');
    this.bush1.anchor.setTo(0, 1);

    if (this.winner === 'player1') {
      this.tekst = this.game.add.sprite(window.innerWidth/2 - 170, window.innerHeight/2 - 360, 'p1wintype');
      this.startText = this.game.add.text(window.innerWidth/2, window.innerHeight/2 - 80, 'De gele speler bleek het best de geluiden te herkennen', { font: '25px Calibri', fill: '#ffffff', align: 'center' });
      this.startText.anchor.setTo(0.5, 0.5);
    }else{
      this.tekst = this.game.add.sprite(window.innerWidth/2 - 170, window.innerHeight/2 - 360, 'p2wintype');
      this.startText = this.game.add.text(window.innerWidth/2, window.innerHeight/2 - 80, 'De blauwe speler bleek het best de geluiden te herkennen', { font: '25px Calibri', fill: '#ffffff', align: 'center' });
      this.startText.anchor.setTo(0.5, 0.5);
    }

    this.menuclouds = this.game.add.tileSprite(window.innerWidth/2 - 500, window.innerHeight/2 - 400, 1144, 301, 'menuclouds');
    this.menuclouds.autoScroll(-10, 0);

    // let counter = 0;
    //
    // let interval = setInterval(()=>{
    //   if (counter < 10) {
    //     counter++;
    //   }else{
    //     console.log('restart the fucking game');
    //     clearInterval(interval);
    //     this.game.state.start('Preload');
    //   }
    // }, 1000);


    //this.game.add.tween(this.startText.scale).to( { x: 1.2, y: 1.2 }, 2000, Phaser.Easing.Linear.NONE, true, 0, 500, true);
  }
}

module.exports = Gameover;
