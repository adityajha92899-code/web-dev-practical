// =======================
// Lecture 3: querySelector
// =======================
const firstPara = document.querySelector(".info");
firstPara.style.color = "blue";

const allPara = document.querySelectorAll(".info");
allPara.forEach(p => console.log(p.textContent));

// =======================
// NodeList vs HTMLCollection
// =======================
console.log("NodeList:", document.querySelectorAll(".info"));
console.log("HTMLCollection:", document.getElementsByClassName("info"));

// =======================
// Lecture 5: addEventListener
// =======================
const btn = document.getElementById("btn");

function buttonClickHandler(event) {
  alert("Button was clicked!");
  console.log("Event type:", event.type);
  console.log("Target:", event.target);
}

btn.addEventListener("click", buttonClickHandler);

// =======================
// removeEventListener
// =======================
document.getElementById("stop").addEventListener("click", () => {
  btn.removeEventListener("click", buttonClickHandler);
  console.log("Click event removed");
});

// =======================
// Lecture 6: Mouse Events
// =======================
const hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightblue";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "white";
});

// =======================
// Keyboard Events
// =======================
document.addEventListener("keydown", e => {
  console.log("Key pressed:", e.key);
});

// =======================
// Lecture 7: Bubbling vs Capturing
// =======================
document.body.addEventListener("click", () => {
  console.log("Body clicked (Bubbling)");
});

document.body.addEventListener(
  "click",
  () => {
    console.log("Body clicked (Capturing)");
  },
  true
);

// =======================
// preventDefault()
// =======================
document.getElementById("myForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Form handled by JavaScript");
});

// =======================
// Lecture 8: Call Stack
// =======================
function stackThird() {
  console.log("Third function (top of stack)");
}

function stackSecond() {
  console.log("Second function");
  stackThird();
}

function stackFirst() {
  console.log("First function");
  stackSecond();
}

console.log("Call Stack Demo Start");
stackFirst();
console.log("Call Stack Demo End");

// =======================
// Temporal Dead Zone
// =======================
let x = 10;
console.log("TDZ value:", x);

// =======================
// Lecture 9: Asynchronous JS
// =======================
console.log("Start");

setTimeout(() => {
  console.log("Async task completed");
}, 2000);

console.log("End");

// =======================
// Lecture 11: Callback
// =======================
function finishHomework(callback) {
  console.log("Doing homework...");

  setTimeout(() => {
    console.log("Homework done!");
    callback();
  }, 2000);
}

function goToPlayground() {
  console.log("Going to playground!");
}

finishHomework(goToPlayground);

// =======================
// Callback Hell
// =======================
setTimeout(() => {
  console.log("Homework done");

  setTimeout(() => {
    console.log("Dinner done");

    setTimeout(() => {
      console.log("Playing outside");
    }, 1000);

  }, 1500);

}, 2000);

// =======================
// Lecture 12: Promise (DECLARED ONCE)
// =======================
const homeworkPromise = new Promise((resolve, reject) => {
  console.log("Promise started");

  setTimeout(() => {
    resolve("Homework submitted");
  }, 3000);
});

console.log("Waiting for promise...");

homeworkPromise
  .then(msg => console.log("✅", msg))
  .catch(err => console.log("❌", err));

// =======================
// Promise Chaining
// =======================
export function doHomework() {
  return new Promise(res => {
    setTimeout(() => {
      console.log("Homework done");
      res();
    }, 2000);
  });
}

export function eatDinner() {
  return new Promise(res => {
    setTimeout(() => {
      console.log("Dinner done");
      res();
    }, 1500);
  });
}

export function play() {
  return new Promise(res => {
    setTimeout(() => {
      console.log("Playing");
      res();
    }, 1000);
  });
}

// =======================
// Async / Await
// =======================
async function runAsync() {
  const result = await homeworkPromise;
  console.log("Async/Await:", result);
}

runAsync();

// =======================
// Timers
// =======================
let count = 1;

const interval = setInterval(() => {
  console.log("Count:", count++);
  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);

console.log("start")
setTimeout(() => {
  console.log("inside timeout");
}, 2000);

console.log("end");

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise 1");
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

Promise.resolve().then(() => {
  console.log("Promise 3");
});

console.log("End");

const form = document.getElementById("eventForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const date = document.getElementById("eventDate").value;
  const category = document.getElementById("category").value;

  output.textContent = `Event Scheduled on ${date} (${category})`;

  // async feedback
  setTimeout(() => {
    output.textContent += " | Reminder Set!";
    
  }, 2000);
});
function orderfood(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      console.log("food ordered")
      resolve("food ordered")  
    },1000)
  })
}

function orderfood(){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      console.log("food delivered ")
      resolve("food deliver")
    },1000)
    
  })
}
  orderfoof().then((data))=>{
    console.log(data)
    return preparedfood()
  }then((data)){
    console.log(data)
  } 
    
  async function order(){
    const data=await orderfood()
    console.log(data)
    await preparedfood()
    await deliverfood()
    
  }

  order()

  console.log("first line")
  try{
    //let sample=324
    console.log(sample)
  }catch(error){
    console.log(error)
  }finally{
    console.log("finally block")
  
  }
  console.log("last line")

  console.log("first line")
  try{
      let age =( 19
      if(age<18))
        
  }


async function fetchData(){} 
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log("Response received");
    if(response.ok===false)throw new Error("Network response was not ok");
    const data = await response.json();
    console.log("Data parsed:", data);
    // data.products.for each((else) => {
      //   console.log(else);
      // });
  } catch (error) {
    console.error("data not found",);
  }












