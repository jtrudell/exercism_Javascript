var Counts = function(input) {
	// removes leading/trailing whitespace and spaces in middle of string longer than single space
	input = input.trim().replace(/\s+/g, ' '); 
	var wordArray = input.split(' ');
	var wordCount = {};
	for (var i = 0; i < wordArray.length; i++) {
		var count = 0;
		wordCount[wordArray[i]] = count;
		for (var j = 0; j < wordArray.length; j++) {
			if (wordArray[i] === wordArray[j]) {
				count ++;
				wordCount[wordArray[i]] = count;
			}
		}
	} 
	return wordCount;
};


module.exports = Counts;