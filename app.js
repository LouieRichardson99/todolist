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
        newCompleteBtn = document.createElement('button');

    newTodoName.textContent = todo;
    newCompleteBtn.textContent = 'Complete';

    todoList.appendChild(newDiv);
    newDiv.appendChild(newTodoName);
    newDiv.appendChild(newCompleteBtn);


    const deleteTodo = () => {
        newCompleteBtn.parentElement.remove();
    };

    newCompleteBtn.addEventListener('click', deleteTodo);

    newDiv.classList.add('todo-div');
    newTodoName.classList.add('todo-name');
    newCompleteBtn.classList.add('complete-btn');
};

