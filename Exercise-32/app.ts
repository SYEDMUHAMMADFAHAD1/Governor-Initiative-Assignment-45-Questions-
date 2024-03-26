let current_users: string[] = ["Fahad", "Saad", "Rafid", "Faizan", "Noor"]; 
let new_users: string[] = ["Tanveer Bhai", "Ahmed", "Saqib", "Alyan", "Baber"]; 

// loop through the new_users list using a for-of loop 
for (let new_user of new_users) { 
// convert the new username to lowercase using the toLowerCase() method 
let lower_new_user: string = new_user.toLowerCase(); 
if (current_users.includes(lower_new_user)) { 
  console.log(`The username ${new_user}, has already been used. Please enter a new username.`); 
} else { 
// print a message that the username is available 
  console.log(`The username ${new_user}, is available.`); 
 } 
}