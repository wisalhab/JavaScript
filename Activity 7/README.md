🧮 Basic Calculator
A simple, interactive calculator built with HTML, CSS, and JavaScript. This project performs basic arithmetic operations — addition, subtraction, multiplication, and division — using user‑provided inputs. It’s a great demonstration of DOM manipulation, event handling, and clean UI design.

📌 Overview
This calculator allows users to:
- Enter two numbers
- Choose an operation (+, −, ×, ÷)
- View the result instantly
- Receive validation feedback for invalid inputs or division by zero
It’s a beginner‑friendly project that showcases core JavaScript logic and front‑end interaction.

📁 Project Structure
/basic-calculator
│── index.html
│── script.js
│── styles.css



🧠 How It Works
1. HTML Structure
The interface includes:
- Two number input fields
- Four operation buttons
- A result display area
<input type="number" id="number1" placeholder="Enter first number">
<input type="number" id="number2" placeholder="Enter second number">


2. JavaScript Logic
The calculate() function handles all operations:
const number1 = parseFloat(document.getElementById('number1').value);
const number2 = parseFloat(document.getElementById('number2').value);


It validates inputs:
if (isNaN(number1) || isNaN(number2)) {
    result = 'Please enter valid numbers.';
}


And performs the selected operation:
switch (operation) {
    case 'add':
        result = `${number1} + ${number2} = ${number1 + number2}`;
        break;
    case 'subtract':
        result = `${number1} - ${number2} = ${number1 - number2}`;
        break;
    case 'multiply':
        result = `${number1} * ${number2} = ${number1 * number2}`;
        break;
    case 'divide':
        if (number2 === 0) {
            result = 'Cannot divide by zero.';
        } else {
            result = `${number1} / ${number2} = ${number1 / number2}`;
        }
        break;
}


The result is displayed dynamically:
document.getElementById('result').innerText = result;



🎨 Styling (CSS)
The UI is clean and centered:
- Inputs and buttons are spaced evenly
- Buttons are large and clickable
- Results are displayed clearly below the calculator
.calculator input {
    padding: 10px;
    font-size: 16px;
}



🚀 Running the Project
Option 1: Open in Browser
- Open index.html
- Enter two numbers
- Click an operation button
- View the result instantly
Option 2: Live Server
Use VS Code’s Live Server extension for auto‑refresh.

🧩 Concepts Demonstrated
✔️ DOM Manipulation
Reading input values and updating the page dynamically.
✔️ Input Validation
Handling invalid numbers and division by zero.
✔️ Event‑Driven Programming
Buttons trigger calculations via onclick.
✔️ Clean UI Layout
Simple, readable, and user‑friendly interface.

🔧 Possible Enhancements
If you want to expand this project later:
- Add keyboard support
- Add a clear/reset button
- Add decimal precision controls
- Improve UI with animations or themes
- Convert to a scientific calculator
- Store calculation history

🏁 Summary
This project is a clean demonstration of interactive front‑end logic using vanilla JavaScript. It’s perfect for showcasing your understanding of DOM manipulation, user input handling, and basic UI design.
