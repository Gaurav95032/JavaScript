class BankAccount {
    #Balance = 0;

    Deposit(amount) {
        this.#Balance += amount;
        return this.#Balance;
    }

    CheckBalance() {
        return `your bank balance is ${this.#Balance} $.`;
    }

}

let myAccount = new BankAccount();
myAccount.Deposit(10000);
console.log(myAccount.CheckBalance());