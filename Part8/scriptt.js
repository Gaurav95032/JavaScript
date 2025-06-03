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