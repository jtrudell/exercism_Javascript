exports.compute = function(stringOne, stringTwo) {
	var count = 0;
	if (stringOne.length !== stringTwo.length) {
		throw 'DNA strands must be of equal length.';
	} else {
		var stringOne = stringOne.split('');
		var stringTwo = stringTwo.split('');
		for (var i = 0; i < stringOne.length; i++) {
			if (stringOne[i] !== stringTwo[i]) {
				count ++;
			}
		}
		return count;
	}
};
	
