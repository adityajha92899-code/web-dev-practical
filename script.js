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

document.body.addEventListener("click", () => {
  console.log("Body clicked (Capturing)");
}, true);

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
// Lecture 12: Promise
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
// Promise Chaining (Fixed)
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
// Timers & Microtask Queue
// =======================
let count = 1;
const interval = setInterval(() => {
  console.log("Count:", count++);
  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);

console.log("start");
setTimeout(() => {
  console.log("inside timeout");
}, 2000);
console.log("end");

console.log("Start Promises");
Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));
Promise.resolve().then(() => console.log("Promise 3"));
console.log("End Promises");

// =======================
// Event Form Logic
// =======================
const form = document.getElementById("eventForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const date = document.getElementById("eventDate").value;
  const category = document.getElementById("category").value;

  output.textContent = `Event Scheduled on ${date} (${category})`;

  setTimeout(() => {
    output.textContent += " | Reminder Set!";
  }, 2000);
});

// =======================
// Food Order Promises (Fixed syntax and logic)
// =======================
function orderFood() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("Food ordered");
      resolve("Food ordered payload");  
    }, 1000);
  });
}

function prepareFood() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("Food prepared");
      resolve("Food prepared payload");
    }, 1000);
  });
}

function deliverFood() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("Food delivered");
      resolve("Food delivered payload");
    }, 1000);
  });
}

// Using Promise `.then()`
orderFood()
  .then(data => {
    console.log(data);
    return prepareFood();
  })
  .then(data => {
    console.log(data);
    return deliverFood();
  })
  .then(data => {
    console.log(data);
  });

// Using Async/Await
async function processOrder() {
  const orderedData = await orderFood();
  console.log(orderedData);
  const preparedData = await prepareFood();
  console.log(preparedData);
  const deliveredData = await deliverFood();
  console.log(deliveredData);
}
processOrder();

// =======================
// Try / Catch Blocks (Fixed logic)
// =======================
console.log("First line (try/catch test 1)");
try {
  // Let's intentionally cause an error to test the catch block
  let sample = 324;
  console.log(undefinedVariable); // This will throw an error
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("Finally block executed");
}
console.log("Last line");

console.log("First line (try/catch test 2)");
try {
  let age = 19;
  if (age < 18) {
    throw new Error("Age is under 18!");
  }
  console.log("Age check passed");
} catch(error) {
  console.log("Error:", error.message);
}

// =======================
// Fetch API
// =======================
async function fetchData() {
  try { 
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log("Response received");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data parsed:", data);
  } catch (error) {
    console.error("Data not found:", error);
  }   
}
fetchData();
