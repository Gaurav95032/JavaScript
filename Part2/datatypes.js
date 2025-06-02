// Datatypes in javascript : It is a collection of key-value pairs. It is used to store data in a structured way.

// javascript is a dynamically typed language. It means that the type of a variable can be changed at runtime.

// primitive datatypes : string, number, boolean, undefined, null, bigint, symbol

// non-primitive datatypes : object

// object : It is a collection of key-value pairs. It is used to store data in a structured way.

// Number : It is a data type that represents a number. It can be a whole number or a decimal number.

let balance = 200;
let newBalance = new Number(200);

console.log(balance); // output : 200
console.log(typeof (balance)); // output : number

console.log(newBalance); // output : [object Number]
console.log(typeof (newBalance)); // output : object

// boolean : It is a data type that represents a boolean value. It can be true or false.

let isLoggedIn = true;
let isLoggedOut = new Boolean(true);

console.log(isLoggedIn); // output : true
console.log(typeof (isLoggedIn)); // output : boolean

console.log(isLoggedOut); // output : [object Boolean]
console.log(typeof (isLoggedOut)); // output : object

// null or Undefined : It is a data type that represents a null value. It is used to represent the absence of a value.

let firstname = null;
let secondname = undefined;

console.log(firstname); // output : null
console.log(typeof (firstname)); // output : object

console.log(secondname); // output : undefined
console.log(typeof (secondname)); // output : undefined

// String : It is a data type that represents a string. It is used to store text.

let greet = "Hello, Good Morning!"

let withOutBackTick = greet + " Gaurav";
let withBackTick = `${greet} Gaurav`;

console.log(withOutBackTick); // output : Hello, Good Morning! Gaurav
console.log(withBackTick); // output : Hello, Good Morning! Gaurav

// Symbol : It is a data type that represents a symbol. It is used to create unique identifiers.

let id = Symbol("id");  

console.log(id); // output : Symbol(id)
console.log(typeof (id)); // output : symbol