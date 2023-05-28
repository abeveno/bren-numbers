"use strict";

var Player = function(game, number, total, configs) {
  this.number = number;
  this.total = total;
  this.game = game;
  
  this.playable = true;
  this.scoreStep = 0;
  this.score = 0;
  this.configs = configs;
  this.time = this.configs.roundTime;
  
  this.sfxClick = this.game.add.audio('click');
  
  this.init();
};

Player.prototype = {
  init: function() {
    this.bg = this.game.add.image(0,0,PhaserHelper.colorTexture(this.configs.backgroundColorGame));
    this.infoBar = this.game.add.image(0,0,PhaserHelper.colorTexture(this.configs.infoColor2));

    this.btnTrue = new PhaserHelper.imageButton(0,0,'rightonclick', this.doAnswer, this);
    this.btnTrue.answer = true;
    this.btnFalse = new PhaserHelper.imageButton(0,0,'wrongonclick', this.doAnswer, this);
    this.btnFalse.answer = false;

    this.text = this.game.add.text(0, 0 , "9999+9999=99999", {font: '100px ' + this.configs.fontFamily, fill: this.configs.questionColor, align: 'center'});
    this.scoreText = this.game.add.text(0, 0 , "BREN "+this.number+": 0/0",{font: '100px ' + this.configs.fontFamily, fill: this.configs.infoColor});
    this.timeText = this.game.add.text(0, 0 , ""+this.time,{font: '100px ' + this.configs.fontFamily, fill: this.configs.infoColor});
    
    this.setLayout(this.number, this.total);
    this.startNewRound();
  },
  setLayout: function(number, total) {
    switch (total) {
      default:
      case 1:
        this.setLayoutStand('full');
        break;
      case 2:
        if (number == 1) {
          if (this.game.world.width > this.game.world.height) {
            this.setLayoutHalfLeft();
          } else {
            this.setLayoutStand('1/2-bottom');
          };
        } else {
          if (this.game.world.width > this.game.world.height) {
            this.setLayoutHalfRight();
          } else {
            this.setLayoutUpSideDown('1/2-top');
          };
        };
        break;
      case 3:
        if (number == 1) {
          if (this.game.world.width > this.game.world.height) {
            this.setLayoutHalfLeft();
          } else {
            this.setLayoutStand('1/2-bottom');
          };
        } else if (number == 2) {
          if (this.game.world.width > this.game.world.height) {
            this.setLayoutUpSideDown('1/4-top-right');
          } else {
            this.setLayoutUpSideDown('1/4-top-left');
          };
          
        } else {
          if (this.game.world.width > this.game.world.height) {
            this.setLayoutStand('1/4-bottom-right');
          } else {
            this.setLayoutUpSideDown('1/4-top-right');
          };
        };
        break;
      case 4:
        if (number == 1) {
          this.setLayoutUpSideDown('1/4-top-left');
        } else if (number == 2) {
          this.setLayoutUpSideDown('1/4-top-right');
        } else if (number == 3) {
          this.setLayoutStand('1/4-bottom-right');
        } else {
          this.setLayoutStand('1/4-bottom-left');
        };
        break;
    };
  },
  setLayoutStand: function(style) {
    this.btnTrue.anchor.setTo(0.5,1);
    this.btnFalse.anchor.setTo(0.5,1);
    this.text.anchor.setTo(0.5);
    this.timeText.anchor.setTo(1,0);
    
    switch (style) {
      default:
      case 'full':
        var x = 0;
        var y = 0;
        var width = this.game.world.width;
        var height = this.game.world.height;
        break;
      case '1/2-bottom':
        var x = 0;
        var y = this.game.world.centerY;
        var width = this.game.world.width;
        var height = this.game.world.centerY;
        break;
      case '1/4-bottom-left':
        var x = 0;
        var y = this.game.world.centerY;
        var width = this.game.world.centerX - 1;
        var height = this.game.world.centerY;
        break;
      case '1/4-bottom-right':
        var x = this.game.world.centerX;
        var y = this.game.world.centerY;
        var width = this.game.world.centerX;
        var height = this.game.world.centerY;
        break;
    };

    this.setComponentSize(width,height);
    
    this.bg.x = x;
    this.bg.y = y;
    this.infoBar.x = x;
    this.infoBar.y = y;
    this.btnTrue.x = x+width*1/4;
    this.btnTrue.y = y+height;
    this.btnFalse.x = x+width*3/4;
    this.btnFalse.y = y+height;
    this.text.x = x+width/2;
    this.text.y = y+this.infoBar.height+(height - this.btnTrue.height - this.infoBar.height)/2;
    this.scoreText.x = x+width*3/100;
    this.scoreText.y = y+height*3/100;
    this.timeText.x = x+width*97/100;
    this.timeText.y = y+height*3/100;
  },
  setLayoutHalfLeft: function() {
    this.btnTrue.anchor.setTo(0.5,1);
    this.btnFalse.anchor.setTo(0.5,1);
    this.text.anchor.setTo(0.5);
    this.timeText.anchor.setTo(1,0);
    this.infoBar.anchor.setTo(0,0);
    
    var x = 0;
    var y = 0;
    var width = this.game.world.centerX - 1;
    var height = this.game.world.height;

    this.setComponentSize(width,height);
    
    this.bg.x = x;
    this.bg.y = y;
    this.infoBar.x = width;
    this.infoBar.y = y;
    this.infoBar.angle = 90;
    this.btnTrue.x = x;
    this.btnTrue.y = y+height*1/4;
    this.btnTrue.angle = 90;
    this.btnFalse.x = x;
    this.btnFalse.y = y+height*3/4;
    this.btnFalse.angle = 90;
    this.text.x = x+this.btnTrue.height + (width - this.infoBar.height - this.btnTrue.height)/2;
    this.text.y = y+height/2;
    this.text.angle = 90;
    this.scoreText.x = x+width*97/100;
    this.scoreText.y = y+height*3/100;
    this.scoreText.angle = 90;
    this.timeText.x = x+width*97/100;
    this.timeText.y = y+height*97/100;
    this.timeText.angle = 90;
  },
  setLayoutHalfRight: function() {
    this.btnTrue.anchor.setTo(0.5,1);
    this.btnFalse.anchor.setTo(0.5,1);
    this.text.anchor.setTo(0.5);
    this.timeText.anchor.setTo(1,0);
    this.infoBar.anchor.setTo(1,0);
    
    var x = this.game.world.centerX;
    var y = 0;
    var width = this.game.world.centerX;
    var height = this.game.world.height;

    this.setComponentSize(width,height);
    
    this.bg.x = x;
    this.bg.y = y;
    this.infoBar.x = x;
    this.infoBar.y = y;
    this.infoBar.angle = -90;
    this.btnTrue.x = x+width;
    this.btnTrue.y = y+height*3/4;
    this.btnTrue.angle = -90;
    this.btnFalse.x = x+width;
    this.btnFalse.y = y+height*1/4;
    this.btnFalse.angle = -90;
    this.text.x = x+this.infoBar.height + (width - this.infoBar.height - this.btnTrue.height)/2;
    this.text.y = y+height/2;
    this.text.angle = -90;
    this.scoreText.x = x+width*3/100;
    this.scoreText.y = y+height*97/100;
    this.scoreText.angle = -90;
    this.timeText.x = x+width*3/100;
    this.timeText.y = y+height*3/100;
    this.timeText.angle = -90;
  },
  setLayoutUpSideDown: function(style) {
    this.btnTrue.anchor.setTo(0.5,1);
    this.btnFalse.anchor.setTo(0.5,1);
    this.text.anchor.setTo(0.5);
    this.timeText.anchor.setTo(1,0);
    this.infoBar.anchor.setTo(0,1);
    
    switch (style) {
      default:
      case '1/2-top':
        var x = 0;
        var y = 0;
        var width = this.game.world.width;
        var height = this.game.world.centerY - 1;
        break;
      case '1/4-top-left':
        var x = 0;
        var y = 0;
        var width = this.game.world.centerX - 1;
        var height = this.game.world.centerY - 1;
        break;
      case '1/4-top-right':
        var x = this.game.world.centerX;
        var y = 0;
        var width = this.game.world.centerX;
        var height = this.game.world.centerY - 1;
        break;
    };

    this.setComponentSize(width,height);
    
    this.bg.x = x;
    this.bg.y = y;
    this.infoBar.x = x;
    this.infoBar.y = height;
    this.btnTrue.x = x+width*3/4;
    this.btnTrue.y = y;
    this.btnTrue.angle = -180;
    this.btnFalse.x = x+width*1/4;
    this.btnFalse.y = y;
    this.btnFalse.angle = -180;
    this.text.x = x+width/2;
    this.text.y = y+this.btnTrue.height+(height - this.btnTrue.height - this.infoBar.height)/2;
    this.text.angle = -180;
    this.scoreText.x = x+width*97/100;
    this.scoreText.y = y+height*97/100;
    this.scoreText.angle = -180;
    this.timeText.x = x+width*3/100;
    this.timeText.y = y+height*97/100;
    this.timeText.angle = -180;
  },
  setComponentSize: function(width,height) {
    this.bg.width = width;
    this.bg.height = height;

    if (this.game.world.height < this.game.world.width && height > width) {
      var temp = width;
      width = height;
      height = temp;
    };

    var btnRatio = Helper.getScaleByPercent(this.btnTrue.width,width,50);
    this.btnTrue.scale.setTo(btnRatio);
    this.btnFalse.scale.setTo(btnRatio);

    this.text.ratio = Helper.getScaleByPercent(this.text.width,width,100);
    this.text.scale.setTo(this.text.ratio);

    this.infoBar.width = width;
    this.infoBar.height = height*0.1;

    var infoRatio = Helper.getScaleByPercent(this.scoreText.height,height*0.1,45);
    this.scoreText.scale.setTo(infoRatio);
    this.timeText.scale.setTo(infoRatio);
  },
  doAnswer: function(e) {
    if (!this.playable) return;
    if (this.calculateResult(e.answer)) {
      this.sfxClick.play();
      this.updateScore();
      this.startNewRound();
    };
  },
  setQuestion: function(question) {
    this.question = question;
    this.text.setText(question.question);
  },
  calculateResult: function(answer) {
    if (this.question.result == answer) {
      this.scoreStep++;
      this.score += Math.round(this.scoreStep * (this.time+this.configs.roundTime)/this.configs.roundTime,0);
      this.time = this.configs.roundTime;
      this.timeText.setText(""+Math.ceil(this.time/60));
      return true;
    } else {
      this.dead();
      return false;
    };  
  },
  updateScore: function() {
    this.scoreText.setText("P"+this.number+": " + this.score + "/"+this.scoreStep);
  },
  updateTime: function() {
    this.time -= 1;
    this.timeText.setText(""+this.time);
    return this.time;
  },
  startNewRound: function() {
    this.setQuestion(TTModel.Services.getQuestion(10+this.score*2));
  },
  dead: function() {
    this.playable = false;
    this.timeText.setText("0");
    this.bg.loadTexture(PhaserHelper.colorTexture(this.configs.backgroundColorEnd));
    this.game.totalReplay += 1;
  }
};