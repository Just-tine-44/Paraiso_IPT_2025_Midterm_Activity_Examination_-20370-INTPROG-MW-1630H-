// Task model
class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask(name, description) {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = new Task(id, name, description);
    tasks.push(newTask);
    return newTask;
}

// Function to view all tasks
function viewTasks() {
    return tasks;
}

// Function to update a task
function updateTask(id, name, description) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = name;
        task.description = description;
        return task;
    } else {
        return null;
    }
}

// Function to delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        return deletedTask[0];
    } else {
        return null;
    }
}

// Example usage:
console.log("Adding tasks:");
console.log(addTask("Task 1", "Description 1"));
console.log(addTask("Task 2", "Description 2"));

console.log("\nViewing all tasks:");
console.log(viewTasks());

console.log("\nUpdating task with id 1:");
console.log(updateTask(1, "Updated Task 1", "Updated Description 1"));

console.log("\nViewing all tasks after update:");
console.log(viewTasks());

console.log("\nDeleting task with id 2:");
console.log(deleteTask(2));

console.log("\nViewing all tasks after deletion:");
console.log(viewTasks());