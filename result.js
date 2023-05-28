"use strict";

var resultScene = {
  preload: function () {
    this.sfxClick = this.add.audio('click');
    var sfxWinner = this.add.audio('winner');
  
    var resultColor = TTGame.Configs.falseColor;
    var resultSprite = 'whiteperson';
    
    if (TTGame.Configs.topScore > 15) {
      sfxWinner.play();
      resultColor = TTGame.Configs.trueColor;
      resultSprite = 'blackperson';
    };

    var bg = this.add.image(0,0,PhaserHelper.colorTexture(resultColor));
    bg.width = this.world.width;
    bg.height = this.world.height;

    var bg3 = this.add.image(0,this.world.height,PhaserHelper.colorTexture(TTGame.Configs.questionColor));
    bg3.anchor.setTo(0,1);
    bg3.width = this.world.width;

    var btn1 = PhaserHelper.imageButton(this.world.centerX/2, this.world.height*0.9,'replay',this.goReplay,this);
    btn1.anchor.setTo(0.5,1);
    btn1.ratio = Helper.getScaleByPercent(btn1.width,this.world.centerX,99);
    btn1.scale.setTo(btn1.ratio);

    var btn2 = PhaserHelper.imageButton(this.world.centerX*1.5, this.world.height*0.9,'mainmenu',this.goMenu,this);
    btn2.anchor.setTo(0.5,1);
    btn2.ratio = Helper.getScaleByPercent(btn2.width,this.world.centerX,99);
    btn2.scale.setTo(btn2.ratio);

    bg3.height = btn2.height + this.world.centerY*0.6;

    var sprite1 = this.add.image(this.world.centerX,(this.world.height - bg3.height)/2,resultSprite);
    sprite1.anchor.setTo(0.5);
    sprite1.ratio = Helper.getScaleByPercent(sprite1.height,this.world.height - bg3.height,88);
    sprite1.scale.setTo(sprite1.ratio);

    var label = this.add.text(this.world.centerX, this.world.height - bg3.height, 'HIGHEST SCORE', { font: '500px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.infoColor });
    label.anchor.setTo(0.5,0);
    label.ratio = Helper.getScaleByPercent(label.height,this.world.centerY*0.4,30);
    label.scale.setTo(label.ratio);

    var label2 = this.add.text(this.world.centerX, this.world.height*0.9 - btn2.height, ''+TTGame.Configs.topScore, { font: '500px ' + TTGame.Configs.fontFamily, fill: TTGame.Configs.infoColor });
    label2.anchor.setTo(0.5,1);
    label2.ratio = Helper.getScaleByPercent(label2.height,this.world.centerY*0.4,75);
    label2.scale.setTo(label2.ratio);
  },
  create: function() {
  
  },
  update: function() {
  
  },
  goReplay: function() {
    this.sfxClick.play();
    this.state.start('PlayScene');
  },
  goMenu: function() {
    this.sfxClick.play();
    this.state.start('MenuScene');
  }
};