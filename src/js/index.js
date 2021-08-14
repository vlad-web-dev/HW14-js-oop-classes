class ToDoList {
    constructor() {
        this.todos = []
    }
    addTodo(task){
        this.todos.push(task)
    }
    removeTodo(id){
        this.todos = this.todos.filter((task) => task.id !== id)
    }
    showCompletedTasks () {
        return this.todos.filter((task) => task.status === true)
    }
    showInProgressTask () {
        return this.todos.filter((task) => task.status === false)
    }
    changeStatus(id, status) {
       let currentTask = this.todos.find(task => task.id === id)
       currentTask && (currentTask.status = status)
       return currentTask
    }
    findTasks(val) {
        return this.todos.filter(el => el.task.includes(val))
    }
    moveUp(task) {
        let currentIndex = this.todos.findIndex((el) => el.id === task.id)
        this.todos[currentIndex] = this.todos.splice(0, 1,this.todos[currentIndex])[0]
        return this.todos
    }
    moveDown(task) {
        let currentIndex = this.todos.findIndex((el) => el.id === task.id)
        this.todos[currentIndex] = this.todos.splice(this.todos.length-1, 1,this.todos[currentIndex])[0]
        return this.todos
    }
}

let toDoList = new ToDoList()

class Task {
    constructor(task, status, id){
        this.task = task
        this.status = status
        this.id = id
    }
}
let task1 = new Task('to buy milk', true, 'task1')
let task2 = new Task('to buy bread', true, 'task2')
let task3 = new Task('to buy salt', false, 'task3')
let task4 = new Task('to buy sugar', false, 'task4')

//add tasks
toDoList.addTodo(task1)
toDoList.addTodo(task2)
toDoList.addTodo(task3)
toDoList.addTodo(task4)

//remove task by id
toDoList.removeTodo(task2.id)
//show tasks with status true
console.log(toDoList.showCompletedTasks());
//show tasks with status false
console.log(toDoList.showInProgressTask());
//find task by id and change status
console.log(toDoList.changeStatus('task3',true));
console.log(toDoList.todos)
//find task by value
console.log(toDoList.findTasks('milk'))
//find task and move up in te list
console.log(toDoList.moveUp(task4))
//find task and move down in te list
console.log(toDoList.moveDown(task1))
