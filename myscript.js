// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task button click event
addTaskBtn.addEventListener('click', addTask);

// Function to add a task
function addTask() {
    const task = taskInput.value.trim(); // Get and trim input value
    if (task) {
        // Create a new list item
        const li = document.createElement('li');
        li.innerHTML = `${task} <button class="remove">Delete</button>`;
        
        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Add delete functionality
        const deleteBtn = li.querySelector('.remove');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
    }
}

// Optional: Add "Enter" key functionality
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask(); // Call addTask() when Enter is pressed
    }
});
