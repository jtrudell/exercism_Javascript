'use strict';

var Acronyms = {
  parse: function(phrase) {
    var acronym = '';
    var colon = phrase.indexOf(":");
    if (colon > 0) {
      return phrase.slice(0, colon);
    }

    var dash = phrase.indexOf('-');
    if (dash > 0) {
      phrase = phrase.replace('-', ' ');
    }

    var words = phrase.split(' ');
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      acronym += word.charAt(0);
      for (var j = 1; j < word.length; j++) {
        if (word.charCodeAt(j) >= 65 && word.charCodeAt(j) <= 90) {
          acronym += word.charAt(j);
        }
      }
    }
    return acronym.toUpperCase();
  }
};

module.exports = Acronyms;
