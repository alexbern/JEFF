//const SensorPoint = require('../../utils/sensorpoint');

class Play{
  create(){
    this.initScene();
    this.initPlayers();
    this.initControls();

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 800;

    this.timerTime = 3;

    this.enableControls = 0;
    this.enableAwnser = 0;
    this.questionSounds = ['basketball', 'baseball', 'football', 'tennis'];
    this.activeSound = '';

    this.p1score = 0;
    this.p2score = 0;

    this.countdown();
  }

  countdown(){
    let countdown = setInterval(()=>{

      if (this.timerTime > 2) {
        this.countdownimage = this.game.add.sprite(window.innerWidth/2, window.innerHeight/2,'countdown',0);
        this.countdownimage.anchor.setTo(0.5, 0.5);
      }
      if (this.timerTime == 2) {
        this.countdownimage.frame = 1;
      }
      if (this.timerTime == 1) {
        this.countdownimage.frame = 2;
      }
      if (this.timerTime > 0) {
        this.timerTime--;
      }else{
        this.countdownimage.frame = 3;
        this.add.tween(this.countdownimage).to( { alpha: 0 }, 1500, "Linear", true);

        clearInterval(countdown);
        this.startGame();

        this.add.tween(this.player1).to({x: (window.innerWidth / 10)}, 1000, "Linear", true);
        this.add.tween(this.player2).to({x: (window.innerWidth / 10)}, 1000, "Linear", true);
      }
    }, 1000);
  }

  startGame(){
    let timer = 1;

    this.player1.animations.play('run', 12, true);
    this.player2.animations.play('run', 12, true);

    this.trees.autoScroll(-90, 0);
    this.bush1.autoScroll(-150, 0);
    this.bush2.autoScroll(-90, 0);
    this.track.autoScroll(-150, 0);
    this.clouds.autoScroll(-150, 0);

    let extracountdown = setInterval(()=>{
      if (timer > 1) {
        timer--;
      }else{
        clearInterval(extracountdown);
        this.generateQuestion();
        this.enableControls = 1;
      }
    }, 1200);


  }
  update(){
    if (this.key1.isDown && this.enableControls != 0 && this.enableAwnser != 0) {
      this.checkAwnser('football', this.player1);
    }else if(this.key2.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      this.checkAwnser('basketball', this.player1);
    }
    else if(this.key3.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      this.checkAwnser('tennis', this.player1);
    }
    else if(this.key4.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      this.checkAwnser('baseball', this.player1);
    }
    else if(this.key5.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      this.checkAwnser('football', this.player2);
    }
    else if(this.key6.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      this.checkAwnser('basketball', this.player2);
    }
    else if(this.key7.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      this.checkAwnser('tennis', this.player2);
    }
    else if(this.key8.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      this.checkAwnser('baseball', this.player2);
    }

  }

  checkAwnser(a, p){
    if (a === this.activeSound) {
        this.scoreUp(p);
        this.generateBall(this.activeSound);
        this.speaker.kill();
        this.enableAwnser = 0;
        this.awnserCooldown();
    }
  }

  generateQuestion(){
    let rnd = Math.round(Math.random() * (this.questionSounds.length - 1));
    this.activeSound = this.questionSounds[rnd];
    console.log('Sound that will be played: ' + this.activeSound);
    this.speaker = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'speaker');
    this.speaker.anchor.setTo(0.5, 0.5);
    this.speaker.scale.setTo(0.8, 0.8)
    this.add.tween(this.speaker.scale).to({x: 0.7, y:0.7}, 300, "Linear", true, 0, 1000, true);
    this.enableAwnser = 1;
  }

  generateBall(sound){
    let xVelo = this.game.rnd.integerInRange(600, 800);
    let yVelo = this.game.rnd.integerInRange(-600, -800);

    console.log(xVelo, yVelo);

    if (sound === 'basketball') {
      this.ball = this.game.add.sprite(100 , window.innerHeight + 50, 'basketbal');
      this.ball.scale.setTo(0.5, 0.5);
      this.game.physics.arcade.enable(this.ball);
      this.ball.body.velocity.x += xVelo;
      this.ball.body.velocity.y = yVelo;
    }

    if (sound === 'baseball') {
      this.ball = this.game.add.sprite(100 , window.innerHeight + 50, 'honkbal');
      this.ball.scale.setTo(0.5, 0.5);
      this.game.physics.arcade.enable(this.ball);
      this.ball.body.velocity.x += xVelo;
      this.ball.body.velocity.y = yVelo;
    }

    if (sound === 'football') {
      this.ball = this.game.add.sprite(100 , window.innerHeight + 50, 'voetbal');
      this.ball.scale.setTo(0.5, 0.5);
      this.game.physics.arcade.enable(this.ball);
      this.ball.body.velocity.x += xVelo;
      this.ball.body.velocity.y = yVelo;
    }

    if (sound === 'tennis') {
      this.ball = this.game.add.sprite(100 , window.innerHeight + 50, 'tennisbal');
      this.ball.scale.setTo(0.5, 0.5);
      this.game.physics.arcade.enable(this.ball);
      this.ball.body.velocity.x += xVelo;
      this.ball.body.velocity.y = yVelo;
    }
  }

  scoreUp(player){
    if (player === this.player1) {
      this.encouragement(player);
      this.p1score++;
      if (this.p1score < 9) {
        this.add.tween(this.player1).to({x: (window.innerWidth / 10) * (this.p1score + 1)}, 1000, "Linear", true);
      }else{

      }
    }else if(player === this.player2){
      this.encouragement(player);
      this.p2score++;
      if (this.p2score < 9) {
        this.add.tween(this.player2).to({x: (window.innerWidth / 10) * (this.p2score + 1)}, 1000, "Linear", true);
      }else{

      }
    }


  }

  encouragement(player){
    let counter = 1;

    let p1enc = ['p1e1', 'p1e2', 'p1e3'];
    let p2enc = ['p2e1', 'p2e2', 'p2e3'];

    let rnd = Math.round(Math.random() * (p1enc.length - 1));

    if (player === this.player1) {
      let pick = p1enc[rnd];
      this.encouragementmsg = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, pick);
      this.encouragementmsg.anchor.setTo(0.5, 0.5);
      this.add.tween(this.encouragementmsg.scale).to({x: 0.9, y:0.9}, 400, "Linear", true, 0, 1000, true);
    }

    if (player === this.player2) {
      let pick = p2enc[rnd];
      this.encouragementmsg = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, pick);
      this.encouragementmsg.anchor.setTo(0.5, 0.5);
      this.add.tween(this.encouragementmsg.scale).to({x: 0.9, y:0.9}, 400, "Linear", true, 0, 1000, true);
    }

    let interval = setInterval(()=>{
      if (counter > 0) {
        counter--;
      }else{
        this.encouragementmsg.kill();
        clearInterval(interval);
      }
    }, 500);
  }

  initPlayers(){
    this.player2 = this.game.add.sprite(- window.innerWidth / 10, window.innerHeight - 180, 'p2sheet');
    this.player2.anchor.setTo(0.5, 1);
    this.player2.animations.add('run');
    this.player2.scale.setTo(0.8, 0.8);

    this.player1 = this.game.add.sprite(- window.innerWidth / 10, window.innerHeight - 90, 'p1sheet');
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

    this.clouds.autoScroll(-10, 0);
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
  }

  awnserCooldown(){
    let cooldownTimer = 3;

    let cooldown = setInterval(()=>{

      if (this.p1score === 10) {
        this.winner(this.player1);
      }else if(this.p2score === 10){
        this.winner(this.player2);
      }

      if (cooldownTimer == 3) {
        this.minicountdown = this.game.add.sprite(window.innerWidth/2, window.innerHeight/2,'countdown',0);
        this.minicountdown.anchor.setTo(0.5, 0.5);
        this.minicountdown.scale.setTo(0.6, 0.6);
      }

      if (cooldownTimer == 2) {
        this.minicountdown.frame = 1;
      }

      if (cooldownTimer == 1) {
        this.minicountdown.frame = 2;
      }

      if (cooldownTimer > 0) {
        cooldownTimer--;
      }else{
        this.minicountdown.kill();
        this.generateQuestion();
        clearInterval(cooldown);
      }

    }, 1000)
  }

  winner(player){
    if (player === this.player1) {
      console.log('Player 1 has won');
      this.game.state.start('Gameover');
    }else if(player === this.player2){
      console.log('Player 2 has won');
      this.game.state.start('Gameover');
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
