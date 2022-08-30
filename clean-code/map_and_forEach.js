//Make use of Map and forEach instead of for loop

//forEach method 

let todos = [
    {task: "Go", completed: true},
    {task: "Come", completed: false}
]

//to modify the value suing forEach
function makePending(todos) {
    todos.forEach((todo, index) => {
        todo.completed = false
})
}


console.log(todos)
console.log()
makePending(todos)
console.log(todos)

//Map 

//IT construct entire new array from the value return from the function

function identify (todos) {
    return todos.map((todo, index) => {
        return {
            ...todo,
            id: index + 1
        }
    })
}

identify(todos)
console.log(todos)
let arr = identify(todos)
console.log(arr)