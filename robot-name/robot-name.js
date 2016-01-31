var allRobots = {};

function randomNumber(x,y) {
  return Math.floor((Math.random() * x) + y);
}

function randomLetter(x,y) {
  return String.fromCharCode(randomNumber(26, 65));
}

var Robot = function() {
  this.name = '';

  this.init = function() {
    var newName = '';
    newName += randomLetter(26, 65) + randomLetter(26, 65) + randomNumber(9, 1) + randomNumber(9, 1) + randomNumber(9, 1);

    if (allRobots[newName]) {
      this.init();
    } else {
      this.name = newName;
      allRobots[newName] = true;
    }
  };

  this.reset = function() {
    this.init();
  };

  this.init();
};

module.exports = Robot;
