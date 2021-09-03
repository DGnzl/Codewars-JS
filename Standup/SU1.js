function FizzBuzz(num) {
    for(let i = 1; i < num; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log('FizzBuzz')
        }
        else if (i % 2 === 0) {
            console.log('Fizz')
        }
        else if (i % 3 === 0) {
            console.log('Buzz')
        }
        else {
            console.log(i)
        }
    }
}
//FizzBuzz(12)

function ReverseString(str) {
    let _temp = ''
    for (let i = 1; i <= str.length; i++) {
        _temp += str[str.length - i]
    }
    return _temp
}
//console.log(ReverseString('Hello World'))

function Dictionary(str) {
    let dict = {}
    for(let i = 0; i < str.length; i++) {
        if (str[i] in dict) {
            dict[str[i]] += 1
        }
        else {
            dict[str[i]] = 1
        }
    }
    return Object.keys(dict).reduce((a,b) => dict[a] > dict[b] ? a : b)
}
//console.log(Dictionary('Hello World'))

function FindVowels(str) {
    const vowels = ['a','e','i','o','u']
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count
}
//console.log(FindVowels('count this whole thing'))

function ReverseArray(arr) {
    let temp = undefined
    for(let i = 0; i < arr.length / 2; i++) {
        temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
}
let arr = [1,2,3,4,5,6,'a',1.5]
ReverseArray(arr)
console.log(arr)

//Next is Aug 16