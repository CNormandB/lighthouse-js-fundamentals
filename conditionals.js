//If statements
const raining = true;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}
if (cold) {
  console.log("Make sure you pick out a scarf!");
}
console.log("Now you're ready to go outside!");

//If Else statements
console.log('if/else statements')

const temperature = 18;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//logical operators
console.log('logical operaters');

/*
&& - logical AND
|| - logical OR
! - logical NOT.
*/

//Example 1
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//Example 2
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//Example 3
if (!raining) {
  console.log("Leave your umbrella at home!");
}