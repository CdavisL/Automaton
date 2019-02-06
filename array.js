let myList = [10, 28, "CN", "Toonami", "MSNBC", "YouTube", 64, "CrunchyRoll"];
  console.log(myList);

    for (i = 0; i < myList.length; i++) {
        console.log(myList[i]);
    }

    //Here's a function loop through an array
    function showArray(somearray) {
        for (i = 0; i < somearray.length; i++) {
            console.log(somearray[i]);
        }
    }

    showArray(somearray);