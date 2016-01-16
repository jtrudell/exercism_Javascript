function Year(year) {

  this.year = year;
  this.isLeap = function() {
    if (this.year % 4 === 0) {
      return checkYear(this.year);
    } else {
      return false;
    }
  };

  checkYear = function(year) {
    if ( (year % 100 !== 0) || (year % 400 === 0) ) {
      return true;
    } else {
      return false;
    }
  };
}

module.exports = Year;
