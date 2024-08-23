document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", function (event) {
      event.preventDefault();
      addTodo(todoInput.value);
      todoInput.value = "";
  });

  function addTodo(task) {
      console.log("Menambahkan tugas:", task); // Debugging
      const li = document.createElement("li");
      li.textContent = task;

      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.className = "complete";
      completeButton.addEventListener("click", () => {
          li.classList.toggle("completed");
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
          li.remove();
      });

      li.appendChild(completeButton);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
  }
});
