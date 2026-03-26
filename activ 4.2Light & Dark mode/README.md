🌗 Light and Dark Mode Web Application
A simple, interactive web application demonstrating how to implement a theme toggle system using HTML, CSS, and JavaScript. Users can switch between light mode and dark mode with a single button click, showcasing dynamic styling and DOM manipulation.

📌 Overview
This project provides a clean example of how to:
• 	Toggle CSS classes dynamically
• 	Update UI elements based on user interaction
• 	Apply smooth transitions between themes
• 	Structure a small, modular front‑end project
It’s a great foundational exercise for understanding theme switching — a feature commonly used in modern web applications.

📁 Project Structure
  /light-dark-mode
  │── index.html
  │── styles.css
  │── script.js



🖥️ Features
✔️ Light & Dark Mode Toggle
Switches between two visual themes by adding/removing CSS classes.
✔️ Smooth Transitions
Background and text colors fade smoothly for a polished user experience.
✔️ Dynamic Button Text
The toggle button updates its label depending on the active theme.
✔️ Clean, Semantic HTML
Simple structure that’s easy to extend or integrate into larger projects.

🧠 How It Works
1. HTML Structure
The page includes a header, a content section, and a toggle button:
<button id="toggleButton">Switch to Dark Mode</button>


3. CSS Themes
Light mode is the default. Dark mode is activated by adding the  class:
body.dark-mode {
    background-color: #333333;
    color: #ffffff;
}


5. JavaScript Logic
The script listens for button clicks and toggles the theme:
body.classList.toggle('dark-mode');
header.classList.toggle('dark-mode');
toggleButton.classList.toggle('dark-mode');


It also updates the button text dynamically:
toggleButton.textContent = 'Switch to Light Mode';



🚀 Running the Project
Option 1: Open in Browser
1. 	Open index.html
2. 	Click the toggle button
3. 	Watch the theme switch instantly

Option 2: Live Server (Recommended)
If you use VS Code, run with the Live Server extension for auto‑refresh.

🎨 Visual Behavior
Light Mode
• 	White background
• 	Black text
• 	Light header
Dark Mode
• 	Dark grey background
• 	White text
• 	Dark header and button
The transition is animated for a smoother feel.

🔧 Possible Enhancements
If you want to expand this project later:
• 	Save theme preference in 
• 	Add animations or icon changes (sun/moon)
• 	Apply theme switching to additional components
• 	Create multiple themes (e.g., blue mode, high‑contrast mode)
• 	Add accessibility improvements

🏁 Summary
This project is a clean demonstration of interactive UI behavior using vanilla JavaScript. It’s small, readable, and perfect for showcasing front‑end fundamentals on your GitHub profile
