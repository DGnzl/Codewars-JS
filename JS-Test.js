let x = 5
x = 'HALLOWEEN'
console.log(x)

let y = 'hi'
console.log(y)

function Five(a,b,c,d,e) {
    return 100 - a - b - c - d- e
}

console.log(Five(10,11,12,1,25))

function Three(a,b,c) {
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