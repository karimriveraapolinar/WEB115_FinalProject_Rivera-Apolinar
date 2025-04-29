const taskName = document.getElementById("taskName");
const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");
const priority = document.getElementById("importance");//
let task;
let importance
submitButton.onclick = function () {
    task = taskName.value;
    task = String(task)
    importance = priority.value;
    importance = String(importance)
    result.textContent = ` ${task}`
    result.textContent += `${importance}`
}
     