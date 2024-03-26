"use strict";
let guest = ["Fahad", "Saad", "Rafid"];
for (let i = 0; i < guest.length; i++) {
    console.log("Dear " +
        guest[i] +
        ",\nYou are cordially invited to my dinner party on Friday night.");
}
console.log("Unfortunately, Saad can't make it to the dinner.");
guest[2] = "Ahmed";
for (let i = 0; i < guest.length; i++) {
    console.log("Dear " +
        guest[i] +
        ",\nI hope you are still looking forward to my dinner party on Friday night.\nI have some news: Saad can't make it, but I have invited Ahmed  instead.!");
}
console.log("Good news: I found a bigger table for the dinner party!");
guest.unshift("Miss Hina Naseer");
guest.splice(2, 0, "Rafid");
guest.push("Waris");
for (let i = 0; i < guest.length; i++) {
    console.log("Dear " +
        guest[i] +
        ",\nI'm delighted to invite you to my dinner party on Friday night.!");
}
console.log("Unfortunately, new dinner table won’t arrive in time for the dinner, and you have space for only two guests.");
while (guest.length > 2) {
    let uninvited = guest.pop();
    console.log("Dear " +
        uninvited +
        ",\nI'm very sorry to tell you this, but I have to uninvite you from my dinner party.");
}
for (let i = 0; i < guest.length; i++) {
    console.log("Dear " +
        guest[i] +
        ",\nI'm happy to tell you this, but you are still invited to my dinner party on Friday .");
}
guest.splice(0, 2);
console.log(guest);
