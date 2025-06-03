// example 1

document.getElementById('paragraphChangeButton').addEventListener('click', function () {
    let change = document.getElementById('myParagraph');
    change.textContent = "This paragraph is changed."
})


// example 2

document.getElementById('highlightFirstCity').addEventListener('click', function () {
    let cities = document.getElementById('citiesList');
    let firstCity = cities.firstElementChild;

    if (firstCity) {
        firstCity.classList.toggle('bg-yellow-300');
        firstCity.classList.toggle('text-black');
        firstCity.classList.toggle('px-3');
        firstCity.classList.toggle('py-2');
    }
});


// example 3

document.getElementById('changeOrder').addEventListener('click', function () {
    let coffeeOrder = document.getElementById('coffeeType');
    coffeeOrder.textContent = "Expresso";
})


// example 4

document.getElementById('addNewItem').addEventListener('click', function () {
    let newItem = document.createElement('li');
    newItem.textContent = "Chai";
    document.getElementById('shoppingList').append(newItem);
})


// example 5

document.getElementById('removeLastCity').addEventListener('click', function () {
    let cities = document.getElementById("cityList");
    let lastCity = cities.lastElementChild;
    console.log(lastCity);
    lastCity.remove();
});


// example 6

document.getElementById('clickMeButton').addEventListener('dblclick', function () {
    alert("Dobby is a free elf...")
})


// example 7

document.getElementById('teaList').addEventListener('click', function (event) {
    if (event.target && event.target.matches('.teaItem')) {
        event.target.classList.toggle('bg-yellow-300');  
    }
})

// example 8

document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let theFeedback = document.getElementById('feedbackInput').value;
    document.getElementById('feedbackDisplay').textContent = `your feedback ::: ${theFeedback}`
})