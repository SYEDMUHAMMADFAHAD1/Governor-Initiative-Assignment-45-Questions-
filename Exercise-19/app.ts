let guest: string[] = ["Tanveer Bhai", "Ahmed Bhai", "Saad Bhai"];

function countGuest(guest: string[]): number {
  return guest.length;
}
let numberOfGuest: number = countGuest(guest);

console.log(`"Dear, ${numberOfGuest}  have for you a dinner tonight with me"`);
