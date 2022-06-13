"user strict";

//delcare all html tage
const inputField = document.getElementById("inputField");
const addBtn = document.getElementById("addBtn");
const listContainer = document.getElementById("list-container");
const closeBtn = document.querySelectorAll("close");

//EventListerner
addBtn.addEventListener("click", function () {
  const list = document.createElement("li");
  list.innerText = inputField.value;
  listContainer.appendChild(list);
  list.addEventListener("dblclick", function () {
    list.style.display = "none";
  });
});
