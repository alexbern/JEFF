const SensorPoint = require('../../utils/sensorpoint');

class Play{
  preload(){
    this.soundJSON = this.cache.getJSON('soundData');
    this.countdownSound = this.add.audio('countdown');
    this.minicountdownSound = this.add.audio('minicountdown');
    this.errorSound = this.add.audio('error');
    this.soundeffect2 = this.add.audio('sound2');
    this.gunshot = this.add.audio('gunshot');

    this.p1e1 = this.add.audio('p1e1');
    this.p1e2 = this.add.audio('p1e2');
    this.p1e3 = this.add.audio('p1e3');
    this.p2e1 = this.add.audio('p2e1');
    this.p2e2 = this.add.audio('p2e2');
    this.p2e3 = this.add.audio('p2e3');
  }
  create(){

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 800;

    this.initScene();
    this.initPlayers();
    this.initControls();

    this.timerTime = 3;

    this.sensorcount = 0;

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
        this.countdownSound.play();
      }
      if (this.timerTime == 2) {
        this.countdownimage.frame = 1;
        this.countdownSound.play();
      }
      if (this.timerTime == 1) {
        this.countdownimage.frame = 2;
        this.countdownSound.play();
      }
      if (this.timerTime > 0) {
        this.timerTime--;
      }else{
        this.countdownimage.frame = 3;
        this.gunshot.play();
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

    this.mapping = this.game.add.sprite(window.innerWidth / 2, -200, 'mapping');
    this.mapping.anchor.setTo(0.5, 0);

    this.yellowpoint = this.game.add.sprite(window.innerWidth / 2 - (275/2) + 5, -150, 'yellowpoint');
    this.yellowpoint.anchor.setTo(0.5, 0.5);

    this.bluepoint = this.game.add.sprite(window.innerWidth / 2 - (275/2) + 5, -105, 'bluepoint');
    this.bluepoint.anchor.setTo(0.5, 0.5);

    this.add.tween(this.mapping).to({y: (-20)}, 1000, "Linear", true);
    this.add.tween(this.yellowpoint).to({y: (30)}, 1000, "Linear", true);
    this.add.tween(this.bluepoint).to({y: (75)}, 1000, "Linear", true);

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

    if (this.sensorcount >= 50) {
      console.log(this.b2.isOn);

      if (this.a3.isOn && this.enableControls != 0 && this.enableAwnser != 0) {
        this.checkAwnser('football', this.player1);
      }else if(this.a2.isOn && this.enableControls != 0 && this.enableAwnser != 0){
        this.checkAwnser('basketball', this.player1);
      }
      else if(this.a1.isOn && this.enableControls != 0 && this.enableAwnser != 0){
        this.checkAwnser('tennis', this.player1);
      }
      else if(this.a0.isOn && this.enableControls != 0 && this.enableAwnser != 0){
        this.checkAwnser('baseball', this.player1);
      }
      else if(this.b0.isOn && this.enableControls != 0 && this.enableAwnser != 0){
        this.checkAwnser('football', this.player2);
      }
      else if(this.b1.isOn && this.enableControls != 0 && this.enableAwnser != 0){
        this.checkAwnser('basketball', this.player2);
      }
      else if(this.b2.isOn && this.enableControls != 0 && this.enableAwnser != 0){
        this.checkAwnser('tennis', this.player2);
      }
      else if(this.b3.isOn && this.enableControls != 0 && this.enableAwnser != 0){
        this.checkAwnser('baseball', this.player2);
      }

      //keyboard controls
      // if (this.key1.isDown && this.enableControls != 0 && this.enableAwnser != 0) {
      //   this.checkAwnser('football', this.player1);
      // }else if(this.key2.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      //   this.checkAwnser('basketball', this.player1);
      // }
      // else if(this.key3.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      //   this.checkAwnser('tennis', this.player1);
      // }
      // else if(this.key4.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      //   this.checkAwnser('baseball', this.player1);
      // }
      // else if(this.key5.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      //   this.checkAwnser('football', this.player2);
      // }
      // else if(this.key6.isDown&& this.enableControls != 0 && this.enableAwnser != 0){
      //   this.checkAwnser('basketball', this.player2);
      // }
      // else if(this.key7.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      //   this.checkAwnser('tennis', this.player2);
      // }
      // else if(this.key8.isDown && this.enableControls != 0 && this.enableAwnser != 0){
      //   this.checkAwnser('baseball', this.player2);
      // }
    }else{
      this.sensorcount++;
    }

    if (this.ball) {
      this.ball.angle += 2.5;
    }
  }

  sensorCheck(){
    if (this.a0.isOn || this.a1.isOn || this.a2.isOn || this.a3.isOn || this.b0.isOn || this.b1.isOn || this.b2.isOn || this.b3.isOn) {
      return false;
    }else{
      return true;
    }
  }

  keyboardCheck(){
    if (this.key1.isDown || this.key2.isDown || this.key3.isDown || this.key4.isDown || this.key5.isDown || this.key6.isDown || this.key7.isDown || this.key8.isDown) {
      return false;
    }else{
      return true;
    }
  }

  checkAwnser(a, p){
    if (a === this.activeSound) {
        this.soundeffect2.play();
        this.scoreUp(p);
        this.generateBall(this.activeSound);
        this.speaker.kill();
        this.enableAwnser = 0;
        this.awnserCooldown();
    }
  }

  generateQuestion(){

    let rndarr = Math.round(Math.random() * (this.soundJSON.sounds.length - 1));
    let sound = this.soundJSON.sounds[rndarr];
    console.log(sound);
    this.activeSound = sound.type;

    this.player = this.add.audio(sound.name);
    this.player.play();

    this.speaker = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'speaker');
    this.speaker.anchor.setTo(0.5, 0.5);
    this.speaker.scale.setTo(0.8, 0.8)
    this.add.tween(this.speaker.scale).to({x: 0.7, y:0.7}, 300, "Linear", true, 0, 1000, true);
    this.enableAwnser = 1;
  }

  generateBall(sound){
    let xVelo = this.game.rnd.integerInRange(600, 800);
    let yVelo = this.game.rnd.integerInRange(-600, -800);

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
    this.player.stop();
    if (player === this.player1) {
      this.encouragement(player);
      this.p1score++;
      this.updateMapping(player);
      if (this.p1score < 9) {
        this.add.tween(this.player1).to({x: (window.innerWidth / 10) * (this.p1score + 1)}, 1000, "Linear", true);
      }else{

      }
    }else if(player === this.player2){
      this.encouragement(player);
      this.p2score++;
      this.updateMapping(player);
      if (this.p2score < 9) {
        this.add.tween(this.player2).to({x: (window.innerWidth / 10) * (this.p2score + 1)}, 1000, "Linear", true);
      }else{

      }
    }
  }

  updateMapping(player){
    if (player === this.player1) {
      this.yellowpoint.x = (window.innerWidth / 2 - (275/2) + 5) + (275/10) * this.p1score;
    }

    if (player === this.player2) {
      this.bluepoint.x = (window.innerWidth / 2 - (275/2) + 5) + (275/10) * this.p2score;
    }
  }

  encouragement(player){
    let counter = 1;

    let p1enc = ['p1e1', 'p1e2', 'p1e3'];
    let p2enc = ['p2e1', 'p2e2', 'p2e3'];

    let rnd = Math.round(Math.random() * (p1enc.length - 1));

    if (player === this.player1) {
      //GOEDBEZIG BLAUW
      let pick = p1enc[rnd];
      this.p1enc[rnd].play();
      this.encouragementmsg = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, pick);
      this.encouragementmsg.anchor.setTo(0.5, 0.5);
      this.add.tween(this.encouragementmsg.scale).to({x: 0.9, y:0.9}, 400, "Linear", true, 0, 1000, true);
    }

    if (player === this.player2) {
      //GOEDBEZIG BLAUW
      let pick = p2enc[rnd];
      this.p2enc[rnd].play();
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
    let light = 1015;

    this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    this.key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    this.key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    this.key4 = this.game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
    this.key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
    this.key6 = this.game.input.keyboard.addKey(Phaser.Keyboard.SIX);
    this.key7 = this.game.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
    this.key8 = this.game.input.keyboard.addKey(Phaser.Keyboard.EIGHT);

    this.a0 = new SensorPoint('A0', light, 'A');
    this.a1 = new SensorPoint('A1', light, 'A');
    this.a2 = new SensorPoint('A2', light, 'A');
    this.a3 = new SensorPoint('A3', light, 'A');

    this.b0 = new SensorPoint('A0', light, 'B');
    this.b1 = new SensorPoint('A1', light, 'B');
    this.b2 = new SensorPoint('A2', light, 'B');
    this.b3 = new SensorPoint('A3', light, 'B');
  }

  awnserCooldown(){
    let cooldownTimer = 3;

    let cooldown = setInterval(()=>{

      const checksensors = this.sensorCheck();

      if (this.p1score === 10) {
        this.winner(this.player1);
        clearInterval(cooldown);
      }else if(this.p2score === 10){
        this.winner(this.player2);
        clearInterval(cooldown);
      }

      if (cooldownTimer == 3) {
        this.minicountdown = this.game.add.sprite(window.innerWidth/2, window.innerHeight/2,'countdown',0);
        this.minicountdown.anchor.setTo(0.5, 0.5);
        this.minicountdown.scale.setTo(0.6, 0.6);
        this.minicountdownSound.play();
      }

      if (cooldownTimer == 2) {
        this.minicountdown.frame = 1;
        this.minicountdownSound.play();
      }

      if (cooldownTimer == 1) {
        this.minicountdown.frame = 2;
        this.minicountdownSound.play();
      }

      if (cooldownTimer == 0) {
        this.minicountdown.kill();
      }

      if (cooldownTimer > 0 || checksensors === false) {
        cooldownTimer--;
        if (checksensors === false) {
          if (this.key1.isDown || this.key5.isDown && cooldownTimer <= 0) {
            this.sensorerror = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'footballsensor');
            this.sensorerror.anchor.setTo(0.5, 0.5);
            this.add.tween(this.sensorerror).to( { alpha: 0 }, 500, "Linear", true, 0, 1000, true);
          }
          // if (this.a0.isOn || this.b3.isOn) {
          //   this.sensorerror = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'baseballsensor');
          //   this.sensorerror.anchor.setTo(0.5);
          //   this.add.tween(this.sensorerror).to( { alpha: 0 }, 500, "Linear", true, 0, 1000, true);
          // }
          // if (this.a1.isOn || this.b2.isOn) {
          //   this.sensorerror = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'tennissensor');
          //   this.sensorerror.anchor.setTo(0.5);
          //   this.add.tween(this.sensorerror).to( { alpha: 0 }, 500, "Linear", true, 0, 1000, true);
          // }
          // if (this.a2.isOn || this.b1.isOn) {
          //   this.sensorerror = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'basketballsensor');
          //   this.sensorerror.anchor.setTo(0.5);
          //   this.add.tween(this.sensorerror).to( { alpha: 0 }, 500, "Linear", true, 0, 1000, true);
          // }
          // if (this.a3.isOn || this.b0.isOn) {
          //   this.sensorerror = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'footballsensor');
          //   this.sensorerror.anchor.setTo(0.5);
          //   this.add.tween(this.sensorerror).to( { alpha: 0 }, 500, "Linear", true, 0, 1000, true);
          // }
        }
      }else if(cooldownTimer <= 0 && checksensors === true){
        if (this.sensorerror) {
          this.sensorerror.kill();
          this.sensorerror.destroy();
        }
        this.generateQuestion();
        clearInterval(cooldown);
      }

    }, 1000)
  }

  winner(player){

    if (player === this.player1) {
      let winner = 'player1';
      console.log('Player 1 has won');
      this.game.state.start('Gameover', true, false, winner);
    }else if(player === this.player2){
      let winner = 'player2';
      console.log('Player 2 has won');
      this.game.state.start('Gameover', true, false, winner);
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
