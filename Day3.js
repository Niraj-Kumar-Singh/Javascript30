// #1. Activity 1

let x = -10;
if (x > 0) console.log("Pos");
else if (x == 0) console.log("Zero");
else console.log("Neg");

const age = 24;
console.log(age >= 18 ? "Eligible" : "Not Eligible");

// #2. Activity 2
const a = 10,
  b = 12,
  c = 7;
if (a > b) {
  if (a > c) console.log("A is largest");
} else if (b > a) {
  if (b > c) console.log("B is largest");
} else if (c > b) {
  if (c > a) console.log("C is largest");
}

// #3. Activity 3

let n = 4;
let day = "Monday";

switch (n) {
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
}

console.log(day);

// #4. Activity 4
const num = 6;

console.log(num % 2 == 0 ? "Even" : "Odd");

// #5. Activity 5
let year = 2014;

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
  console.log("Leap year");
else console.log("Not leap");
