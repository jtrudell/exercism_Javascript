var School = function() {
  this.allStudents = {};

  this.roster = function() {
    return this.allStudents;
  };

  this.add = function(name, grade) {
    var allStudents = this.allStudents;
    if (allStudents[grade]) {
      allStudents[grade].push(name);
      allStudents[grade] = allStudents[grade].sort();
    } else {
      allStudents[grade] = [name];
    }
  };

  this.grade = function(number) {
    if (this.allStudents[number]) {
      return this.allStudents[number];
    } else {
      return [];
    }
  };

};

console.log("hi");
module.exports = School;
