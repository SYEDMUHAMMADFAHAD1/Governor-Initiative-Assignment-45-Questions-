// Write a function that stores information about a car in a Object 
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    // Use a for loop to iterate over the options array 
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = option[0], value = option[1];
        car[key] = value;
    }
    // Return the car Object 
    return car;
}
var my_car = make_car("Tesla", "Model 3", ["color", "red"], ["autopilot", true]);
console.log(my_car);
