let num1 = 20;
let num2 = 40;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num2} is greater than ${num1}`);
}


let username = "Gaurav Waghmare";
let anotherUsername = "Gaurav";

if (username == anotherUsername) {
    console.log("Pick different username, it is already in use.");
} else {
    console.log("Username is available.");
}

let isUserLoggedIn = false;

if (isUserLoggedIn) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in");
}



let score = 100;

if (typeof (score) === 'number') {
    console.log("Score is a number");
}
else {
    console.log("Score is not a number");
}



let array = [];

if (array.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}