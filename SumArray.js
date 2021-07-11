/*
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6
*/

console.log('Hello')
let x = [ 6, 2, 1, 8, 10 ]
console.log(x)
x.sort(function(a,b) {
  console.log(a - b)
  return a - b})
console.log(x)

function sumPart(arr) {
  //arr = arr.sort((a,b) => a - b)
  return arr.sort((a,b) => a - b).slice(1, -1).reduce( (a,c) => a + c)
}

console.log(sumPart([ 6, 2, 1, 8, 10 ]))