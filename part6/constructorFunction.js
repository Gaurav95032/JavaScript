function Person(personName, personAge){
    this.name = personName;
    this.age = personAge;
    this.hello = function () {
        return `I am ${this.name} and i am ${this.age} old.`;
    }
}

let person1 = new Person("Gaurav Waghmare", 21);
let person2 = new Person("John Doe", 21);

let person1Speak = person1.hello();
let person2Speak = person2.hello();

console.log(person1Speak);
console.log(person2Speak);

