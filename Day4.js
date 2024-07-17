// #1. Activity 1
for(let i=1;i<=10;i++)
    console.log(i+" ");

for(let i=1;i<=10;i++)
    console.log(5*i);

// #2. Activity 2

let x=1;
let sum=0;
while(x<=10)
{
    sum+=x;
    x++;
}

console.log("Sum=" + sum);
while(--x>0)
{
    console.log(x);
}


// #3.Activity 3;
x = 1;
do
{
    console.log(x++);
}
while(x<6)

let n = 0;
let ans=1;
x=1;

do
{
    ans=ans*x++;
}
while(x<=n)

console.log(ans);


// #4. Activity 4

for(let i=1;i<=5;i++)
{
    let ans = "*";

    for(let j=2;j<=i;j++)
        ans+=" *";

    console.log(ans);

}


// #5. Activity 5

let res = "1";
let num=1;

while(++num<=10)
{
    if(num==5)
        continue;

    res+=" "+num;

    
}
console.log(res);


res = "1";
num=1;

while(++num<=10)
{
    if(num==7)
        break;

    res+=" "+num;

    
}
console.log(res);