// Synchronous Programming Example in JavaScript

console.log("Step 1: Start");

// A normal function that runs immediately
function taskOne() {
    console.log("Step 2: Task One is running");
}

function taskTwo() {
    console.log("Step 3: Task Two is running");
}

function taskThree() {
    console.log("Step 4: Task Three is running");
}

taskOne();   // Runs right away
taskTwo();   // Runs only after taskOne finishes
taskThree(); // Runs only after taskTwo finishes

console.log("Step 5: End");
