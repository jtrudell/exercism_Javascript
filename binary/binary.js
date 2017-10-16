module.exports = function Binary(num) {
  this.num = num.split('').reverse();

  this.toDecimal = function() {
    var digits = this.num.map(function(n) {
      return parseInt(n)
    });

    var acc = 0;
    for (var i = digits.length - 1; i >= 0; i--) {
      if (digits[i] > 1 || isNaN(digits[i])) {
        return 0;
      }
      acc += Math.pow(2, i) * digits[i];
    }

    return acc;
  }
}
