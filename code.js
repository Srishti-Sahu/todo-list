const input = document.querySelector("input");
const add = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

add.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("class", "todo");
  const span = document.createElement("span");
  span.innerText = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "deleteBtn");
  deleteBtn.innerHTML = "&#10060;";
  deleteBtn.addEventListener("click", () => {
    div.remove();
  });
  div.appendChild(span);
  div.appendChild(deleteBtn);
  todoList.appendChild(div);
});
