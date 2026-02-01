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