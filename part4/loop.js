// /*

// Loops in javaScript : for, while, do while, for in, for of, forEach

// for loop : for (let i = 0; i < 5; i++) {
//     console.log(i);
// }   

// while loop : while (condition) {
//     // code to be executed  
// }

// do while loop : do {
//     // code to be executed
// } while (condition)


// for in loop : for (let key in object) {
//     // code to be executed
// }

// for of loop : for (let value of array) {
    
// }

// forEach loop : array.forEach(function(element, index, array) {
//     // code to be executed
// })



// */

// // Q1. the challenge is to loop 1 to 5 and add the values from 1 to 5 and store it in a variable called sum

// let sum = 0;
// let i = 1;
// while (i <= 5) {
//     sum += i;
//     i++;
// }
// // console.log(sum);




// // Q2. write a while loop that counts down from 5 to 1 and stores the number in an array named "countdown";

// let countdown = [];
// let j = 5;
// while (j >= 1) {
//     countdown.push(j);
//     j--;
// }
// console.log(countdown);


// // Q3. write a do while loop that prompts a user to enter their favorite tea type until they enter stop store each type in an array named tea collection.

// let teaCollection = [];
// let tea;

// do {
//     tea = prompt("Enter your favorite tea type or type 'stop' to exit");
//     if (tea !== "stop") {
//         teaCollection.push(tea);
//     }
// } while (tea !== "stop");

// console.log("Your tea collection:", teaCollection);


// // Q4. write a do while loop that adds a number from 1 to 3 and stores it in an varible named total.

// let total = 0;
// let i = 1;
// do {
//     total = total + i;
//     i++;
// } while (i <= 3);
// console.log(total);


// // Q5. write a for loop that multiplies each number in the array and store in the name variable called multipliedNumbers.

// let numbers = [2, 4, 6];
// let multipliedNumbers = [];

// for (let index = 0; index < numbers.length; index++) {
//     multipliedNumbers.push(numbers[index] * 2);
// }
// console.log(multipliedNumbers);

// // Q6. write a for loop that list all the cities in the array ["paris","Tokyo","Newyork","London"] and store them in a variable called cityList.


// let array = ["Paris", "Tokyo", "Newyork", "London"];
// let cityList = [];

// for (let index = 0; index < array.length; index++) {
//     cityList.push(array[index]);
// }

// console.log(cityList);