var Bob = function() {};

Bob.prototype.hey = function(input) {
	var questionMark = input[input.length - 1] === '?';
	var stringEmpty = input == false;
	var includesLetters = /[A-Z]/.test(input.toUpperCase());

	if (input === input.toUpperCase() && !stringEmpty && includesLetters) {
		return 'Whoa, chill out!';
	} else if (stringEmpty) {
		return 'Fine. Be that way!';
	} else if (questionMark) {
		return 'Sure.';
	} else {
		return 'Whatever.';
	};
};



module.exports = Bob;

