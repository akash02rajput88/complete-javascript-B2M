// getName();
// console.log(x);
// console.log(getName);
//
// var x;
// function getName() {
//         console.log("Namaste JavaScript")
// }

//Hoisting in JavaScript :- Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the execution context.

getName();
console.log(getName()); //Uncaught TypeError: getName is not a function
var getName = function () {
        console.log("Namaste JavaScript")
}