import { TaskStatus } from "./types/TaskStatus.js"
import { Task } from "./types/Task.js"

let tasks: Task[] = []

document.querySelector(".addTask")!.addEventListener("click", ()=>{
  const taskNameInput = <HTMLInputElement>document.querySelector(".taskName")
  const taskName = taskNameInput.value
  console.log(taskName)
  if (taskName) {
    const taskItem = {
      name: taskName,
      status: TaskStatus.Todo
    }
    createTask(taskItem)
  }
})

function createTask(task: Task) {
  tasks.push(task)
  const taskNameInput = <HTMLInputElement>document.querySelector(".taskName")
  taskNameInput.value = ''
  updateTaskList()
}

function updateTaskList() {
  let taskListHtml = ''
  tasks.forEach((item)=>{
    taskListHtml += `<li>${item.name} - ${TaskStatus[item.status]}</li>`
  })
  document.querySelector('.taskList')!.innerHTML = taskListHtml
}