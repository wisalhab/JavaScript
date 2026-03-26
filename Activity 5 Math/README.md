📊 Mean Calculation Project
A simple JavaScript project that calculates the mean (average) of a dataset. This activity demonstrates basic programming concepts such as loops, arrays, mathematical operations, and console output.

📌 Overview
This project takes a small set of numerical values and computes their mean using a custom JavaScript function. It includes:
- A dataset representing sample experimental values
- A reusable calculateMean() function
- Rounding logic for cleaner output
- Console‑based result display
- Both inline‑script and external‑script versions
It’s a great introductory example of JavaScript fundamentals.

📁 Project Structure
/mean-calculation
│── index.html
│── script.js



🧠 How It Works
1. Sample Data
The dataset is a simple array of floating‑point numbers:
let values = [4.2, 5.1, 3.8, 4.7, 5.3];


2. Mean Calculation Function
The function loops through the array, sums the values, and divides by the number of elements:
function calculateMean(values) {
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum / values.length;
}


3. Rounding & Output
The mean is rounded to two decimal places:
var roundedMean = Math.round(mean * 100) / 100;


The result is printed to the console:
console.log("Mean: " + roundedMean);



🚀 Running the Project
Option 1: Open in Browser
- Open index.html
- Open the browser console (F12 → Console)
- You’ll see the output, for example:
Mean: 4.62


Option 2: Run script.js with Node
If you prefer running the external script:
node script.js



🧩 Concepts Demonstrated
✔️ Arrays
Storing and iterating through numerical data.
✔️ Loops
Using a for loop to accumulate values.
✔️ Mathematical Operations
Summation, division, and rounding.
✔️ Console Output
Displaying results for debugging or experimentation.

🔧 Possible Enhancements
If you want to expand this project:
- Add median and mode calculations
- Accept user input instead of hard‑coded values
- Display results on the webpage instead of the console
- Add error handling for invalid data
- Visualize the dataset with a chart

🏁 Summary
This project is a clean, simple demonstration of how to compute the mean of a dataset using JavaScript. It’s ideal for beginners learning core programming concepts and makes a great foundational GitHub activity.
