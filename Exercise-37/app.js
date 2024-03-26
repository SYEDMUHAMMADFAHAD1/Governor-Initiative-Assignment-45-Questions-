function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You ordered a " + size + " shirt with the message: " + message);
}
// Make a large shirt and a // medium shirt with the default message make_shirt(); 
make_shirt("medium");
// Make a shirt of any size with a different // message 
make_shirt("small", "Typescript is awesome!");
