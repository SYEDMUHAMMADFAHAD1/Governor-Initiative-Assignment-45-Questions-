// Write a function that accepts a array of items a person wants // on a sandwich 
function make_sandwich(items) {
    console.log("You ordered a sandwich with the following items:");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) { // Print each item 
        var item = items_1[_i];
        console.log("- " + item);
    }
}
// Call the function three times, using a different number // of arguments each time 
make_sandwich(["cheese", "ham", "lettuce"]);
make_sandwich(["peanut butter", "jam"]);
make_sandwich(["turkey", "bacon", "tomato", "mayo"]);
