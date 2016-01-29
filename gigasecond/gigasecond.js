function Gigasecond(birthDate) {
  this.date = function() {
    var gigaToMilli = Math.pow(10, 9) * 1000;
    var birthDateToMilli = birthDate.getTime();

    return new Date(Date.UTC(1970, 0, 1, 0, 0, 0, gigaToMilli + birthDateToMilli));
  };
}

module.exports = Gigasecond;
