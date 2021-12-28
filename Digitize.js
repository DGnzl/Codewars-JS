function digitize(n) {
    let ans = []
    do {
      ans.unshift(n % 10)
      n = Math.trunc(n / 10)
    }
    while (n > 0)
    return ans
  }

//One liner
function digitize(n) {
    return String(n).split('').map(Number);
  }