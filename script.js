function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (input.value.trim() === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.onclick = function() {
        taskText.classList.toggle('completed');
    };

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = input.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Excluir';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = '';
}

// Permitir adicionar tarefa com a tecla Enter
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}); 