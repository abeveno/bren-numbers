"use strict";

var menuScene = {
  preload: function () {
    TTGame.Configs.total = 1;
    this.chosePlayer = false;
    
    var bgColor = this.add.image(0,0,PhaserHelper.colorTexture(TTGame.Configs.backgroundColorNormal));
    bgColor.width = this.world.width;
    bgColor.height = this.world.height;

    this.sfxClick = this.add.audio('click');

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

    var sprite1 = PhaserHelper.imageButton(this.world.centerX/2,this.world.centerY*0.4,'blackperson',this.setPlayer,this);
    sprite1.anchor.setTo(0.5,0.5);
    sprite1.ratio = Helper.getScaleByPercent(sprite1.height,this.world.centerY,66);
    sprite1.scale.setTo(sprite1.ratio);
    sprite1.total = 1;

    var sprite2 = PhaserHelper.imageButton(this.world.centerX*1.5,this.world.centerY*0.4,'greenperson',this.setPlayer,this);
    sprite2.anchor.setTo(0.5,0.5);
    sprite2.ratio = Helper.getScaleByPercent(sprite2.height,this.world.centerY,66);
    sprite2.scale.setTo(sprite2.ratio);
    sprite2.total = 2;

    var sprite3 = PhaserHelper.imageButton(this.world.centerX/2,this.world.centerY*1.6,'redperson',this.setPlayer,this);
    sprite3.anchor.setTo(0.5,0.5);
    sprite3.ratio = Helper.getScaleByPercent(sprite3.height,this.world.centerY,66);
    sprite3.scale.setTo(sprite3.ratio);
    sprite3.total = 3;

    var sprite4 = PhaserHelper.imageButton(this.world.centerX*1.5,this.world.centerY*1.6,'whiteperson',this.setPlayer,this);
    sprite4.anchor.setTo(0.5,0.5);
    sprite4.ratio = Helper.getScaleByPercent(sprite4.height,this.world.centerY,66);
    sprite4.scale.setTo(sprite4.ratio);
    sprite4.total = 4;

    this.sprite5 = this.add.image(this.world.centerX/2 + sprite1.width/2, (this.world.centerY*0.8 - sprite1.height)/2,'rightsmall');
    this.sprite5.ratio = Helper.getScaleByPercent(this.sprite5.height,this.world.centerY,10);
    this.sprite5.scale.setTo(this.sprite5.ratio);

    this.number1 = this.add.text(this.sprite5.x, this.sprite5.y, '1', { font: '100px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.questionColor });
    this.number1.ratio = Helper.getScaleByPercent(this.number1.height,this.world.centerY,20);
    this.number1.scale.setTo(this.number1.ratio);
    this.number1.anchor.setTo(0,0.3);
    this.number1.visible = false;

    this.number2 = this.add.text(this.world.centerX*1.5 + sprite2.width/2, this.sprite5.y, '2', { font: '100px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.questionColor });
    this.number2.ratio = Helper.getScaleByPercent(this.number2.height,this.world.centerY,20);
    this.number2.scale.setTo(this.number2.ratio);
    this.number2.anchor.setTo(0,0.3);
    this.number2.visible = false;

    this.sprite6 = this.add.image(this.world.centerX*1.5 + sprite4.width/2, this.world.centerY + (this.world.centerY*1.2 - sprite4.height)/2,'wrongsmall');
    this.sprite6.ratio = Helper.getScaleByPercent(this.sprite6.height,this.world.centerY,11);
    this.sprite6.scale.setTo(this.sprite6.ratio);

    this.number3 = this.add.text(this.world.centerX/2 + sprite3.width/2, this.sprite6.y, '3', { font: '100px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.questionColor });
    this.number3.ratio = Helper.getScaleByPercent(this.number3.height,this.world.centerY,20);
    this.number3.scale.setTo(this.number3.ratio);
    this.number3.anchor.setTo(0,0.3);
    this.number3.visible = false;

    this.number4 = this.add.text(this.sprite6.x, this.sprite6.y, '4', { font: '100px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.questionColor });
    this.number4.ratio = Helper.getScaleByPercent(this.number4.height,this.world.centerY,20);
    this.number4.scale.setTo(this.number4.ratio);
    this.number4.anchor.setTo(0,0.3);
    this.number4.visible = false;    

    this.label1 = this.add.text(this.world.centerX, this.world.centerY*0.85, 'BREN NUMBERS', { font: '100px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.infoColor });
    this.label1.anchor.setTo(0.5,0);
    this.label1.ratio = Helper.getScaleByPercent(this.label1.height,this.world.centerY*0.2,55);
    this.label1.scale.setTo(this.label1.ratio);

    this.btn1 = PhaserHelper.imageButton(this.world.centerX, this.world.centerY*1.15,'play',this.doChoosePlayer,this);
    this.btn1.anchor.setTo(0.5,1);
    this.btn1.ratio = Helper.getScaleByPercent(this.btn1.height,this.world.centerY*0.2,75);
    this.btn1.scale.setTo(this.btn1.ratio);

    this.btn2 = PhaserHelper.imageButton(this.world.centerX, this.world.centerY*1.15,'relax',this.setRelax,this);
    this.btn2.anchor.setTo(0.5,1);
    this.btn2.ratio = Helper.getScaleByPercent(this.btn2.height,this.world.centerY*0.2,75);
    this.btn2.scale.setTo(this.btn2.ratio);
    this.btn2.visible = false;
  },
  create: function () {
    
  },
  update: function() {

  },
  startGame: function () {
	  this.state.start('LoadingScene');
	},
  doChoosePlayer: function() {
    this.sfxClick.play();
    
    this.btn1.visible = false;
    this.sprite5.visible = false;
    this.sprite6.visible = false;
    
    this.number1.visible = true;
    this.number2.visible = true;
    this.number3.visible = true;
    this.number4.visible = true;    
    this.btn2.visible = true;
    this.chosePlayer = true;
    
    this.label1.setText('HOW MANY BRENS?');
  },
  setPlayer: function(e) {
    if (this.chosePlayer == true) {
      this.sfxClick.play();
      TTGame.Configs.total = e.total;
      TTGame.Configs.roundTime = TTGame.Configs.normalTime;
      this.startGame();
    };
  },
  setRelax: function(e) {
    this.sfxClick.play();
    TTGame.Configs.total = 1;
    TTGame.Configs.roundTime = TTGame.Configs.relaxTime;
    this.startGame();
  }
};