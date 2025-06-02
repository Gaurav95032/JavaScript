

let car = {
    make: "Toyota",
    model: "Fortuner",
    year: 2002,
    start: function () {
        return `${this.make} started and comes in market in ${this.year}.`;
    }
}

// console.log(car.start());

function Animal(name) {
    this.name = name;
}
Animal.prototype.sound = function () {
    return `${this.name} makes an sound meow meow meeoooowwwwooo.`;
}

let myAnimal = new Animal("Cat");
// console.log(myAnimal.sound());




Array.prototype.Gaurav = function () {
    return `Custom method ${this}`;
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myArray.Gaurav());



class Vehicle {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    start() {
        return `${this.model} is model of car ${this.name}.`;
    }
}

class Car extends Vehicle {
    constructor(name, model, fuelType) {
        super(name, model); 
        this.fuel = fuelType;
    }

    drive() {
        return `${this.name} is a model of 2020.`;
    }

    carFuel() {
        return `${this.name} model ${this.model} has fuel type of ${this.fuel}.`;
    }

}


let myCar = new Car("Toyota", "Cullary");


console.log(myCar.start());   
console.log(myCar.drive());   
console.log(myCar.carFuel());



