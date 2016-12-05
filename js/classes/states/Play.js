class Play{
  create(){
    this.initPlayers();
    this.initControls();
    this.timerTime = 3;
    this.enableControls = 0;
    this.enableAwnser = 0;
    this.questionSounds = ['basketball', 'golf', 'football', 'tennis'];
    this.activeSound;
    this.countdown();
  }
  startGame(){
    console.log('Game Start');
    this.generateQuestion();
    this.enableControls = 1;
    this.enableAwnser = 1;
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
      this.checkAwnser('golf', this.player1);
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
      this.checkAwnser('golf', this.player2);
    }
  }
  checkAwnser(a, p){
    if (a === this.activeSound) {
        this.scoreUp(p);
    }
  }
  generateQuestion(){
    let rnd = Math.round(Math.random() * (this.questionSounds.length - 1));
    this.activeSound = this.questionSounds[rnd];
    console.log(this.activeSound);
  }
  scoreUp(player){
    console.log(player);
    player.x += 20;
    this.enableAwnser = 0;
    this.awnserCooldown();
  }
  initPlayers(){
    this.player1 = this.game.add.sprite(200, 200, 'sprite');
    this.player1.anchor.setTo(0.5, 0.5);
    this.player2 = this.game.add.sprite(200, 400, 'sprite');
    this.player2.anchor.setTo(0.5, 0.5);
  }
  initControls(){
    this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    this.key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    this.key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    this.key4 = this.game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
    this.key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
    this.key6 = this.game.input.keyboard.addKey(Phaser.Keyboard.SIX);
    this.key7 = this.game.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
    this.key8 = this.game.input.keyboard.addKey(Phaser.Keyboard.EIGHT);
  }
  countdown(){
    let countdown = setInterval(()=>{
      if (this.timerTime > 0) {
        this.timerTime--;
      }else{
        this.startGame();
        this.generateQuestion();
        this.enableControls = 1;
        this.enableAwnser = 1;
        clearInterval(countdown);
      }
    }, 1000);
  }
  awnserCooldown(){
    let cooldownTimer = 2;
    let cooldown = setInterval(()=>{
      if (cooldownTimer > 0) {
        cooldownTimer--;
      }else{
        this.enableAwnser = 1;
        this.generateQuestion();
        clearInterval(cooldown);
      }
    }, 1000)
  }
}

module.exports = Play;
