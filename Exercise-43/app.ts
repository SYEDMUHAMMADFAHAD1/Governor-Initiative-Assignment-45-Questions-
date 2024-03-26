// Start with your work from Exercise 40 // Make a array of magician’s names 
let magicians: string[] = ["Naseem Hameed", "Adeel Shafqat", "Aziz Ahmed", "Sajjad Malik"];

function show_magicians(magicians: string[]) {
  for (let magician of magicians) { 
    console.log(magician); 
  } 
}


function make_great(magicians: string[]) {
  let great_magicians: string[] = []; 
  for (let magician of magicians) {
    great_magicians.push(magician + " the Great"); } 
    return great_magicians; }


let great_magicians = make_great([...magicians]);


show_magicians(magicians); 
show_magicians(great_magicians);