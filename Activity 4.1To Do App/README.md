📝 To‑Do List Web Application
A simple, interactive To‑Do List built with HTML, CSS, and JavaScript. Users can add tasks, remove tasks, and see their list update instantly. This project demonstrates core front‑end concepts such as DOM manipulation, event handling, and array management.

📌 Overview
This project allows users to:
- Add new tasks
- Remove individual tasks
- View an automatically updated task list
- Interact with a clean, minimal UI
It’s a great beginner‑friendly example of how JavaScript can dynamically update content on a webpage.

📁 Project Structure
/todo-list
│── index.html
│── script.js



🧠 How It Works
1. Task Storage
Tasks are stored in a simple array:
let tasks = [];


2. Adding Tasks
When the user enters text and clicks Add Task, the task is pushed into the array:
tasks.push(taskInput);


The input field is cleared, and the UI is refreshed:
displayTasks();


If the input is empty, the user receives an alert.
3. Displaying Tasks
The displayTasks() function rebuilds the entire list each time:
tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeTask(index);

    li.appendChild(removeButton);
    taskList.appendChild(li);
});


Each task includes a Remove button.
4. Removing Tasks
Tasks can be removed by index:
tasks.splice(index, 1);
displayTasks();


The UI updates immediately after removal.

🎨 User Interface
The UI includes:
- A text input for entering tasks
- An Add Task button
- A dynamically updated list of tasks
- A Remove button for each task
The layout is intentionally simple to keep the focus on functionality.

🚀 Running the Project
Option 1: Open in Browser
- Open index.html
- Type a task into the input field
- Click Add Task
- Remove tasks using the Remove button
Option 2: Live Server
Use VS Code’s Live Server extension for auto‑refresh.

🧩 Concepts Demonstrated
✔️ DOM Manipulation
Creating, updating, and removing elements dynamically.
✔️ Event‑Driven Programming
Buttons trigger functions that modify the task list.
✔️ Array Operations
Using push() and splice() to manage tasks.
✔️ Input Validation
Ensures users cannot add empty tasks.

🔧 Possible Enhancements
If you want to expand this project:
- Add task completion (checkbox + strikethrough)
- Add localStorage to save tasks between sessions
- Add edit functionality
- Add categories or priorities
- Add animations for adding/removing tasks
- Add a “Clear All Tasks” button

🏁 Summary
This To‑Do List project is a clean demonstration of interactive front‑end development using vanilla JavaScript. It highlights your ability to manage state, update the DOM, and build user‑friendly interfaces — perfect for showcasing your foundational skills on GitHub.


