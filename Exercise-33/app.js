var originalNumbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
for (var _i = 0, originalNumbers_1 = originalNumbers; _i < originalNumbers_1.length; _i++) {
    var originalNumber = originalNumbers_1[_i];
    if (originalNumber === 1) {
        console.log(originalNumber + "st");
    }
    else if (originalNumber === 2) {
        console.log(originalNumber + "nd");
    }
    else if (originalNumber === 3) {
        console.log(originalNumber + "rd");
    }
    else {
        console.log(originalNumber + "th");
    }
}
