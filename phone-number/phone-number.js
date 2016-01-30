
var PhoneNumber = function(numberString) {
  this.numberString = numberString;
};

PhoneNumber.prototype.number = function () {
  var number = this.numberString;
  var clean = number.replace(/\D/g, '');

  if (clean.length !== 10) {
    if (clean.length === 11 && clean.charAt(0) === '1') {
      clean = clean.replace(/1/, '');
    } else {
      clean = '0000000000';
    }
  }
  return clean;
};

PhoneNumber.prototype.areaCode = function () {
  var number = this.numberString;
  return number.substr(0,3);
};

PhoneNumber.prototype.toString = function () {
  var number = this.numberString;
  var formatted = '(';
  formatted += number.substr(0,3) + ') ' + number.substr(3,3) + '-' + number.substr(6,4);
  return formatted;
};

module.exports = PhoneNumber;
