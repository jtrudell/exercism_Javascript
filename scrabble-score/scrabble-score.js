'use strict';

var score = function(word) {

  var total = 0;
  if (word === null || word.length === 0) {
    return total;
  }

  var chars = word.split('');
  for (var i = 0; i < chars.length; i++) {
    total += points(chars[i].toUpperCase());
  }
  return total;
};

function points(char) {
  for (var point in letters) {
    if (letters[point].indexOf(char) >= 0) {
      return parseInt(point);
    }
  }
}

var letters = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

module.exports = score;
