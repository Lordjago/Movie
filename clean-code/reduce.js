//reduce the number of array if it even

let numbers = [2, 5, 6, 8, 16]

function numberSum (numbers) {
    return numbers.reduce((accumulator, current) => {
        if(isEven(current)) {
            return accumulator += current  / 2
        }else{
            return accumulator += current
        }
    }, 0)

}

function isEven (num) {
    return (num % 2 === 0)
}

console.log(numberSum(numbers))