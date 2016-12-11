const SensorPoint = require('../../utils/sensorpoint');

class Play{
  create(){
    this.initScene();
    this.initPlayers();
    this.initControls();
    this.timerTime = 3;
    this.enableControls = 0;
    this.enableAwnser = 0;
    this.questionSounds = ['basketball', 'golf', 'football', 'tennis'];
    this.activeSound = '';
    this.p1score = 0;
    this.p2score = 0;
    this.countdown();
  }
  startGame(){
    console.log('Start the game');
    this.player1.animations.play('run', 12, true);
    this.player2.animations.play('run', 12, true);
    this.trees.autoScroll(-60, 0);
    this.bush1.autoScroll(-100, 0);
    this.bush2.autoScroll(-40, 0);
    this.track.autoScroll(-100, 0);
    this.clouds.autoScroll(-100, 0);
    this.generateQuestion();
    this.enableControls = 1;
    this.enableAwnser = 1;
  }
  update(){

    if (this.a0.isOn && this.enableControls != 0 && this.enableAwnser != 0) {
      this.checkAwnser('football', this.player1);
    }

    // }else if(this.a1.isOn && this.enableControls != 0 && this.enableAwnser != 0){
    //   this.checkAwnser('basketball', this.player1);
    // }
    // else if(this.a2.isOn && this.enableControls != 0 && this.enableAwnser != 0){
    //   this.checkAwnser('tennis', this.player1);
    // }
    // else if(this.key4.isDown && this.enableControls != 0 && this.enableAwnser != 0){
    //   this.checkAwnser('golf', this.player1);
    // }
    // else if(this.a3.isOn && this.enableControls != 0 && this.enableAwnser != 0){
    //   this.checkAwnser('football', this.player2);
    // }
    // else if(this.a4.isOn && this.enableControls != 0 && this.enableAwnser != 0){
    //   this.checkAwnser('basketball', this.player2);
    // }
    // else if(this.a5.isOn && this.enableControls != 0 && this.enableAwnser != 0){
    //   this.checkAwnser('tennis', this.player2);
    // }
    // else if(this.key8.isDown && this.enableControls != 0 && this.enableAwnser != 0){
    //   this.checkAwnser('golf', this.player2);
    // }

    // console.log(this.a0.isOn);

  }
  checkAwnser(a, p){
    if (a === this.activeSound) {
        this.scoreUp(p);
    }
  }
  generateQuestion(){
    let rnd = Math.round(Math.random() * (this.questionSounds.length - 1));
    this.activeSound = this.questionSounds[rnd];
    console.log('Sound that will be played: ' + this.activeSound);
  }
  scoreUp(player){
    if (player === this.player1) {
      this.p1score++;
    }else if(player === this.player2){
      this.p2score++;
    }
    player.x += 20;
    this.enableAwnser = 0;
    this.awnserCooldown();
  }
  initPlayers(){
    this.player2 = this.game.add.sprite(100, window.innerHeight - 180, 'p2sheet');
    this.player2.anchor.setTo(0.5, 1);
    this.player2.animations.add('run');
    this.player2.scale.setTo(0.8, 0.8);
    this.player1 = this.game.add.sprite(100, window.innerHeight - 90, 'p1sheet');
    this.player1.anchor.setTo(0.5, 1);
    this.player1.animations.add('run');
  }
  initScene(){
    this.stage.backgroundColor = "#B5CEE7";
    this.air = this.game.add.tileSprite(0, 0, window.innerWidth, 357, 'air');
    this.clouds = this.game.add.tileSprite(0, 100, window.innerWidth, 190, 'clouds');
    this.bush2 = this.game.add.tileSprite(0, window.innerHeight - 260, window.innerWidth, 86, 'bush2');
    this.bush2.anchor.setTo(0, 1);
    this.trees = this.game.add.tileSprite(0, window.innerHeight - 260, window.innerWidth, 332, 'trees');
    this.trees.anchor.setTo(0, 1);
    this.track = this.game.add.tileSprite(0, window.innerHeight - 35, window.innerWidth, 225, 'track');
    this.track.anchor.setTo(0, 1);
    this.bush1 = this.game.add.tileSprite(0, window.innerHeight, window.innerWidth, 96, 'bush1');
    this.bush1.anchor.setTo(0, 1);
  }
  initControls(){
    let light = 700;

    this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    this.key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    this.key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    this.key4 = this.game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
    this.key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
    this.key6 = this.game.input.keyboard.addKey(Phaser.Keyboard.SIX);
    this.key7 = this.game.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
    this.key8 = this.game.input.keyboard.addKey(Phaser.Keyboard.EIGHT);

    this.a0 = new SensorPoint("A0", light);
    // this.a1 = new SensorPoint("A1", light);
    // this.a2 = new SensorPoint("A2", light);
    // this.a3 = new SensorPoint("A3", light);
    // this.a4 = new SensorPoint("A4", light);
    // this.a5 = new SensorPoint("A5", light);
  }
  countdown(){
    let countdown = setInterval(()=>{
      if (this.timerTime > 0) {
        this.timerTime--;
      }else{
        this.startGame();
        clearInterval(countdown);
      }
    }, 1000);
  }
  awnserCooldown(){
    let cooldownTimer = 2;
    let cooldown = setInterval(()=>{

      if (this.p1score === 10) {
        this.winner(this.player1);
      }else if(this.p2score === 10){
        this.winner(this.player2);
      }

      if (cooldownTimer > 0) {
        cooldownTimer--;
      }else{
        this.enableAwnser = 1;
        this.generateQuestion();
        clearInterval(cooldown);
      }

    }, 1000)
  }
  winner(player){
    if (player === this.player1) {
      console.log('Player 1 has won');
    }else if(player === this.player2){
      console.log('Player 2 has won');
    }
  }
  reset(){
    this.initPlayers();
    this.initControls();
    this.timerTime = 3;
    this.enableControls = 0;
    this.enableAwnser = 0;
    this.activeSound = '';
    this.p1score = 0;
    this.p2score = 0;
    this.countdown();
  }
}

module.exports = Play;
