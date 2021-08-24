let bestColors= ['green', 'blue', 'yellow', 'red']

bestColors.forEach((el) => console.log(el))

let nums = [1,2,3,4,5]

function mult(arr) {
    let product = 1
    arr.forEach((x) => product *= x)
    return product
}

console.log(mult(nums))

let bestBands = ['Metallica', 'Foo Fighters', 'Tool']

let removed = bestBands.shift()

console.log(removed)
console.log(bestBands)

bestBands.unshift(removed)
bestBands.push(removed)

console.log(removed)
console.log(bestBands)
