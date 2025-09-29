// Asynchronous Programming Example in JavaScript

console.log("Step 1: Start");

// A function that simulates a delay using setTimeout
function taskOne() {
    setTimeout(() => {
        console.log("Step 2: Task One is running (after 2 seconds)");
    }, 2000); // runs after 2 seconds
}

function taskTwo() {
    console.log("Step 3: Task Two is running");
}

function taskThree() {
    console.log("Step 4: Task Three is running");
}

taskOne();   // Scheduled but does not block other tasks
taskTwo();   // Runs immediately after taskOne is scheduled
taskThree(); // Runs immediately after taskTwo

console.log("Step 5: End");
