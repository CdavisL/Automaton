//Homework Week 2

// Given 2 int values, return true if one is negative and one is positive.
// Except if the parameter "negative" is true, then return true only if both are
// negative.
// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

function posNeg(num1, num2) {
    var result = num1 && num2 <= 0 ? "true" : "false";
    console.log(result);
}
console.log(posNeg);
posNeg(1, -1);
posNeg(-1, 1);
posNeg(-4, -5);

// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8



//Write a javascript program that prints all odd number between 1 to 100
//frankenstein
function PrntOdd (num) {
    for (let i = 1; i <= 100; i ++) {
    if (i % 2 !== 0); {
    console.log("These are all numbers up to 100: " + i);
}
}
}
console.log(PrntOdd);
PrntOdd(0);

// Given two temperatures, return true if one is less than 0 and the other is
// greater than 100.
// icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false 

function icyHot(num1, num2) {
    var result = 0 > num1 && num2 > 100 ? "true" : "false";
    console.log(result);
}
icyHot(120, -1);
icyHot(-1, 120);
icyHot(2, 120);
//false true false

// Write a JavaScript program that sums all elements in array once you have the sum FIND he average of the sum.

