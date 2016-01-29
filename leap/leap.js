function Year(year) {

  this.year = year;
  this.isLeap = function() {
    if (this.year % 4 === 0) {
      return checkYear(this.year);
    } else {
      return false;
    }
  };

  var checkYear = function(year) {
    return (year % 100 !== 0) || (year % 400 === 0);
  };
}

module.exports = Year;
