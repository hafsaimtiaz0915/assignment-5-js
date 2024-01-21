function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" onchange="toggleDone(this)">
        <span>${taskInput.value}</span>
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(li);

    taskInput.value = '';
}


function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newText = prompt('Edit task:', span.innerText);

    if (newText !== null) {
        span.innerText = newText;
    }
}

function toggleDone(checkbox) {
    const li = checkbox.parentElement;
    const taskList = li.parentElement;

    if (checkbox.checked) {
        // Remove the task from the UI when the checkbox is checked
        li.remove();
    }

    // Additional logic (e.g., marking the task as done with strike-through)
    const span = checkbox.nextElementSibling;
    span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

