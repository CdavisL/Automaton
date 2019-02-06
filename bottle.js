var word = "bottles";

var count = 99;

while (count > 0) {
    console.log(count + " " + word + " of beer on the wall,");
    console.log(count + " " + word + " beer,");
    console.log("Take one down and pass it around,");

    if (count > 0) {
        count = --count;
        console.log(count + " " + word + " of beer on the wall.");
    } else {
    console.log("No more " + word + " beer of the wall.");
    }
}