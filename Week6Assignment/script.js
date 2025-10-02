const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const counter = document.getElementById("counter");

function updateCounter() {
  const items = document.querySelectorAll("li"); 
  const count = items.length;

  if (count === 1) {
    counter.textContent = count + " item";
  } else {
    counter.textContent = count + " items";
  }
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim(); 
  if (text === "") return; 

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateCounter();
  });

  li.appendChild(deleteBtn);

  list.appendChild(li);

  input.value = "";

  updateCounter();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

clearBtn.addEventListener("click", () => {
  list.textContent = ""; 
  updateCounter();
});

updateCounter();
