const input = document.getElementById("input");
const addbtn = document.getElementById("add");
const list = document.getElementById("list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

addbtn.addEventListener("click", () => {
    let inputValue = input.value.trim();
    if (inputValue === "") return;

    const task = { text: inputValue, done: false };
    tasks.push(task);
    saveTasks();
    renderTask(task);

    input.value = "";
    alert("Added to list!");
});

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    list.innerHTML = ""; 
    tasks.forEach((task) => renderTask(task));
}

function markAsDone(){
    let text = document.getElementById("li-text");

        text.classList.add("line-through");
        text.classList.add("opacity-25");
        document.getElementById("done").disabled = true;
        document.getElementById("done").classList.remove("hover:bg-green-600");
        document.getElementById("done").classList.add("opacity-25");

        document.getElementById("edit").disabled = true;
        document.getElementById("edit").classList.remove("hover:bg-blue-600");
        document.getElementById("edit").classList.add("opacity-25");
}


function renderTask(task) {
    let taskItem = document.createElement("div");
    taskItem.innerHTML = `
        <div class="flex items-center justify-between">
            <li class="lg:text-2xl ml-[15px] ${task.done ? "line-through opacity-25" : ""}" id="li-text">${task.text}</li>
            <div class="flex gap-3">
                <button class="done-btn border-[1px] border-none rounded-[5px] bg-green-500 text-[10px] p-1.5 lg:text-[15px] text-white cursor-pointer hover:bg-green-600" id="done" ${task.done ? "disabled" : ""}>DONE</button>
                <button class="edit-btn border-[1px] border-none rounded-[5px] bg-blue-400 text-[10px] p-1.5 lg:text-[15px] text-white cursor-pointer hover:bg-blue-600" id="edit" ${task.done ? "disabled" : ""}>EDIT</button>
                <button class="delete-btn border-[1px] border-none rounded-[5px] bg-red-500 text-[10px] p-1.5 lg:text-[15px] text-white cursor-pointer hover:bg-red-700" id="delete">DELETE</button>
            </div>
        </div>
        <div class="w-[315px] h-[1px] bg-gray-300 mt-3 lg:w-[1115px] ml-[15px] mb-3"></div>`;

    list.appendChild(taskItem);


    taskItem.querySelector(".done-btn").addEventListener("click", () => {
        task.done = true;
        saveTasks();
        renderTasks();
        markAsDone();
        alert("Task done!");
    });

    taskItem.querySelector(".edit-btn").addEventListener("click", () => {
        let newValue = prompt("Edit your task:", task.text);
        if (newValue !== null && newValue.trim() !== "") {
            task.text = newValue.trim();
            saveTasks();
            renderTasks();
        }
    });

    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        tasks = tasks.filter((t) => t !== task);
        saveTasks();
        renderTasks();
        alert("Deleted from list!");
    });
}
const { createElement } = require("lucide");