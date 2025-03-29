const input = document.getElementById("input");
const addbtn = document.getElementById("add");
const list = document.getElementById("list");


addbtn.addEventListener("click", () => {
    let inputValue = input.value.trim(); 
    if (inputValue === "") return;
    
    let taskItem = document.createElement("div");
    taskItem.innerHTML = `
                                        <div class="flex items-center justify-between">
                            <li class="lg:text-2xl">${inputValue}</li>
                            <div class="flex gap-3">
                                <button class="border-[1px] border-none rounded-[5px] bg-blue-400 text-[10px] p-1.5 lg:text-[15px] text-white cursor-pointer hover:bg-blue-600">EDIT</button>
                                <button class="border-[1px] border-none rounded-[5px] bg-red-500 text-[10px] p-1.5 lg:text-[15px] text-white cursor-pointer hover:bg-red-700">DELETE</button>
                            </div>
                        </div>
                        <div class="w-[280px] h-[1px] bg-gray-300 mt-3 lg:w-[1100px] mb-3"></div>
`;
    list.appendChild(taskItem);
    input.value = "";
    alert("Added to list!");
})





const { createElement } = require("lucide");