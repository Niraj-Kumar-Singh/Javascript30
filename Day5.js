//  Activity 1

// #Task 1
function isEven(n) {
  return n % 2 == 0;
}

console.log(isEven(67));

// #Task 2
function square(n) {
  return n * n;
}

console.log(square(5));

// Activity 2.

// #Task 3

const max = function (a, b) {
  if (a > b) return a;

  return b;
};

console.log(max(5, 10));

// #Task 4
const concatenate = function (s1, s2) {
  // return s1 + " " + s2;
  return s1.concat(" " + s2);
};

console.log(concatenate("Niraj", "Singh"));

// Activity 3.

// #Task 5
const sum = (a, b) => a + b;
console.log(sum(5, 2));

// #Task 6
const checkChar = (s) => s.includes("c");
console.log(checkChar("windows"));

// Activity 4.

// #Task 7
const product = function (a, b = 2) {
  return a * b;
};

console.log(product(5)); // 10
console.log(product(5, 6)); // 30

// #Task 8
const greet = function (name, age = 24) {
  return "Hello, " + name + ". Your age is " + age;
};
console.log(greet("Niraj", 24)); // Hello, Niraj. Your age is 24
console.log(greet("Niraj", 40)); // Hello, Niraj. Your age is 40

// Activity 5.

// #Task 9
function hof1(callback1, n) {
  while (n-- > 0) callback1();
}

function callbackGreet() {
  console.log("Hello Duniya");
}

hof1(callbackGreet, 3);

// #Task 10
function hof2(add, prod, val)
{
    const res = add(val);

    const ans = prod(res);

    return ans;
}

const addition = function(n)
{
    return n+n;
}

const multiply = function(m)
{
    return m*m;
}

console.log(hof2(addition, multiply, 5));
