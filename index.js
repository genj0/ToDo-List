// селекторы
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// эвент слушатели
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// функции
function addTodo(event) {
  // предотвращаем по дефолту запись
  event.preventDefault();
  // создаем элемент задача
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newtoDo = document.createElement("li");
  newtoDo.innerText = todoInput.value;
  newtoDo.classList.add("todo-item");
  todoDiv.appendChild(newtoDo);
  // создаем кнопку сделано
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class ="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  // создаем кнопку удалить
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // добавляем в список
  todoList.appendChild(todoDiv);
  // очищаем значение после ввода
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    // анимация
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // проверяем если задача выполнена
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
