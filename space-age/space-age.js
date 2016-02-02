
var SpaceAge = function(age) {
  'use strict';
  
  this.seconds = age;
  this.planets = {
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132
  };

  this.onEarth = function() {
    var secondsInDay = 86400;
    var earth = (age / (365.25 * secondsInDay)).toFixed(2);
    return parseFloat(earth);
  };

  this.convert = function(planet) {
    var total = (this.onEarth() / this.planets[planet]).toFixed(2);
    return parseFloat(total);
  };

  this.onMercury = function() {
    return this.convert("mercury");
  };

  this.onVenus = function() {
    return this.convert("venus");
  };

  this.onMars = function() {
    return this.convert("mars");
  };

  this.onJupiter = function() {
    return this.convert("jupiter");
  };

  this.onSaturn = function() {
    return this.convert("saturn");
  };

  this.onUranus = function() {
    return this.convert("uranus");
  };

  this.onNeptune = function() {
    return this.convert("neptune");
  };
};

module.exports = SpaceAge;
