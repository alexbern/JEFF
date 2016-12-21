const SensorPoint = require('../../utils/sensorpoint');

class Menu{
  preload(){
    this.readySound = this.add.audio('ready');
    this.readySound2 = this.add.audio('ready2');
    this.whooshSound = this.add.audio('whoosh');
    this.demo = this.add.audio('demo1');
  }
  create(){
    this.counter = 0;
    this.secondcount = 0;

    this.p1counter = 0;
    this.p2counter = 0;

    this.demoplaying = false;

    this.initScene()

    this.p1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    this.p2 = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);

    this.a3 = new SensorPoint('A3', 1015, 'A');
    this.b0 = new SensorPoint('A0', 1015, 'B');

  }

  update(){
    if (this.secondcount >= 50) {
      if(this.a3.isOn && !this.demoplaying){
        this.player2.frame = 1;
        if (this.p2counter === 0) {
          if (this.b0.isOn) {
            this.readySound2.play();
          }else{
            this.readySound.play();
          }
          this.p2counter++;
        }
      }else{
        this.player2.frame = 0;
        this.p2counter = 0;
      }

      if(this.b0.isOn && !this.demoplaying){
        this.player1.frame = 1;
        if (this.p1counter === 0) {
          if (this.a3.isOn) {
            this.readySound2.play();
          }else{
            this.readySound.play();
          }
          this.p1counter++;
        }
      }else{
        this.player1.frame = 0;
        this.p1counter = 0;
      }

      if (this.a3.isOn && this.b0.isOn && !this.demoplaying) {
        this.initStart();
      }



      //KEYBOARD
      // if(this.p1.isDown && !this.demoplaying){
      //   this.player1.frame = 1;
      //   if (this.p1counter === 0) {
      //     if (this.p2.isDown) {
      //       this.readySound2.play();
      //     }else{
      //       this.readySound.play();
      //     }
      //     this.p1counter++;
      //   }
      // }else{
      //   this.player1.frame = 0;
      //   this.p1counter = 0;
      // }
      //
      // if(this.p2.isDown && !this.demoplaying){
      //   this.player2.frame = 1;
      //   if (this.p2counter === 0) {
      //     if (this.p1.isDown) {
      //       this.readySound2.play();
      //     }else{
      //       this.readySound.play();
      //     }
      //     this.p2counter++;
      //   }
      // }else{
      //   this.player2.frame = 0;
      //   this.p2counter = 0;
      // }
      //
      // if (this.p1.isDown && this.p2.isDown && !this.demoplaying) {
      //   this.initStart();
      // }

    }else{
      this.secondcount++;
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

    this.player1 = this.game.add.sprite(window.innerWidth/2 + 80, window.innerHeight - 290, 'p1ballsheet');
    this.player2 = this.game.add.sprite(window.innerWidth/2 - 80, window.innerHeight - 290, 'p2ballsheet');
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
      this.demoplaying = true;
      this.add.tween(this.player1).to({x: (-920)}, 1500, "Linear", true);
      this.add.tween(this.player2).to({x: (-1000)}, 1500, "Linear", true);
      this.add.tween(this.startText).to( { alpha: 0 }, 1500, "Linear", true);

      this.trees.autoScroll(-90, 0);
      this.bush1.autoScroll(-150, 0);
      this.bush2.autoScroll(-90, 0);
      this.track.autoScroll(-150, 0);

      const interval = setInterval(()=>{
        clearInterval(interval);
        this.initDemo();
      }, 2000);
    }
  }

  initDemo(){
    this.speaker = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'speaker');
    this.speaker.anchor.setTo(0.5, 0.5);
    this.speaker.scale.setTo(0.8, 0.8)
    this.speaker.aplha = 0;
    this.add.tween(this.speaker).to({ alpha: 1 }, 1200, "Linear", true);
    this.add.tween(this.speaker.scale).to({x: 0.7, y:0.7}, 300, "Linear", true, 0, 1000, true);

    this.demo.play();
    this.demo.onStop.add(this.demoEnd, this);
  }

  demoEnd(){
    this.add.tween(this.speaker).to({ alpha: 0 }, 1200, "Linear", true);
    this.add.tween(this.logo).to({ alpha: 0 }, 1200, "Linear", true);
    this.trees.autoScroll(0, 0);
    this.bush1.autoScroll(0, 0);
    this.bush2.autoScroll(0, 0);
    this.track.autoScroll(0, 0);

    const interval = setInterval(()=>{
      clearInterval(interval);
      this.startGame();
    }, 1500)
  }

  startGame(){
    this.game.state.start('Play');
  }
}

module.exports = Menu;
