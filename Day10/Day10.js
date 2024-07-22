// Activity 1

// #Task 1

const button = document.getElementById("t1-btn");

button.addEventListener('click', ()=> {
    document.querySelector(".t1").textContent = "Activity 1 : Task 1"
});

// #Task 2

const image = document.getElementById("t2-img");

image.addEventListener('dblclick', ()=>{

    // console.log("Before="+image.style.display);

    image.classList.toggle('hidden');

    // console.log("After="+image.style.display);
});


// Activity 2

// #Task 3

const t3 = document.getElementById("t3");
t3.addEventListener('mouseover', ()=>{
    t3.classList.add("changeBackground");
})

// #Task 4

t3.addEventListener('mouseout', ()=>{
    t3.classList.remove("changeBackground");
})

// Activity 3

// #Task 5
const t5 = document.getElementById("t5");
t5.addEventListener('keydown', (e)=>{
    console.log(e.key);
})

// #Task 6
const t6 = document.getElementById("t6");
const para = document.createElement('p');
document.body.appendChild(para);
t6.addEventListener('keyup', (e)=>{    
    para.innerText = e.target.value;    
})

// Activity 4

// #Task 7

const form = document.getElementById("t7");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    console.log(document.getElementById("t7-name").value);
    console.log(document.getElementById("t7-age").value);
    // console.log(e.target.age);
})


// #Task 8

const para2 = document.createElement("p");
document.body.appendChild(para2);

const t8 = document.getElementById("t8");
t8.addEventListener("change", (e)=>{
    console.log(e.target);
    para2.innerText=e.target.value
});

// Activity 5

// #Task 9

const t9 = document.getElementById("t9");

t9.addEventListener('click', (e)=>{
    
    console.log(e.target.textContent);
})


// #Task 10
const el4 = document.createElement("li");
el4.innerText = "Fourth Item";
t9.appendChild(el4);

// Now when we click on this dynamically added list element, then it log "Fourth Item"
