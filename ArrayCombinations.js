function solve(arr) {
    let ans = 1
    arr.forEach(element => ans *= new Set(element).size);
    return ans
    //return arr.reduce((accum, currentVal) => new Set(currentVal).size *= accum , 1)
  };