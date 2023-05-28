"use strict";

var Helper = {};

// return an object with width and height of Browser window
Helper.getWindowSize = function() {
  var winW = 640, winH = 480;
  if (document.body && document.body.offsetWidth) {
    winW = document.body.offsetWidth;
    winH = document.body.offsetHeight;
  };
  if (document.compatMode=='CSS1Compat' &&
      document.documentElement &&
      document.documentElement.offsetWidth ) {
    winW = document.documentElement.offsetWidth;
    winH = document.documentElement.offsetHeight;
  };
  if (window.innerWidth && window.innerHeight) {
    winW = window.innerWidth;
    winH = window.innerHeight;
  };
  return {width: winW, height: winH};
};


Helper.getRandomInteger = function(bottom, top) {
  return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
};

Helper.getScaleByPercent = function(size, ruler, percent) {
  return ruler / size * percent / 100;
};