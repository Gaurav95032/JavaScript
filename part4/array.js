/* Q1.Write a JavaScript code snippet to store a list of tea flavours in an array. Then, assign the first element of this array to a new variable named firstTea */

let teaflavours = ["Green tea", "Black tea", "Oolong tea"];
let firstTea = teaflavours[0];
// console.log(firstTea);









/* Q2. Write a JavaScript program to create an array named cities containing four city names. Then, assign the fourth city to a variable named favoriteCity */

let cities = ["London", "Newyork", "Paris", "Tokyo"];
let favoriteCity = cities[3];
// console.log(favoriteCity);








/* Q3. Write a JavaScript code snippet to create an array named teaTypes with three elements. Then, update the second element of the array to "Jasmine tea". */

let teaTypes = ["Herbal tea", "White tea", "Masala chai"];
teaTypes[1] = "Jasmine tea";
// console.log(teaTypes);








/* Q4. Write a JavaScript code snippet to create an array called citiesVisited with two elements. Then, add a new city to the end of the array using the push() method. */

let citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited[citiesVisited.length] = "Berlin";
citiesVisited.push("Berlin");
// console.log(citiesVisited);









/* Q5. Write a JavaScript code snippet to create an array called teaOrders with four elements. Then, remove the last element of the array using the pop() method. */

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastorder = teaOrders.pop();
// console.log(lastorder);
// console.log(teaOrders);







/* Q6. Write a JavaScript code snippet to create an array called teas with three elements. Then, copy into a new array called softTeasCopy without using the spread operator. */

let popularTeas = ["Green tea", "Oolong tea", "Chai"];
let SoftCopyTeas = popularTeas
popularTeas.pop();
// console.log(popularTeas);
// console.log(SoftCopyTeas);








/* Q7. Write a JavaScript code snippet to create an array called topCities with three elements. Then, create a new array called hardCopyCities using the spread operator. */

let topCities = ["Berlin", "Singapore", "Newyork"];
let hardCopyCities = [...topCities];
topCities.pop();
// console.log(hardCopyCities);
// console.log(topCities);






/* Q8. Write a JavaScript program to combine two arrays — europeanCities containing "Paris" and "Rome", and asianCities containing "Tokyo" and "Bangkok" — into a single array named worldCities using the .concat() method. */

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = [...europeanCities, ...asianCities];
let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);






/* Q9. Write a JavaScript snippet to create an array named teaMenu with four types of tea. Then, store the length of this array in a variable named menuLength. */

let teaMenu = ["Masala chai", "Oolong tea", "Green tea", "earl grey"];
let menuLength = teaMenu.length;
// console.log(menuLength);






/* Q10. Create an array named cityBucketList containing four city names. Then, check whether the city "London" is present in this array using the .includes() method, and store the result in a variable named isLondonInBucketList. */

let cityBucketList = ["Kyoto", "London", "Capetown", "Vancouver"];
let isLondonInBucketList = cityBucketList.includes("London");
// console.log(isLondonInBucketList);