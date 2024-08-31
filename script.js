let tasks = [];
const suggestionsArray = [
    // Academic and Coursework
    "Complete math homework",
    "Study for physics exam",
    "Write research paper",
    "Prepare for midterms",
    "Attend study group",
    "Review lecture notes",
    "Finish lab report",
    "Submit assignment",
    "Practice coding exercises",
    "Work on group project",
    
    // Exercise and Sports
    "Go for a run",
    "Join a yoga class",
    "Play basketball with friends",
    "Swim at the campus pool",
    "Attend gym session",
    "Do a home workout",
    "Practice soccer drills",
    "Go cycling around campus",
    "Participate in intramural sports",
    "Stretch for 10 minutes",

    // Extracurricular Activities
    "Attend club meeting",
    "Plan charity event",
    "Volunteer at local shelter",
    "Practice guitar",
    "Rehearse for theater play",
    "Attend coding bootcamp",
    "Prepare for debate competition",
    "Work on personal project",
    "Attend photography workshop",
    "Participate in hackathon",

    // Bill Payments
    "Pay tuition fees",
    "Pay rent",
    "Pay electricity bill",
    "Pay internet bill",
    "Pay phone bill",
    "Renew gym membership",
    "Pay credit card bill",
    "Pay for streaming services",
    "Buy groceries",
    "Order textbooks online",

    // General College Life
    "Call family",
    "Organize dorm room",
    "Do laundry",
    "Prepare meal prep for the week",
    "Grocery shopping",
    "Attend campus event",
    "Meet with academic advisor",
    "Catch up with friends",
    "Meditate for 10 minutes",
    "Relax and watch a movie",

    // Time Management
    "Plan weekly schedule",
    "Set study goals",
    "Update to-do list",
    "Set reminders for deadlines",
    "Prioritize tasks for the day",
    "Review and reflect on the week",
    "Schedule breaks during study sessions",
    "Organize digital files",
    "Back up important documents",
    "Clean up email inbox"
];

document.getElementById('new-task').addEventListener('input', showSuggestions);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        displayTasks();
        clearSuggestions();
    }
}

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = task.completed ? 'completed' : '';
        taskItem.innerHTML = `
            ${task.text}
            <button onclick="deleteTask(${index})">X</button>
        `;
        taskItem.addEventListener('click', () => toggleTask(index));
        taskList.appendChild(taskItem);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function showSuggestions() {
    const taskInput = document.getElementById('new-task').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';
    if (taskInput) {
        const filteredSuggestions = suggestionsArray.filter(suggestion => 
            suggestion.toLowerCase().includes(taskInput)
        );
        filteredSuggestions.forEach(suggestion => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.textContent = suggestion;
            suggestionDiv.addEventListener('click', () => {
                document.getElementById('new-task').value = suggestion;
                clearSuggestions();
            });
            suggestionsBox.appendChild(suggestionDiv);
        });
    }
}

function clearSuggestions() {
    document.getElementById('suggestions').innerHTML = '';
}
