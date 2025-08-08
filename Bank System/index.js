import BankAccount from "./bankAccount.js";

const mainAccount = new BankAccount( 1234567, "Bob Smith", 2000);
const savingsAccount = new BankAccount( 7654321, "Alice Johnson", 5000);

mainAccount.deposit(500);
savingsAccount.withdraw(1000);

mainAccount.withdraw(300);
savingsAccount.withdraw(6000);

mainAccount.checkBalance();
savingsAccount.checkBalance();