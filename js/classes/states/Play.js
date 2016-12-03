class Play{
  create(){
    this.initPlayers();
    this.initControls();
    this.timerTime = 3;
    this.enableControls = 0;
    this.countdown();
  }
  startGame(){
    console.log('Game Start');
  }
  update(){
    if (this.key1.isDown && this.enableControls != 0) {
      console.log('ONE');
    }else if(this.key2.isDown && this.enableControls != 0){
      console.log('TWO');
    }
    else if(this.key3.isDown && this.enableControls != 0){
      console.log('THREE');
    }
    else if(this.key4.isDown && this.enableControls != 0){
      console.log('FOUR');
    }
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
  }
  countdown(){
    let countdown = setInterval(()=>{
      if (this.timerTime > 0) {
        this.timerTime--;
        console.log(this.timerTime);
      }else{
        this.startGame();
        this.enableControls = 1;
        clearInterval(countdown);
      }
    }, 1000);
  }
}

module.exports = Play;
