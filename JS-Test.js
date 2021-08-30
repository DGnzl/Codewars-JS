let x = 5
x = 'HALLOWEEN'
console.log(x)

let y = 'hello'
console.log(y.slice(-3))

function Five(a,b,c,d,e) {
    return 100 - a - b - c - d- e
}

console.log(Five(10,11,12,1,25))

function Three(a,b,c) {
    console.log(`Highest: ${Math.max(a,b,c)}, Lowest: ${Math.min(a,b,c)}`)
    return Math.max(a,b,c)
}

console.log(Three(10,25,35))

function Flip() {
    if (Math.floor(Math.random() * 2) == 1) {
        return "Heads"
    }
    else {
        return "Tails"
    }
}

console.log(Flip())

function Loopz(num) {
    for (let i = 0; i < num; i++) {
        console.log(Flip())
    }
}

Loopz(5)

let tv = ["Dexter's Lab", 'Pokemon', 'Naruto']
tv.forEach(x => console.log(x))

let nums = [5,1,2,3,4]
console.log("Map: " + nums.map(x => x % 2 === 0))
console.log("Filter: " + nums.filter(x => x % 2 === 0))

function quick(arr) {
    let sorted = arr.sort((a,b) => a - b)
    console.log(sorted[1] + sorted[sorted.length - 2])
    console.log("Nums" + nums)
}
quick(nums)

let stopwatch = {}

stopwatch.min =  1
stopwatch.sec = 55
stopwatch.stopped = true
stopwatch.shape = 'Round'

stopwatch.tellTime = function() {
    return `${this.min}:${this.sec}`
}

stopwatch.reset = function() {
    this.min = 0
    this.sec = 0
}

stopwatch.greet = function(name) {
    return `Hello ${name}`
}

console.log(stopwatch.greet('sam'))
console.log(stopwatch.tellTime())
console.log(stopwatch.shape)

let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.surname

function isEmpty(obj) {
    for (key in obj) {
        return false
    }
    return true
}

console.log(isEmpty(user))
delete user.name
console.log(isEmpty(user))

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0
for(key in salaries) {
    sum += salaries[key]
}
console.log(sum)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for(key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2
        }
    }
}
multiplyNumeric(menu)
for (key in menu) {
    console.log(menu[key])
}