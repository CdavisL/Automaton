function posNeg (numberOne, numberTwo, isNegative) {
    if (numberOne < 0 && numberTwo <  0 || numberOne > 0 && numberTwo > 0) {
        console.log("Statement is true");
    }
    else { 
        (numberOne < 0 && numberTwo > 0) || (numberOne > 0 && numberTwo < 0)
        console.log("Statement is false");
    }
}
console.log(posNeg(-1, 3));
console.log(posNeg(-1, -6));
console.log(posNeg(9, 3));

var add = function(numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    if (numberOne === numberTwo * 2);
    console.log(result);
}
add(1,2);
add(2, 2);