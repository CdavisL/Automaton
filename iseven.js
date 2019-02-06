/* function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3)); */

var isEven = function (number) {
    if (number % 2 === 0)
      return true;
    else (number % 2 !== 0)
      return false;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));