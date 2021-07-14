function duplicateCheck (words) {
    let ans = new Array()
    if (words.length == 0) return
    let _temp = words.split(' ')
    ans.push(_temp[0])
    for(let i = 1; i < _temp.length; i++) {
      if (_temp[i] != _temp[i - 1]) {
        ans.push(_temp[i])
      }
    }
  
    return ans
  }
  
  console.log(duplicateCheck('a a b c d a'))
  
  const removeCons = str => str.split(' ').filter( (e,i,arr) => e != arr[i-1] ).join(' ')
  
  console.log(removeCons('a a b c d a'))