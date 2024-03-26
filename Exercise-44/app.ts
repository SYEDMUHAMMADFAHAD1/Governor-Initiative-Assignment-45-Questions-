// Write a function that accepts a array of items a person wants // on a sandwich 
function make_sandwich(items: string[]) {
  console.log("You ordered a sandwich with the following items:");
  for (let item of items) { // Print each item 
    console.log("- " + item); 
  } 
}

// Call the function three times, using a different number // of arguments each time 
make_sandwich(["cheese", "ham", "lettuce"]); 
make_sandwich(["peanut butter", "jam"]); 
make_sandwich(["turkey", "bacon", "tomato", "mayo"]);