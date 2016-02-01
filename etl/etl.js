var ETL = function() {

  this.transform = function(oldSystem) {
    var newSystem = {};
    var oldKey, newKey;

    for (oldKey in oldSystem) {
      for (var i = 0; i < oldSystem[oldKey].length; i++) {
        newKey = oldSystem[oldKey][i].toLowerCase();
        newSystem[newKey] = Number(oldKey);
      }
    }
    
    return newSystem;
  };
};

module.exports = ETL;
