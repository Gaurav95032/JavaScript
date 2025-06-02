// // object : It is a collection of key-value pairs. It is used to store data in a structured way.
// // example : {name: "Gaurav", age: 20, isStudent: true}




// const username = {
//     firstname: "Gaurav",
//     isLoggedIn: true,
//     lastname: "Waghmare"
// }

// username.firstname = "Mr.Gaurav";
// username.age = 21;

// console.log(username.firstname);
// console.log(username.isLoggedIn);
// console.log(username.lastname);
// console.log(username.age);
// console.log(username);
// console.log(`${username.firstname} ${username.lastname}`);


// // array : It is a collection of elements. It is used to store multiple values in a single variable.
// // example : [1, 2, 3, 4, 5]

// const usernames = ["Gaurav", true, "Waghmare"];
// console.log(usernames[0]);


const username = {
    firstname: "Gaurav",
    isLoggedIn: true,
    lastname: "Waghmare"
};

const array = Object.values(username)
console.log(array)