// Q1. write a for loop that loops to the array ["Green tea","Black  tea","Chai","oolong tea"] and stops the loop when it finds "chai", store all the teas before chai in a array named "selectedTeas".

let selectedTeas = [];
let array = ["Green tea", "Black  tea", "Chai", "oolong tea"];

for (let index = 0; index < array.length; index++) {
    if (array[index] !== "Chai") {
        selectedTeas.push(array[index]);
    } else {
        break;
    }
}
// console.log(selectedTeas);

// Q2. write a for loop that loops through the array ["London","Newyork","Paris","Berlin"] and skips "Paris" store the other cities in array named "VisitedCities".


let cities = ["London", "Newyork", "Paris", "Berlin"];
let visitedCities = [];

for (let index = 0; index < cities.length; index++) {
    if (cities[index] === "Paris") {
        continue;
    }
    visitedCities.push(cities[index]);
}
// console.log(visitedCities);


// Q3. use a for of loop to iterate through the array [1,2,3,4,5] and stop when the no. 4 is found, store the number before 4 in array named smallNumbers.

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const element of numbers) {
    if (element === 4) {
        break;
    }
    smallNumbers.push(element);
}
// console.log(smallNumbers);


// Q4. use a for of loop to iterate through the array ["Chai","Green tea","Herbal tea","Black tea"] and skip herbal tea and store the other teas in an array named "preferredTeas".

let teas = ["Chai", "Green tea", "Herbal tea", "Black tea"];
let preferredTeas = [];

for (const element of teas) {
    if (element === "Herbal tea") {
        continue;
    }
    preferredTeas.push(element);
}
// console.log(preferredTeas);


// Q5. Given an object citiesPopulation with city names as keys and their population as values, write a JavaScript program to create a new object cityNewPopulation that only includes cities with a population of 300,000 or more. Use a for...in loop to achieve this.

let citiesPopulation = {
    London: 890000,
    "Newyork": 840000,
    Paris: 220000,
    Berlin: 350000
};
let cityNewPopulation = {};

for (const city in citiesPopulation) {
    if (citiesPopulation[city] < 300000) {
        continue;
    }
    cityNewPopulation[city] = citiesPopulation[city];
}
console.log(cityNewPopulation);


//Q6. Write a JavaScript snippet to iterate over an array of teas ["Eral grey", "Green tea", "Chai", "Oolong tea"] using the forEach method. Skip the element "Chai" and store the remaining teas in an array named availableTeas.

let tea = ["Eral grey", "Green tea", "Chai", "Oolong tea"];
let availableTeas = [];

// tea.forEach(element => {
//     if (element === "Chai") {
//         return;
//     }
//     availableTeas.push(element);
// });

tea.forEach(function (element) {
    if (element === "Chai") {
        return;
    }
    availableTeas.push(element);
})

// console.log(availableTeas);




// Q7. Given an array of cities ["Berlin", "Tokyo", "Sydney", "Paris"], write a JavaScript program to iterate through this array using the forEach method. Skip "Sydney" and add the remaining cities to a new array named travelledCity.

let city = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCity = [];

city.forEach(function (element) {
    if (element === "Sydney") {
        return;
    }
    travelledCity.push(element);
})
// console.log(travelledCity);




// Q8. Write a JavaScript code to iterate through an array numbers = [2, 5, 7, 9]. Multiply each number by 2 and store the result in a new array updatedNumbers. However, skip processing the number 7. Use a traditional for loop to perform this operation.

numbers = [2, 5, 7, 9];
let updatedNumbers = [];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === 7) {
        continue;
    }
    updatedNumbers.push(numbers[index] * 2);
}
// console.log(updatedNumbers);





// Q9. Write a JavaScript program to iterate over an array of teas ["Chai", "Green tea", "Black tea", "Jasmine tea", "Herbal tea"]. Store the names of teas with length of 10 characters or less in a new array shortTeas. Stop the iteration immediately when you encounter a tea name longer than 10 characters using break.

let allTea = ["Chai", "Green tea", "Black tea", "Jasmine tea", "Herbal tea"];
let shortTeas = [];

for (let index = 0; index < allTea.length; index++) {
    if (allTea[index].length > 10) {
        break;
    }
    shortTeas.push(allTea[index]);
}
// console.log(shortTeas);