let guest: string[] = ["Saad", "Rafid", "Fahad"];

let message: string =
  "You are cordially invited to my dinner party on Saturday night.\n\nThe guests are:\n";

for (let i = 0; i < guest.length; i++) {
  message += guest[i] + "\n";
}

console.log(message);

console.log("Unfortunately, Rafid can't make it to the dinner.");

guest[1] = "Kashif";

let message1: string =
  "You are cordially invited to my dinner party on Saturday night.\n\nThe guests are:\n";

for (let i = 0; i < guest.length; i++) {
  message1 += guest[i] + "\n";
}

console.log(message1);
