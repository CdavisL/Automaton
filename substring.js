function strSandwhich (word1, word2) {
    var end = word1.length;
    var half = word1.length / 2;
    var slice1 = word1.substring(0, half);
    var slice2 = word1.substring(half, end);
    var sandwhich = slice1 + word2 + slice2;
    return sandwhich;
      if (word2.length < word1.length / 2 )
      return sandwhich;
      else (word1.length > word2.length)
      return sandwhich;
}
strSandwhich("Naruto", "Hinata");