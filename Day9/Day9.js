// Activity 1

// #Task 1

const t1 = document.getElementById("t1");
t1.innerHTML = "Activity 1 : Task 1";

// #Task 2
const t2 = document.querySelector(".t2");
t2.style.backgroundColor = "orange";

// Activity 2

// #Task 3

const t3 = document.createElement("div");
t3.innerText = "Hello Div";
t3.style.backgroundColor = "green"
document.body.appendChild(t3);

// #Task 4

const t4 = document.getElementById("t4");

const listItem = document.createElement("li");

// listItem.innerText = "Place";
// OR  // Both are equally correct
listItem.appendChild(document.createTextNode("Place")); 

t4.appendChild(listItem);

// Activity 3

// #Task 5

t1.remove();

// #Task 6

t4.removeChild(t4.lastElementChild) // Good Practice
// OR
// t4.removeChild(t4.children[t4.children.length - 1])



// Activity 4

// #Task 7
const t7 = document.getElementById("eren");
t7.src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*DXDjCM8iOevaBO6vtYGjmA@2x.jpeg"

// #Task 8

const t8 = document.querySelector(".t8");
t8.classList.add("newt8");
const t8_2 = document.querySelector(".t8_2");
t8_2.classList.add("newt8");
t2.classList.add("newt8")
const newClassT8 = document.querySelectorAll(".newt8");


newClassT8.forEach(element => {
element.style.backgroundColor = "yellow";
});


t2.classList.remove("newt8")
console.log(t2.classList); // "t2"
// Even though the "newt8" class is revied from "t2"
// The yellow background persists because it was set directly via JavaScript as an inline style, which has higher specificity and overrides class-based styles. To address this, clear any inline styles if they need to be reverted.



// Activity 5


// #Task 9
const button = document.getElementById("btn");
const para = document.querySelector(".t9");

button.addEventListener('click', ()=> {
    para.innerText = "Activity 5 : Task 9 completed after clicking button"
});

// #Task 10

const t10 = document.querySelector(".t10");

t10.addEventListener('mouseover', () => {
    t10.style.borderColor = "red"
})

t10.addEventListener('mouseout', ()=>{
    t10.style.borderColor="";
})



