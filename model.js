"use strict";

var TTModel = {
  expressions: [' + ', ' - '],
  comparations: [' == ', ' > ', ' < ']
};

TTModel.Services = {
  getQuestion: function (level) {
    var ret = TTModel.Factories.makeQuestion(level);
    
    return ret;
  }
};

TTModel.Factories = {
  makeQuestion: function (level) {
    var num1, num2, express, compare, result_value, ret = false, question = "";
    num1 = Helper.getRandomInteger(1,level);
    num2 = Helper.getRandomInteger(1,level);
    express = TTModel.expressions[Math.floor(Math.random() * TTModel.expressions.length)];
    result_value = eval(num1 + express + num2);
    
    if (Helper.getRandomInteger(1,100) > 33) {
      result_value += Helper.getRandomInteger(Math.floor(-level/2),Math.floor(level/2));
    };    
    compare = TTModel.comparations[Math.floor(Math.random() * TTModel.comparations.length)];
    
    ret = eval(num1 + express + num2 + compare + result_value);
    question = TTModel.Factories.formatQuestion(num1 + express + num2 + compare + result_value);
    return {
      question: question,
      result: ret
    };
  },
  formatQuestion :function (str) {
    return str.replace(' == ',' = ');
  }
};