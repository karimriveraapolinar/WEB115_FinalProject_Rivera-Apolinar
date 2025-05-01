const taskName = document.getElementById("taskName");
const submitButton = document.getElementById("submitButton");
const taskmanager = document.getElementById("taskmanager");
const priority = document.getElementById("Priority");
const Importance = document.getElementById("Importance")
let Tasks= {
  id: 1,
  name: taskName,
  priority: priority,
  isImportant: Importance,
  isCompleted: false,
  date: Date()
  }
let task;
let importance;
let Important;

submitButton.onclick = function () {
  const values = document.createElement('p');
  const deletebutton= document.createElement('button');
  deletebutton.textContent = "delete";
  
  Tasks.id+= 1  
  task = taskName.value;
  task = String(task);
  Tasks.name= task
  importance = priority.value;
  importance = String(importance);
  Tasks.priority= importance
  Important = Importance.value;
  Important = Boolean(Important)
  Tasks.isImportant= Important
  new_date =Date()
  values.textContent = `${task}                        ${importance}                         ${Important}  ${new_date} ${deletebutton}`;
  taskmanager.appendChild(values) 
  taskmanager.insertAdjacentElement("afterend", button);
  deletebutton.onclick = function() {
    taskmanager.delete()
  }
  console.log(JSON.stringify(Tasks));
};
