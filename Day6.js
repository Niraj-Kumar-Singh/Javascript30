// Activity 1

// #Task 1
let nums = [1, 2, 3, 4, 5];
console.log(nums);

// #Task 2
console.log(nums[0] + " " + nums[4]);

// Activity 2

// #Task 3
nums.push(6);
console.log(nums);

// #Task 4
nums.pop();
console.log(nums);

// #Task 5
nums.shift();
console.log(nums);

// #Task 6
nums.unshift(1);
console.log(nums);


// Activity 3

// #Task 7
let doubleNums = nums.map((n)=> n*2);
console.log(doubleNums);

// #Task 8
let evenNums = nums.filter((n)=>n%2==0);
console.log(evenNums);

// #Task 9
let sumNums = nums.reduce((sum, n)=> sum+n, 0);
console.log(sumNums);


// Activity 4

// #Task 10
for(let i=0;i<nums.length;i++)
    console.log(nums[i]);

// #Task 11
nums.forEach((n)=>console.log(n));


// Activity 5

// #Task 12
let nums2d = [[1,2,3],[4,5,6],[7,8,9]];
console.log(nums2d);

// #Task 13
console.log(nums2d[1][1]);