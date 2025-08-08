class BankAccount {
    constructor( accountNumber, accountHolderName, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit (amount) {
        this.balance+= amount;
        console.log( `$${amount} deposit succsessful, new balance is:  + $${this.balance}`);
    }
    withdraw (amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds for withdrawal.");
        }
        else {
            this.balance-= amount;
            console.log( `$${amount} withdraw succsessful, new balance is:  + $${this.balance}`);
        }
    }
    checkBalance (amount) {
        console.log(`Your current balance is: ${this.balance}`);
    }
}

export default BankAccount;


