document.getElementById('todoAddbutton').addEventListener('click', function (event) {
    event.preventDefault();
    let input = document.getElementById('todoInput').value;
    let newTask = document.createElement('li');
    newTask.textContent = input;
    document.getElementById('todoList').append(newTask);
    document.getElementById('todoInput').value = '';
})

document.getElementById('todoDeleteButton').addEventListener('click', function () {
    let todoList = document.getElementById('todoList');
    let todoLastElement = todoList.lastElementChild;
    console.log(todoLastElement);
    todoLastElement.remove();
})
