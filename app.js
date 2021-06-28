const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const completeListButton = document.querySelector(".complete_list");
const incompleteListButton = document.querySelector(".incomplete_list");
const allListButton = document.querySelector(".allcomplete_list");
const allDelete = document.querySelector(".removeAllButton");
const deleteCompleted = document.querySelector(".removeAllCompleteButton");

//variable to store the count of tasks at hand
var count = 0;

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
completeListButton.addEventListener("click", showCompleted);
incompleteListButton.addEventListener("click", showNotCompleted);
allListButton.addEventListener("click", showAll);
allDelete.addEventListener("click", deleteAllTodos);
deleteCompleted.addEventListener("click", deleteFinishedTodos);

//function to delete all todos
function deleteAllTodos(e) {
  const todos = todoList.childNodes;
  var size = todos.length;

  while (size > 0) {
    todos[0].remove();
    size--;
  }

  count = 0;
  document.getElementById("countTasks").innerHTML = count + " Tasks Added";
}

//function to delete just the completed todos
function deleteFinishedTodos(e) {
  const todos = todoList.childNodes;
  var ar = [];

  var l = todos.length;
  for (let index = 0; index < l; index++) {
    todos.forEach(function (todo) {
      if (todo.classList.contains("completed")) {
        todo.remove();
      }
    });
  }
  var l = todos.length;
  count = l;
  document.getElementById("countTasks").innerHTML = count + " Tasks Added";
}

//function to add a todo
function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";

  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  count = count + 1;
  document.getElementById("countTasks").innerHTML = count + " Tasks Added";
}

//function to delete one target todos
function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.remove();
    count = count - 1;
    document.getElementById("countTasks").innerHTML = count + " Tasks Added";
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//function to show just the completed todo
function showCompleted(e) {
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    if (todo.classList.contains("completed")) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
}

//function to show just the incomplete todos
function showNotCompleted(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    if (!todo.classList.contains("completed")) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
}

//function to show all the todos
function showAll(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    todo.style.display = "flex";
  });
}
