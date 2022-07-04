const ulBoard = document.querySelector(".boards-ul");
const addBoardBtn = document.querySelector(".createBoard");
const grid = document.querySelector(".grid");
grid;

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

grid.addEventListener("click", (e) => {
  // CREATE TOPIC
  if (e.target.classList.contains("plus")) {
    const topicName = document.querySelector(".topicName");
    if (topicName.value === "") {
      return null;
    } else {
      const topicsDiv = document.createElement("div");
      topicsDiv.classList.add("topics");
      const h3 = document.createElement("h3");
      h3.textContent = topicName.value;
      h3.classList.add("h3Name");
      const newNote = document.createElement("div");
      newNote.classList.add("note", "newNote");
      const newNoteDiv = document.createElement("div");
      newNoteDiv.classList.add("newNotDiv");
      const h1 = document.createElement("h1");
      h1.textContent = "+";
      newNoteDiv.append(h1);
      newNote.append(newNoteDiv);
      topicsDiv.append(h3, newNote);
      e.target.parentElement.parentElement.append(topicsDiv);
      topicName.value = "";
    }
  }

  // // EDIT TOPIC NAME
  if (e.target.classList.contains("h3Name")) {
    const topicNameEdit = document.querySelector(".topicNameEdit");
    if (topicNameEdit.value === "") {
      return;
    } else {
      e.target.textContent = topicNameEdit.value;
      topicNameEdit.value = "";
    }
  }
  console.log(e.target);
});
