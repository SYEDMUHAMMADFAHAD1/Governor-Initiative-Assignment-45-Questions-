"use strict";
// Make a array of magician’s names 
let magicians = ["Naseem Hameed", "Ali Javed", "Syed Qasim", "Yaseen Malik"];
function show_magicians(magicians) {
    for (let magician of magicians) { // Print the name of each magician 
        console.log(magician);
    }
}
// Call the function with the array of magicians 
show_magicians(magicians);
