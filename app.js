let todoInput = document.getElementById("todo-input"),
    todoSubmit = document.getElementById("todo-submit"),
    todoTxt = document.getElementById("your-todos-txt"),
    todoList = document.getElementById("todo-list"),
    todo,
    todoArr;
    
const storeTodoInput = () => {
    if (todoInput.value != '') {
        todo = todoInput.value;
        todoInput.value = '';
        return todo;
    }
};

todoSubmit.addEventListener('click', storeTodoInput);
todoInput.addEventListener('keypress', function keylogger(e) {
    if (e.key == 'Enter') {
        storeTodoInput();
    }
});