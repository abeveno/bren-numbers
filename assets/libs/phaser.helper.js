"use strict";

var PhaserHelper = {
  game: null
};

PhaserHelper.colorTexture = function(color) {
  if (PhaserHelper.game == null) return;
  
  var texture = new Phaser.BitmapData(PhaserHelper.game,100,100);
  texture.context.fillStyle = color;
  texture.context.fillRect(0,0,100,100);
    
  return texture;
};

PhaserHelper.imageButton = function(x, y, imageSrc, callback, scope) {
  if (PhaserHelper.game == null) return;
  
  var btn = PhaserHelper.game.add.image(x, y, imageSrc);
  btn.inputEnabled = true;
  btn.events.onInputDown.add(callback,scope);
  
  return btn;
};

PhaserHelper.textButton = function(x, y, text, style, callback, scope) {
  if (PhaserHelper.game == null) return;
  
  var btn = PhaserHelper.game.add.text(x, y, text, style);

  btn.inputEnabled = true;
  btn.events.onInputDown.add(callback,scope);
  
  return btn;
};