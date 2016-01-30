var Pangram = function(sentence) {
  var lowerCaseChars = sentence.toLowerCase();
  this.isPangram = function() {
    var countCharsHash = generateLowerCaseHash();
    countChars(countCharsHash, lowerCaseChars);
    return checkChars(countCharsHash);
  };
};

function generateLowerCaseHash() {
  var charsHash = {};
  for (var i = 97; i < 123; i++) {
    charsHash[i] = 0;
  }
  return charsHash;
}

function countChars(charsHash, chars) {
  for (var j = 0; j < chars.length; j++) {
    var code = chars.charCodeAt(j);
    if (charsHash[code] === 0) {
      charsHash[code] += 1;
    }
  }
}

function checkChars(charsHash) {
  var count = true;
  for (var m = 97; m < 123; m++) {
    if (charsHash[m] === 0) {
      count = false;
    }
  }
  return count;
}

module.exports = Pangram;
