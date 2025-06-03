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
        firstCity.classList.add('bg-yellow-300', 'text-black', 'px-3', 'py-2');
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