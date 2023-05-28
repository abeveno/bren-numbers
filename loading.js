"use strict";

var loadingScene = {
  preload: function () {
    var sfxIntro = this.add.audio('intro');
    sfxIntro.play();
    
    var bgColor = this.add.image(0,0,PhaserHelper.colorTexture(TTGame.Configs.backgroundColorNormal));
    bgColor.width = this.world.width;
    bgColor.height = this.world.height;

    var bg1 = this.add.image(0,0,PhaserHelper.colorTexture(TTGame.Configs.trueColor));
    bg1.width = this.world.centerX;
    bg1.height = this.world.centerY;

    var bg2 = this.add.image(this.world.centerX,this.world.centerY,PhaserHelper.colorTexture(TTGame.Configs.falseColor));
    bg2.width = this.world.centerX;
    bg2.height = this.world.centerY;

    var bg3 = this.add.image(0,this.world.centerY,PhaserHelper.colorTexture(TTGame.Configs.questionColor));
    bg3.anchor.setTo(0,0.5);
    bg3.width = this.world.width;
    bg3.height = this.world.centerY*0.4;

    this.number2 = this.add.text(this.world.centerX*1.5, this.world.centerY/2, '1', { font: '500px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.questionColor });
    this.number2.ratio = Helper.getScaleByPercent(this.number2.height,this.world.centerY,66);
    this.number2.scale.setTo(this.number2.ratio);
    this.number2.anchor.setTo(0.5,0.6);
    this.number2.visible = false;

    this.number3 = this.add.text(this.world.centerX/2, this.world.centerY*1.5, '2', { font: '500px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.questionColor });
    this.number3.ratio = Helper.getScaleByPercent(this.number3.height,this.world.centerY,66);
    this.number3.scale.setTo(this.number3.ratio);
    this.number3.anchor.setTo(0.5,0.4);
    this.number3.visible = false;

    this.label = this.add.text(this.world.centerX, this.world.centerY, 'TAP GREEN IF \nYOU SEE IT RIGHT', { font: '100px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.infoColor });
    this.label.anchor.setTo(0.5,0.5);
    this.label.ratio = Helper.getScaleByPercent(this.label.height,this.world.centerY*0.4,45);
    this.label.scale.setTo(this.label.ratio);

    this.number4 = this.add.text(this.world.centerX*1.5, this.world.centerY*1.5, '3', { font: '500px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.questionColor });
    this.number4.ratio = Helper.getScaleByPercent(this.number4.height,this.world.centerY,66);
    this.number4.scale.setTo(this.number4.ratio);
    this.number4.anchor.setTo(0.5,0.4);
    this.number4.visible = false;   

    this.bg = this.add.image(0,0,PhaserHelper.colorTexture(TTGame.Configs.trueColor));
    this.bg.width = this.world.width;
    this.bg.height = this.world.height;
    this.bg.visible = false; 

    this.number1 = this.add.text(this.world.width/2, this.world.height/2, 'GO!', { font: '500px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.questionColor });
    this.number1.ratio = Helper.getScaleByPercent(this.number1.height,this.world.centerY,66);
    this.number1.scale.setTo(this.number1.ratio);
    this.number1.anchor.setTo(0.5,0.5);
    this.number1.visible = false;
  },
  create: function() {
    this.time.events.add(Phaser.Timer.SECOND * 1, function() {
      this.number4.visible = true;
      this.label.setText('TAP GREEN IF \nYOU SEE IT RIGHT');
    }, this);

    this.time.events.add(Phaser.Timer.SECOND * 2, function() {
      this.number4.visible = false;
      this.number3.visible = true;
      this.label.setText('FASTER TAP \nBIGGER SCORE');
    }, this);

    this.time.events.add(Phaser.Timer.SECOND * 3, function() {
      this.number3.visible = false;
      this.number2.visible = true;
      this.label.setText('ARE YOU READY?');
    }, this);

    this.time.events.add(Phaser.Timer.SECOND * 4, function() {
      this.bg.visible = true;
      this.number1.visible = true;
    }, this);

    this.time.events.add(Phaser.Timer.SECOND * 5, function() {
      this.state.start('PlayScene');
    }, this);
  },
  update: function() {
  
  }
};