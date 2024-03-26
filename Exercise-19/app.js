"use strict";
let guest = ["Tanveer Bhai", "Ahmed Bhai", "Saad Bhai"];
function countGuest(guest) {
    return guest.length;
}
let numberOfGuest = countGuest(guest);
console.log(`"Dear, ${numberOfGuest}  have for you a dinner tonight with me"`);
