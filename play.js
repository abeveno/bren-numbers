"use strict";

var playScene = {
  preload: function() {
    this.totalReplay = 0;
    TTGame.Configs.topScore = 0;
    this.Players = [];
    
    var bgColor = this.add.image(0,0,PhaserHelper.colorTexture(TTGame.Configs.backgroundColorNormal));
    bgColor.width = this.world.width;
    bgColor.height = this.world.height;
  },
  create: function () {    
    for (var i = 1; i <= TTGame.Configs.total; i++) { 
      this.Players[i] = new Player(this, i, TTGame.Configs.total, TTGame.Configs);
    };
    
    this.gameRun = this.time.events.loop(Phaser.Timer.SECOND, this.gameUpdate, this);
  },
  gameUpdate: function() {
    for (var i = 1; i <= TTGame.Configs.total; i++) { 
      if (this.Players[i].playable) {
        if (this.Players[i].updateTime() <= 0) {
          this.Players[i].dead();
        };
      };
    };
    if (this.totalReplay >= TTGame.Configs.total) this.reset();
  },
  update: function() {

  },
  reset: function() {
    this.time.events.remove(this.gameRun);
    this.updateTopScore();
    this.state.start('ResultScene');
  },
  updateTopScore: function() {
    for (var i = 1; i <= TTGame.Configs.total; i++) { 
      if (this.Players[i].score > TTGame.Configs.topScore) {
        TTGame.Configs.topScore = this.Players[i].score;
      };
    };
  }
};