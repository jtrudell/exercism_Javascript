module.exports = function Cipher(key = 'aaaaaaaaaa') {
  this.key = key;
  this.cipher = encipher(this.key)

  if (!this.key.match(/[a-z]+/)) {
    throw new Error('Bad key');
  }

  this.encode = function(str) {
    points = encipher(str)

    var j = 0;
    for (var i=0; i < points.length; i++) {
      var total = points[i] + this.cipher[j] + 97;
      if (total > 122) {
        total -= 26;
      }
      points[i] = String.fromCodePoint(total);
      j = wrap(j, this.cipher.length);
    }
    return points.join('');
  }

  this.decode = function(str) {
    points = encipher(str)

    var j = 0;
    for (var i=0; i < points.length; i++) {
      points[i] = String.fromCodePoint(points[i] - this.cipher[j] + 97);
      j = wrap(j, this.cipher.length);
    }
    return points.join('');
  }

  function encipher(str) {
    return str.split('').map(
      function(ltr) {
        return ltr.codePointAt(0) - 97
      }
    )
  }

  function wrap(n, len) {
    if (n < len) {
      n++;
    } else {
      n=0;
    }
    return n;
  }
}
