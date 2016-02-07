'use strict';

var Triangle = function(a, b, c) {

  var validateInput = function() {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides of 0 or less are illegal');
    }
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error('violates triangle inequality');
    }
  };

  this.kind = function() {
    validateInput();
    if ( a === b && a === c ) {
      return 'equilateral';
    }
    if ( a !== b && a !== c && b !== c ) {
      return 'scalene';
    }
    return 'isosceles';
  };
};

module.exports = Triangle;
