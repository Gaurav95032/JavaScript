// function Animal(species) {
//     this.species = species;
// }
// Animal.prototype.Sound = function () {
//     return `${this.species} makes an sound.`;
// }

// let cat = new Animal("Cat");
// let dog = new Animal("Dog");

// let catSound = cat.Sound();
// let dogSound = dog.Sound();

// console.log(catSound);
// console.log(dogSound);



let array = [2,2,2,2,2,2,2,2,2];
let result;
for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
        result = array[index];
        break;
    }

    else if (array[index] === 0) {
        result = -1;
    }
    else {
        continue;
    }
}
console.log(result);