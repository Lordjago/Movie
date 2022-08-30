let todos = [
    {
        id: 1,
        task: "Go to Market",
        complete: true
    },
    {
        id: 2,
        task: "Submit assingment",
        complete: false
    }
];

console.table(todos);

let completed = [];

let obj = {};
for(let todo of todos){
    if(todo.complete){
        completed.push(todo);
    }
}

console.table(completed);

const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

const arr = Array.from(arrLike);

console.log(arr)