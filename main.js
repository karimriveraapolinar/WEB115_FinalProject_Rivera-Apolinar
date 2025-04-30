const taskName = document.getElementById("taskName");
const submitButton = document.getElementById("submitButton");
const taskmanager = document.getElementById("taskmanager");
const priority = document.getElementById("Priority");
const Importance = document.getElementById("Importance")
let task;
let importance;
let Important;
submitButton.onclick = function () {
  task = taskName.value;
  task = String(task);
  importance = priority.value;
  importance = String(importance);
  Important = Importance.value;
  Important = Boolean(Important)
  if (Important=true) {
    taskmanager
  }
taskmanager.textContent = `${task}                        ${importance}                         ${Important}  `;
};

let output = {
  id: 1,
  name: "Finish JavaScript project",
  priority: "High",
  isImportant: true,
  isCompleted: false,
  date: today,
};
output.push();

if (document.getElementById("Importance").checked){

    
    }
