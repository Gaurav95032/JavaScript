document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const todoAddButton = document.getElementById('todoAddButton');
    const todoList = document.getElementById('todoList');

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        renderTask(task);
    });

    todoAddButton.addEventListener('click', () => {
        const tastText = todoInput.value.trim();

        if (tastText === "") return;

        const newTask = {
            id: Date.now(),
            text: tastText,
            isCompleted: false
        }

        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        todoInput.value = ""; // clear input
        console.log(tasks);

    })

    function renderTask(task) {
        console.log(task.text)
        const list = document.createElement('li');
        const Span = document.createElement('span');
        list.setAttribute('dataID', task.id);
        Span.textContent = task.text;
        list.className = "flex justify-between items-center px-4 py-2 bg-yellow-100 border-l-4 border-yellow-700 rounded-md shadow hover:shadow-md transition"
        todoList.append(list);
        list.append(Span);

        if (task.isCompleted) {
            Span.classList.add("line-through");
        }

        Span.addEventListener('click', function () {
            task.isCompleted = !task.isCompleted;
            Span.classList.toggle("line-through");
            saveTasks();
        })

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('dataID', task.id);
        deleteButton.textContent = "Delete";
        deleteButton.className = "bg-red-700 text-white text-xs px-2 py-1 rounded hover:bg-red-900 transition duration-200 shadow-sm";
        list.append(deleteButton);

        deleteButton.addEventListener('click', function (e) {
            e.stopPropagation();
            tasks = tasks.filter((t) => t.id !== task.id);
            list.remove();
            saveTasks();
        })


    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})