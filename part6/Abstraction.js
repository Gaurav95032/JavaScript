class CoffeeMachine {
    start() {
        // assigning data
        // starting complex mechanism
        return `Coffee machine started...............`;
    }
    brewingCoffee() {
        // all the complex mechanism
        return `Brewing Coffee....`;
    }
    PressStartButton() {
        let messageOne = this.start();
        let messageTwo = this.brewingCoffee();
        return `${messageOne} and ${messageTwo}`;
    }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.PressStartButton());