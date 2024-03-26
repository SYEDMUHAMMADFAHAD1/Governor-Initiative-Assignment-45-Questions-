
let magicians: string[] = ["Naseem Hameed", "Ali Javed", "Sajjad Malik", "Syed Qasim"];
function show_magicians(magicians: string[]) { 
  for (let magician of magicians) { // Print the name of each magician 
    console.log(magician); 
  } 
}
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great"; 
  } 
}
make_great(magicians);
// Call show_magicians() to // see that the list has actually been modified 
show_magicians(magicians);