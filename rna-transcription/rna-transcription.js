function DnaTranscriber() {
  this.toRna = function(dna) {
    var rnaString = "";
    var dnaArray = dna.split('');
    for (var i = 0; i < dnaArray.length; i++) {
      var letter = rna[dnaArray[i]];
      rnaString += letter;
    }
    return rnaString;
  };
}

var rna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

module.exports = DnaTranscriber;
