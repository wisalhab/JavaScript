🏦 JavaScript Banking System
A simple, modular banking system built using Object‑Oriented Programming (OOP) principles in JavaScript.
This project demonstrates how to model real‑world financial operations such as deposits, withdrawals, and balance checks using ES6 classes and modules.

📌 Overview
This project simulates basic banking functionality using a  class. Each account instance stores:
• 	An account number
• 	The account holder’s name
• 	The current balance
The system supports:
• 	Deposits
• 	Withdrawals (with insufficient‑funds validation)
• 	Balance checks
• 	Multiple account instances
It’s a clean demonstration of OOP fundamentals and module‑based JavaScript structure.

📁 Project Structure
/banking-system
│── index.html
│── index.js
│── bankAccount.js



🧠 How It Works
1. The BankAccount Class
Defined in , this class encapsulates all account‑related behavior:
class BankAccount

3. Creating Accounts
In , two accounts are created:
const mainAccount = new BankAccount(1234567, "Bob Smith", 2000);
const savingsAccount = new BankAccount(7654321, "Alice Johnson", 5000);


5. Performing Transactions
The script performs deposits, withdrawals, and balance checks:
mainAccount.deposit(500);
savingsAccount.withdraw(1000);

mainAccount.withdraw(300);
savingsAccount.withdraw(6000); // triggers insufficient funds message

mainAccount.checkBalance();
savingsAccount.checkBalance();



🚀 Running the Project
Option 1: Browser (Recommended)
1. 	Open index.html in a browser
2. 	Open the console (F12 → Console)
3. 	You’ll see all transaction logs printed there
Option 2: Node.js
If you want to run it outside the browser:
node index.js

Make sure your environment supports ES modules.

🧩 Concepts Demonstrated
✔️ Object‑Oriented Programming
• 	Classes
• 	Constructors
• 	Encapsulation of behavior
✔️ JavaScript Modules
• 	
• 	 statements
✔️ Real‑World Logic
• 	Validating withdrawals
• 	Updating balances
• 	Logging transaction results

🔧 Possible Enhancements
If you want to expand this into a more advanced project:
• 	Add transaction history tracking
• 	Add interest calculation for savings accounts
• 	Create a  class to manage multiple accounts
• 	Add input fields and UI for user interaction
• 	Persist data using  or a backend API
• 	Add error handling and validation

🏁 Summary
This project is a clean demonstration of how to model real‑world systems using JavaScript classes and modules. It’s perfect for showcasing your understanding of OOP fundamentals and modular code structure on GitHub.
