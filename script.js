// ==============================
// 1. PARAGRAPH SELECTION (DOM)
// ==============================
const paras = document.getElementsByClassName('para');

// Safety check: ensure elements exist
if (paras.length > 0) {
    paras[0].textContent = "THIS is now updated paragraph";
    paras[1].style.color = "green";
    console.log("Updated paragraphs:", paras);
}

// querySelectorAll (Returns NodeList - easier to loop)
const para2 = document.querySelectorAll('.para');
para2.forEach((ele, index) => {
    console.log(`Para ${index} text:`, ele.textContent);
});


// ==============================
// 2. BUTTON & INPUT EVENTS
// ==============================
const button = document.querySelector('.btn');

function message() {
    alert("You have clicked the button");
}

if (button) {
    // Adding class dynamically (Lecture 4: ClassList)
    button.classList.add('but'); 
    button.addEventListener('click', message);
}

// Keyup Event
const input = document.querySelector('.input');
if (input) {
    input.addEventListener('keyup', (event) => {
        console.log("Key pressed:", event.key);
    });
}


// ==============================
// 3. FORM SUBMISSION
// ==============================
const form = document.getElementById("myForm");

if (form) {
    form.addEventListener("submit", (e) => {
        // PREVENT DEFAULT: Stops page reload (Lecture 7)
        e.preventDefault(); 
        console.log("Form submitted");
        alert("Submit event triggered!");
    });
}


// ==============================
// 4. EVENT BUBBLING & CAPTURING
// ==============================
// (Reference: Lecture 7 - Propagation)
const btnOne = document.querySelector(".one");
const divContainer = document.querySelector(".container");

if (btnOne && divContainer) {
    // --- CAPTURING PHASE (useCapture = true) ---
    // Fires from Parent -> Child
    divContainer.addEventListener("click", () => {
        console.log("1. Div (Capturing phase)");
    }, true);

    btnOne.addEventListener("click", () => {
        console.log("2. Button (Capturing phase)");
    }, true);

    // --- BUBBLING PHASE (useCapture = false/default) ---
    // Fires from Child -> Parent
    btnOne.addEventListener("click", () => {
        console.log("3. Button (Bubbling phase)");
    }, false);

    divContainer.addEventListener("click", () => {
        console.log("4. Div (Bubbling phase)");
    }, false);
}


// ==============================
// 5. ASYNC JS & EVENT LOOP
// ==============================
// (Reference: Lecture 10 & 14)

console.log("--- Async Tests Start ---");

// setTimeout
setTimeout(() => {
    console.log("Async: This runs after 2 seconds");
}, 2000);

// setInterval (stops after count > 30)
let count = 10;
const countInterval = setInterval(() => {
    console.log("Interval Count:", count);
    count += 10;

    if (count > 30) {
        clearInterval(countInterval);
        console.log("Interval Cleared");
    }
}, 1000);


console.log("--- Async Tests End ---");

function intervalDemoSimple() {
    let count = 1;
    const id = setInterval(() => {
        console.log(count);
        count += 10;

        if (count > 10) {
            clearInterval(id);
        }
    }, 1000);
}

function asyncIntervalDemo() {
    let count = 10;
    const id = setInterval(() => {
        console.log("Interval Count:", count);
        count += 10;

        if (count > 30) {
            clearInterval(id);
            console.log("Interval Cleared");
        }
    }, 1000);
}
// asyncIntervalDemo(); // Uncomment to run the demo

// ==============================
// END OF SCRIPT
// ==============================

// ...existing code...

// ==============================
// CALLBACK EXAMPLES 
// ==============================

// Example 1 — simple callback
function printSimple() {
    console.log("Hello from print function");
}
function greetSimple(cb) {
    console.log("welcome to callback function (simple)");
    cb();
}
greetSimple(printSimple); // runs immediately

// Example 2 — callback with argument & async (setTimeout)
function printName(name) {
    console.log("Hello " + name);
}
function greetAsync(cb) {
    console.log("welcome to callback function (async)");
    setTimeout(() => {
        console.log("Inside setTimeout");
        cb("Alice"); // pass value to callback
    }, 1000);
    // local variable example (runs immediately)
    let firstName = "John";
    console.log("First name:", firstName);
}
greetAsync(printName); // runs after 1s

// ...existing code...

console.log("starting homework");
setTimeout(() => {
    console.log("finished homework");
    console.log("starting playtime");
    setTimeout(() => {
        console.log("finished playtime");
        console.log("starting dinner");
        setTimeout(() => {
            console.log("finished dinner");
        }, 2000); // dinner after 2s
    }, 2000); // playtime after 2s
}, 2000); // homework after 2s

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    setTimeout(() => {
        console.log(`Finished my ${subject} homework.`);
        callback();
    }, 2000);
}
function eatdinner() {
    console.log("Starting dinner."); 
    setTimeout(() => {
        console.log("Finished dinner.");
        callback(); 
    }, 2000);
}

function gotoplayground() {
    console.log("Starting playtime.");
}
// Chained callbacks
finishHomework("math", () => {
    eatdinner(() => {
        gotoplayground();
    });
});

// ...existing code...


// HANDLE CALLBACK HELl

// 1) Fixed callback chaining (still nested but correct)
function doHomework(subject, cb) {
    console.log(`Starting my ${subject} homework.`);
    setTimeout(() => {
        console.log(`Finished my ${subject} homework.`);
        if (cb) cb();
    }, 2000);
}

function eatDinner(cb) {
    console.log("Starting dinner.");
    setTimeout(() => {
        console.log("Finished dinner.");
        if (cb) cb();
    }, 2000);
}

function goToPlayground(cb) {
    console.log("Starting playtime.");
    setTimeout(() => {
        console.log("Finished playtime.");
        if (cb) cb && cb();
    }, 2000);
}

// run (fixed)
console.log("Run using callbacks:");
doHomework("math", () => {
    eatDinner(() => {
        goToPlayground();
    });
});

// 2) Promises (clean chaining, easier error handling)
function doHomeworkP(subject) {
    return new Promise(resolve => {
        console.log(`Starting my ${subject} homework (promise).`);
        setTimeout(() => {
            console.log(`Finished my ${subject} homework (promise).`);
            resolve();
        }, 2000);
    });
}
function eatDinnerP() {
    return new Promise(resolve => {
        console.log("Starting dinner (promise).");
        setTimeout(() => {
            console.log("Finished dinner (promise).");
            resolve();
        }, 2000);
    });
}
function goToPlaygroundP() {
    return new Promise(resolve => {
        console.log("Starting playtime (promise).");
        setTimeout(() => {
            console.log("Finished playtime (promise).");
            resolve();
        }, 2000);
    });
}

console.log("Run using Promises:");
doHomeworkP("science")
    .then(() => eatDinnerP())
    .then(() => goToPlaygroundP())
    .catch(err => console.error("Error in promise chain:", err));

// 3) async / await (recommended — linear, readable)
async function runDailyRoutine() {
    try {
        console.log("Run using async/await:");
        await doHomeworkP("english");
        await eatDinnerP();
        await goToPlaygroundP();
        console.log("All done (async/await)");
    } catch (err) {
        console.error("Routine failed:", err);
    }
}
runDailyRoutine();


