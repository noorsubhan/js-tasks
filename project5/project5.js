
// variables 

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');

const inputTask = document.getElementById('input-task');


// add button
addTask.addEventListener('click', function(){
let task = document.createElement('div')
task.classList.add('task');

let li = document.createElement('li');
li.innerText = `${inputTask.value}`
task.appendChild(li);
// check button
let checkbutton = document.createElement("button");
checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
checkbutton.classList.add('checktask');
task.appendChild(checkbutton)

// delete btn
let deletebtn = document.createElement("button");
deletebtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
deletebtn.classList.add('deletetask');
task.appendChild(deletebtn);

if(inputTask.value === ""){
    alert('Please Enter a Task');
}else {
    taskContainer.appendChild(task);
}
  inputTask.value = "";

  checkbutton.addEventListener('click', function(){
    checkbutton.parentElement.style.textDecoration = "line-through";
  });

  deletebtn.addEventListener('click',function(e){
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
});

