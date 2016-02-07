var planets = {
      "Mercury": 0.2408467,
      "Venus": 0.61519726,
      "Mars": 1.8808158,
      "Jupiter": 11.862615,
      "Saturn": 29.447498,
      "Uranus": 84.016846,
      "Neptune": 164.79132
    };

var SpaceAge = function(age) {
  this.seconds = age;
  this.onEarth = function() {
    var secondsInDay = 86400;
    var earth = (age / (365.25 * secondsInDay)).toFixed(2);
    return parseFloat(earth);
  };

  this.convert = function(planet) {
    var total = (this.onEarth() / planets[planet]).toFixed(2);
    return parseFloat(total);
  };
};

function planetGenerator(planet) {
  SpaceAge.prototype["on" + planet] = function() {
    return this.convert(planet);
  };
}

for (var planet in planets) {
  planetGenerator(planet);
}

module.exports = SpaceAge;
