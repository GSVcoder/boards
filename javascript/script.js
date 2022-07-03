const ulBoard = document.querySelector(".boards-ul");
const addBoardBtn = document.querySelector(".createBoard");

// CHECK BOARD INPUT
addBoardBtn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (addBoardBtn.value === "") {
      alert("No Task");
    } else {
      createNote();
      addBoardBtn.value = "";
    }
  }
});

// CREATE BOARDS
const createNote = (e) => {
  const li = document.createElement("li");
  li.classList.add("boards-li");
  const h3 = document.createElement("H3");
  h3.textContent = addBoardBtn.value;
  const delBtn = document.createElement("button");
  delBtn.classList.add("boards-li-delBtn");
  delBtn.textContent = "Delete";
  const editBtn = document.createElement("button");
  editBtn.classList.add("boards-li-editBtn");
  editBtn.textContent = "Edit";
  li.append(h3, delBtn, editBtn);
  document.querySelector(".boards-ul").append(li);
};

ulBoard.addEventListener("click", (e) => {
  // DEL BOARDS
  if (e.target.classList.contains("boards-li-delBtn")) {
    e.target.parentElement.remove();
  }

  // EDIT BOARD NAME
  if (e.target.classList.contains("boards-li-editBtn")) {
    const editBtn = document.querySelector(".editDiv");
    const editBtnValue = editBtn.value;
    if (editBtnValue === "") {
      return null;
    } else {
      e.target.parentElement.children[0].textContent = editBtnValue;
      editBtn.value = "";
    }
  }
});
