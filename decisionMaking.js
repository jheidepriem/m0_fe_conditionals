// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// Comparison variables are being used to determing the outcome. If you go through door 1, the bear is wearing a hat, if you go through door two, the bear is wearing a scarf.
//
// 2. What variable has a new value assigned to it after the first if statement executes?
// The variable bearClothing changes based on the first if statement's outcome.

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// If the variable doorChoice was 3, then the bearClothing would be a scarf.

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
// If bearChoice is strictly equal to 1, the first statement will give you a true value. If it is not true and instead 2, it will jump to the next

// else if statement where the bear will start to cry. If it is strictly equal to 3, the outcome will be running into a room full of snakes.
// If the bearChoice is any numbers other than 1,2, or 3 you will stay with the bear and become it's best friend.

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//The outcome will be true. "You run as fast as you can into the next room. It's full of snakes."

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// You see a bear putting on a hat. You tell the bear that the hat is too small and it starts to cry.

// 7. What is your favorite ending?
// You see a bear putting on a hat. You stay with the bear and become best friends.
