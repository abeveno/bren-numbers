"use strict";

var WebFontConfig = {
  custom: {
    families: ['visitor_tt1_brkregular'],
    urls: ['assets/styles/stylesheet.css']
  }
};

var TTGame = {};

TTGame.Configs = {
  total: 1,
  topScore: 1,

  backgroundColorNormal: '#fff',
  backgroundColorGame: '#eee',
  backgroundColorEnd: '#333',
  trueColor: '#30b44b',
  falseColor: '#9f1d22',
  questionColor: '#000',
  infoColor: '#fff',
  infoColor2: '#000',
  roundTime: 5,
  normalTime: 5,
  relaxTime: 60,
  fontFamily: 'visitor_tt1_brkregular'
};

TTGame.Assets = {  
  imageList: {
    bigwinner: 'assets/images/bigwinner.png',
    blackperson: 'assets/images/black-person.png',
    greenperson: 'assets/images/green-person.png',
    intro1: 'assets/images/intro1.png',
    intro2: 'assets/images/intro2.png',
    intro3: 'assets/images/intro3.png',
    intro4: 'assets/images/intro4.png',
    mainmenu: 'assets/images/mainmenu.png',
    playclick: 'assets/images/play-click.png',
    play: 'assets/images/play.png',
    relax: 'assets/images/relax.png',
    redperson: 'assets/images/red-person.png',
    replay: 'assets/images/replay.png',
    rightonclick: 'assets/images/right-onclick.png',
    rightonright: 'assets/images/right-onright.png',
    rightonwrong: 'assets/images/right-onwrong.png',
    rightsmall: 'assets/images/right-small.png',
    whiteperson: 'assets/images/white-person.png',
    wrongonclick: 'assets/images/wrong-onclick.png',
    wrongonright: 'assets/images/wrong-onright.png',
    wrongonwrong: 'assets/images/wrong-onwrong.png',
    wrongsmall: 'assets/images/wrong-small.png'
  },
  soundList: {
    click: 'assets/sounds/click',
    intro: 'assets/sounds/intro',
    winner: 'assets/sounds/winner'
  }
};

var bootScene = {
  preload: function() {
		this.load.image('loading', 'assets/images/loading.png');
		this.load.image('loading2', 'assets/images/loading2.png');
  },
  create: function() {
  	this.state.start('PreloaderScene');
  },
  update: function() {
  
  }
};

var preloaderScene = {
	preload: function() {
    this.stage.backgroundColor = '#000';
    var w = this.game.width, h = this.game.height;
    var label2 = this.add.text(Math.floor(w/2)+0.5, Math.floor(h/2)-15+0.5, '', { font: '30px ' + TTGame.Configs.fontFamily, fill: '#fff' });
    label2.setText('LOADING...');
		label2.anchor.setTo(0.5, 0.5);
		var preloading2 = this.add.sprite(w/2, h/2+15, 'loading2');
		preloading2.x -= preloading2.width/2;
		var preloading = this.add.sprite(w/2, h/2+19, 'loading');
		preloading.x -= preloading.width/2;
		this.load.setPreloadSprite(preloading);
    
	  for (var key in TTGame.Assets.imageList) {
	    this.load.image(key, TTGame.Assets.imageList[key]);
	  };
    for (var key in TTGame.Assets.soundList) {
      this.load.audio(key, [TTGame.Assets.soundList[key]+'.mp3',TTGame.Assets.soundList[key]+'.ogg',TTGame.Assets.soundList[key]+'.wav']);
    };
	},
  create: function() {
    this.state.start('MenuScene');
  },
  update: function() {
  
  }
};

TTGame.start = function() {
  var screenRatio = Helper.getWindowSize().width/Helper.getWindowSize().height;
  var gameWidth = Helper.getWindowSize().width;
  var game = new Phaser.Game(gameWidth,Math.round(gameWidth/screenRatio,0), Phaser.AUTO, 'game-container');
  
  PhaserHelper.game = game;
  
  game.state.add('BootScene', bootScene);
  game.state.add('PreloaderScene', preloaderScene);
  game.state.add('MenuScene', menuScene);
  game.state.add('LoadingScene', loadingScene);
  game.state.add('PlayScene', playScene);
  game.state.add('ResultScene', resultScene);
  
  game.state.start('BootScene');
};