var conversion = {
	1000: 'M',
	900: 'CM',
	500: 'D',
	400: 'CD',
	100: 'C',
	90: 'XC',
	50: 'L',
	40: 'XL',
	10: 'X',
	9: 'IX',
	5: 'V',
	4: 'IV',
	1: 'I'
};


var toRoman = function(number) {
	var roman = '';
	translator(number);
	return roman;

	function translator(number) {
		var keys = Object.keys(conversion);
		for (var i = keys.length - 1; i >= 0; i--) {
			while (number >= keys[i]) {
				roman += conversion[keys[i]];
				number -= keys[i];
			}
		}
		if (number > 0) {
			translator(number);
		} 
	}
};

module.exports = toRoman;
