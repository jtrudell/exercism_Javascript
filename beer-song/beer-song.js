//This is ugly and the last test doesn't pass, not sure why.
var BeerSong = function() {

  this.verse = function(number) {
    var sentenceOne;
    var sentenceTwo;
    if (number > 1) {
      sentenceOne = '' + number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\n';
      sentenceTwo = 'Take one down and pass it around, ' + (number - 1) + ' bottles of beer on the wall.\n';
    } else if (number === 1) {
      sentenceOne = '' + number + ' bottle of beer on the wall, ' + number + ' bottle of beer.\n';
      sentenceTwo = 'Take it down and pass it around, no more bottles of beer on the wall.\n';
    } else {
      sentenceOne = 'No more bottles of beer on the wall, no more bottles of beer.\n';
      sentenceTwo = 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
    var thisLine = sentenceOne + sentenceTwo;
    return thisLine;
  };

  this.sing = function(first, last) {
    last = typeof last !== 'undefined' ? last : 0;
    var numbers = [];
    for (var i = first; i >= last; i--) {
      numbers.push(i);
    }

    var lines = "";
    for (var j = 0; j < numbers.length; j++) {
      var number = numbers[j];
      var line;
      if (j !== numbers.length - 1) {
        line = this.verse(number) + '\n';
      } else {
        line = this.verse(number);
      }
      lines += line;
    }
    return lines;
  };

};

module.exports = BeerSong;
