let input = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

addBtn.addEventListener("click", function () {
    addTask();
});

function addTask() {
    let taskText = input.value;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    // toggle == if the class exists, remove it , if not add it
    span.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
        todoList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = "";
}
