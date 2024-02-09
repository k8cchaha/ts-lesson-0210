import { TaskStatus } from "./types/TaskStatus.js";
let tasks = [];
document.querySelector(".addTask").addEventListener("click", () => {
    const taskNameInput = document.querySelector(".taskName");
    const taskName = taskNameInput.value;
    console.log(taskName);
    if (taskName) {
        const taskItem = {
            name: taskName,
            status: TaskStatus.Todo
        };
        createTask(taskItem);
    }
});
function createTask(task) {
    tasks.push(task);
    const taskNameInput = document.querySelector(".taskName");
    taskNameInput.value = '';
    updateTaskList();
}
function updateTaskList() {
    let taskListHtml = '';
    tasks.forEach((item) => {
        taskListHtml += `<li>${item.name} - ${TaskStatus[item.status]}</li>`;
    });
    document.querySelector('.taskList').innerHTML = taskListHtml;
}
