"use strict";
// Start with your work from Exercise 40 // Make a array of magician’s names 
let magicians = ["Naseem Hameed", "Adeel Shafqat", "Aziz Ahmed", "Sajjad Malik"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(magician + " the Great");
    }
    return great_magicians;
}
let great_magicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);
