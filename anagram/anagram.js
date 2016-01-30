var Anagram = function(word) {
	this.originalWord = word.toLowerCase();
	this.sortedWord = word.toLowerCase().split('').sort();
};

Anagram.prototype.matches = function(list) {
	if (arguments.length == 1) {
		list = typeof list === 'string' ? [list] : list;
	} else {
		var args = [];
		for (var j = 0; j < arguments.length; j++) {
			args[j] = arguments[j];
		}
		list = args;
	}
	var matchList = [];
	var word = this.sortedWord.join('');


	for (var i = 0; i < list.length; i++) {
		if (list[i].toLowerCase() !== this.originalWord) {
			var sortedListWord = list[i].toLowerCase().split('').sort();
			if (sortedListWord.join('') === word) {
				matchList.push(list[i]);
			}
		}
	}
	return matchList;
};

module.exports = Anagram;
