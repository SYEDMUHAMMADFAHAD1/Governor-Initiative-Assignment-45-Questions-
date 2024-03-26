"use strict";
let guest = ["Fahad", "Saad", "Tanveer Bhai"];
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]},
    
    You are cordially invited to my dinner party on Friday night.
    I hope you can make it and enjoy some delicious food and great conversation.
    Please RSVP by tomorrow.

    Sincerely,
    Imran Khan
    `);
}
console.log("Unfortunately, Saad can't make it to the dinner.");
guest[1] = "Ahmed";
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]},
    I hope you are still looking forward to my dinner party on Friday night.
    I have some news: Saad can't make it, but I have invited ${guest[1]} instead.
    He is a friend of yours and mine, and I think you will get along well with him.
    He is very interested in your work as a Programmer.
    Please let me know if you have any questions or concerns.
    See you soon!
    `);
}
console.log("Good news: I found a bigger table for the dinner party!");
guest.unshift("Saqib");
guest.splice(2, 0, "Rafid");
guest.push("Waris");
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]},
    
    I'm delighted to invite you to my dinner party on Friday night.
    I found a bigger table and I thought you would be a great addition to the guest list.
    You are an amazing programmer and I'm sure everyone will enjoy your performance.
    Please let me know if you can make it.
    See you soon!
    `);
}
