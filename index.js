const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addToDo(item.value);
    item.value = "";
  }
});

const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<p>
  ${item}
  <span><i class="fa-solid fa-trash"></i></span>
</p>`;

  listItem.querySelector("i").addEventListener("click", () => {
    listItem.remove();
  });

  listItem.addEventListener("click", () => {
    listItem.classList.toggle("done");
  });

  toDoBox.appendChild(listItem);
};
