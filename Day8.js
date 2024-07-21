// Activity 1

// #Task 1

const name = "Niraj Singh";
const age = 24;
const s = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log(s);

// #Task 2
const str = `Hello, my name is ${name}, I'm ${age} years old. \nI live in Jamshedpur.`;
// const str1 = "Hello, my name is ${name}, I'm ${age} years old. \nI live in Jamshedpur."
console.log(str);

// Activity 2

// #Task 3

const arr = [2, 5, 7, 1, 0, 6];
const [one, two, ...rest] = arr;
console.log(one + " , " + two + " , " + rest);

// #Task 4
const book = {
  title: "First Book",
  author: "Niraj S",
  year: 2024,
};

const { title, author } = book;
console.log(title + "   " + author);

// Activity 3

// #Task 5
const newArr = [...arr, 25, 16, 9, 4];
console.log(newArr);

// #Task 6
const sum = function (...numbers) {
  let s = 0;

  for (let n of numbers) s += n;

  return s;
};

console.log(sum(2, 1, 3));

// Activity 4

// #Task 7

const product = (a, b = 1) => a * b;
console.log(product(2, 5));
console.log(product(2));

// Activity 5

// #Task 8

const nam = "Niraj",
  ag = 24;
const person = {
  nam,
  ag,
  printName: function () {
    console.log("The name is " + nam);
  },
  printDOB: function () {
    console.log(2024 - ag);
  },
};

console.log(person);

// #Task 9

const key1 = "name";
const key2 = "age";

const val1 = "Niraj";
const val2 = "24";

const obj = {
  [key1]: val1,
  [key2]: val2,
};
console.log(obj);
