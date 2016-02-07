'use strict';

var Watch = function(hour, minutes) {
  hour >= 24 ? hour -= 24 : hour
  hour < 0 ? hour += 24 : hour

  this.minutes = minutes;
  this.hour = hour;

  this.toString = function() {
    var output = '';
    if (this.hour < 10) {
      this.hour = '0' + this.hour;
    }
    if (this.minutes < 10) {
      this.minutes = '0' + this.minutes;
    }
    output += this.hour + ':' + this.minutes;
    return output;
  };

  this.plus = function(num) {
    var addMinutes = this.minutes + num;
    if (addMinutes > 60) {
      this.hour += addMinutes / 60;
      addMinutes %= 60;
    }
    return new Watch(this.hour.toFixed(), addMinutes);
  };

  this.minus = function(num) {
    var subtractMinutes = this.minutes - num;
    if (subtractMinutes < 0) {
      this.hour += subtractMinutes / 60;
      subtractMinutes = 60 + (subtractMinutes % 60);
    }
    return new Watch(Math.floor(this.hour), subtractMinutes);
  };

  this.equals = function(clock) {
    return this.hours === clock.hours && this.minutes === clock.minutes;
  };
};

var Clock = {
  at: function() {
    var hour = arguments[0];
    var minutes = arguments[1];
    if (!arguments[1]) {
      minutes = 0;
    }
    return new Watch(hour, minutes);
  }
};

module.exports = Clock;
