function Counter(n) {
    return function () {
        n++;
        return n;
    }
}

let Counting = Counter(2);
console.log(Counting());
console.log(Counting());