let todoInput = document.getElementById("todo-input"),
    todoSubmit = document.getElementById("todo-submit"),
    todoTxt = document.getElementById("your-todos-txt"),
    todoList = document.getElementById("todo-list"),
    todo;
    
const storeTodoInput = () => {
    if (todoInput.value != '') {
        todo = todoInput.value;
        todoInput.value = '';

        return todo, createTodoElement(todo);
    }
};

todoSubmit.addEventListener('click', storeTodoInput);
todoInput.addEventListener('keypress', function keylogger(e) {
    if (e.key == 'Enter') {
        storeTodoInput();
    }
});

function createTodoElement(todo) {
    let newDiv = document.createElement('div'),
        newTodoName = document.createElement('p'),
        newBtn = document.createElement('button');

    newTodoName.textContent = todo;
    newBtn.textContent = 'Complete';

    todoList.appendChild(newDiv);
    newDiv.appendChild(newTodoName);
    newDiv.appendChild(newBtn);

    const deleteTodo = () => {
        newBtn.parentElement.remove();
    };

    newBtn.addEventListener('click', deleteTodo);
};


