var BigInt = require('./big-integer');

var Grains = function(num) {
  'use strict';

  this.square = function(num) {
    if (num === 1) {
      return '1';
    }
    var lastSquare = new BigInt(this.square(num - 1));
    return BigInt(lastSquare * 2).toString();
  };

  this.total = function() {
    var sum = 0;
    for (var i = 1; i < 65; i++) {
      sum += new BigInt(this.square(i));
    }
    return new BigInt(sum).toString();
  };
};

module.exports = Grains;
