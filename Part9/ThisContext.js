const person = {
    name: "Gaurav Waghmare",
    greet: function () {
        return `Hello i  am ${this.name}.`;
    }
}

let firstPerson = {
    name: "Khushi Bonde"
}

let secondPerson = {
    name : "Ishata Ghayade"
}

let thirdPerson = {
    name :  "Parag yele"
}

let call = person.greet.call({ name: "Kartikey Kolhe" });
console.log(call);

let call1 = person.greet.call(firstPerson);
console.log(call1);

let bind = person.greet.bind(secondPerson);
console.log(bind());

let bind2 = person.greet.bind({ name: "Akshad Aloni" });
console.log(bind2());


let apply = person.greet.apply({ name: "Aditya Power" });
console.log(apply);

let apply2 = person.greet.apply(thirdPerson);
console.log(apply2);
