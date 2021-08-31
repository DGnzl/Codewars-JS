let drink = 'water'
console.log(drink)

let phrase = 'Let it snow apple'
console.log(phrase.includes('apple'))

function RPS() {
    let z = Math.random()
    if (z < .333) {
        return 'rock'
    }
    else if (z < .666) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

console.log(RPS())

function player(playerChoice) {
    let bot = RPS()
    if (playerChoice === 'rock' && bot === 'scissors') {
        console.log('You win')
    }
    else if (playerChoice === 'paper' && bot === 'rock') {
        console.log('You win')
    }
    else if (playerChoice === 'scissors' && bot === 'paper') {
        console.log('You win')
    }
    else if (playerChoice === bot) {
        console.log('Tie')
    }
    else console.log('You lose')
}

player(RPS())

function playGame(arr) {
    arr.forEach(x => {
        player(x)
    });
}
playGame(['rock','paper','scissors'])

let nums = [1,2,3,4,5,6]
console.log(nums.reduce((curVal, x) => curVal += x, 0))

console.log(nums.map(x => x**2))

function rvStr(str) {
    console.log(str.split('').reverse().join(''))
}
rvStr('PizzaPlanet')

function pali(str) {
    if (str === str.split('').reverse().join('')) {
        console.log('Passed')
    }
    else {
        console.log('Failed')
    }
}
pali('bob')
pali('alice')

let sentence = 'Hi there everyone.'
console.log(sentence.endsWith('?'))

let devStr = 'Lookin for jr. dev roles'
console.log(devStr.replaceAll('jr. dev', 'software engineer'))
