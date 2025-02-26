//Init(create) empty array element called tasks
let tasks = [];

//Add an ON CLICK event listener to the "add task button" that calls a function called addTask
document.getElementById("addTaskBtn").addEventListener("click", function () {
    //Get the value of the input field and store it in a variable called taskInput
    let taskInput = document.getElementById("taskInput").value;

    //Check if the taskInput has something in it
    if (taskInput) {
        //Create a new object called task with the following properties
        tasks.push(taskInput);
        //Clear input field after adding task
        document.getElementById("taskInput").value = "";
        //Log the task to the console

        //Call the function to update the list of tasks
        displayTasks();

    }
    console.log(tasks);
});
//Create a function to display tasks in a list
function displayTasks() {
    //Get the unordered list element from HTML and store it in a variable called taskList
    let taskList = document.getElementById("taskList");

    //Clear the existing list before updating tasks
    taskList.innerHTML = "";

    //Loop through the tasks array and create a new li element for each task
    tasks.forEach((task, index) => {
        //Create a new list element
        let li = document.createElement("li");
        //Add CSS classes to the list element
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        li.innerHTML = `${task} <button class="btn btn-dark btn-sm" onclick="removeTask(${index})">√</button>`;
        //Append the list element to the unordered list
        taskList.appendChild(li);

    
        
    }
);
}