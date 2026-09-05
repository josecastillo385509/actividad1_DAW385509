

let tasks = [];
let nextId = 1;

// CREATE

function createTask(title){

    const task = new Object();
    task.id = nextId++;
    task.title = title;
    task.complete = false;

    tasks.push(task);
    return task;

}

// READ

function getTasks(){
    return tasks;
}

function getTaskById(id){
    return tasks.find((task) => task.id == id);
}

// UPDATE

function updateTask(id, updates = {}){
    let taskToUpdate = getTaskById(id);
    if(updates.title != undefined){
        taskToUpdate.title = updates.title;
    }
    if(updates.complete != undefined){
        taskToUpdate.complete = updates.complete;
    }
    tasks = tasks.splice(id,1);
    tasks.push(taskToUpdate);
    return taskToUpdate;
}

// DELETE

function deleteTask(id) {
    const taskToDelete = getTaskById(id);
    tasks.splice(tasks.indexOf(taskToDelete, 1));
    return taskToDelete;
}

module.exports = {
    createTask, getTasks, getTaskById, updateTask, deleteTask
}