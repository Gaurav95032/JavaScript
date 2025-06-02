// write a function named `maketea` that takes one parameter  , `tyepOfTea`, and returns a string like "making a green tea" when called with green tea, store the result in a variable named "teaOrder"

// function maketea(typeOfTea) {
//     return `making ${typeOfTea}`
// }
// let teaOrder = maketea("lemon tea");
// console.log(teaOrder);



// create a function name "orderTea that takes one parameter, "teaType".Inside this function, create an anothher funtion named "confirmOrder",that returns a message like "Order confirmed for chai".Call "confirmOrder" from within "orderTea" and return the result.

// function orderTea() {
//     function confirmOrder() {
//         return "Order confirmed for chai";
//     }
//     return confirmOrder();
// }

// let confirmationOfOrder = orderTea();
// console.log(confirmationOfOrder);



// write an arrow function called "calculateTotal" that  takes two parameter : "price" and "quantity". the function should return the total cost multiplying the price and quantity. store the result in a variable named "totalCost" .

// const calculateTotal = (price,quantity) => {
//     return (price * quantity)
// }
// let priceOfObject = 100;
// let quantityOfObject = 12;

// let totalCost = calculateTotal(priceOfObject, quantityOfObject);
// console.log(`the total cost is ${totalCost}`);


// write a function name "processTeaOrder" that takes anather function, "makesTea" as a parameter and calls it with argument "eral grey" return the result of calling makesTea.

// const makesTea = (typeOfTea) => {
//     return `we are making ${typeOfTea}`;
// }

// const processTeaOrder = (fn) => {
//     return fn("earl grey");
// }

// const order = processTeaOrder(makesTea);
// console.log(order);


// write a function named "createTeaMaker" that returns anather function. the returned function should take one parameter, "teaType" and return a message like "Making green tea". stored the return function in a variable named "teaMaker" and call it with "green tea"


const createTeaMaker = (name) => {
    return function (teaType) {
        return `making ${teaType} for ${name}`;
    }
}

let teaMaker = createTeaMaker("Gaurav");
console.log(teaMaker);
console.log(teaMaker());
console.log(teaMaker("green tea"))