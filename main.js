const taskName = document.getElementById("taskName");
const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");
//const priority = document.getElementById("priority");//
let task;
submitButton.onclick = function () {
    task = taskName.value;
    task = String(task)
    result.textContent = ` ${task}`
    result.textContent += `Hello`
}
