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
//ReverseArray(arr)
//console.log(arr)

function ReversePhrase(str) {
    let words = []
    str.split(' ').forEach(x => {
        let temp = ''
        for (let i = 0; i < x.length; i++) {
            temp += x[x.length - 1 - i];
        }
        words.push(temp)
    })
    return words.join(' ')
}
//console.log(ReversePhrase('Should reverse words'))
//console.log(ReversePhrase(''))

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

function ransomNote(str) {
    let dict = {}
    magazine.replaceAll(',', '').split(' ').forEach(x => {
        if (!(x in dict)) {
            dict[x] = true
        }
    })
    let allWordsFound = true
    str.split(' ').forEach(x => {
        if (!(x in dict)) {
            allWordsFound = false
        }
    })
    return allWordsFound
}

//console.log(ransomNote('sit ad est sint in in')) //Pass
//console.log(ransomNote('fail')) //Fail

function ArrayPairs(arr, sum) {
    let ans = []
    let work = []
    for(let i = 0; i < arr.length; i++) {
        let rem = sum - arr[i]
        if (work.includes(rem)) {
            ans.push([arr[i], rem])
        }
        work.push(arr[i])
    }
    return ans
}

//console.log(ArrayPairs([1, 2, 2, 3, 4], 4))

function MaxProfit(arr) {
    let minPrice = Number.POSITIVE_INFINITY
    let profit = 0
    arr.forEach(x => (minPrice > x) ? minPrice = x : profit = Math.max(profit, x - minPrice))
    return profit
}

//console.log(MaxProfit([7,1,5,3,6,4]))
//console.log(MaxProfit([7,6,4,3,1]))

function MajorityElement(arr) {
    let dict = {}
    arr.forEach(x => (x in dict) ? dict[x] += 1 : dict[x] = 1)
    return Object.keys(dict).reduce((a,b) => dict[a] > dict[b] ? a : b)
}

//console.log(MajorityElement([3,2,3]))
//console.log(MajorityElement([2,2,1,1,1,2,2]))

function FindPairs(arr) {
    let ans = []
    for (let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                ans.push([i,j])
            }
        }
    }
    return ans.length
}

function FindPairs2(arr) {
    let map = {}
    let ans = 0
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] in map) {
            ans += map[arr[i]]
            map[arr[i]]++
        }
        else {
            map[arr[i]] = 1
        }
    }
    return ans
}

console.log(FindPairs2([1,2,3,1,1,3,1]))
console.log(FindPairs2([1,1,1,1]))