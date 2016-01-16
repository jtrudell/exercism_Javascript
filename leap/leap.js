function Year(year) {
  this.year = year;
  this.isLeap = function() {
    if (this.year % 4 === 0) {
      if ( (this.year % 100 !== 0) || (this.year % 100 === 0 && this.year % 400 === 0)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
}

module.exports = Year;
