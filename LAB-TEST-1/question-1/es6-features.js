const lowerCaseWords = (mixedArray) => {
    // return a promise
    return new Promise((resolve, reject) => {
        if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
            const StringArray = mixedArray.filter((element) => typeof element === "string");

            const mappedLowerCase = StringArray.map((each) =>
                each.toLowerCase()
            );
            resolve(mappedLowerCase);
        } else {
            reject("Invalid array");
        }
    });
};

// define the mixedArray
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
    .then((value) =>
        // print array values when promise resolved
        console.log(value)
    )
    .catch((error) =>
        // print error when promise rejected
        console.log(error)
    );
