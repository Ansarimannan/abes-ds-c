console.log("before initialising function");

console.log(add(2,3));

function add(a,b){
    return a+b;
}
console.log("after initialising function");
console.log(add(2,3));

//non hoisting function --> arrow function
console.log("Before initialising function");
console.log(sub(4,3));

const sub = (a,b) => a-b;

console.log("after initialising function");
console.log(sub(4,3));


