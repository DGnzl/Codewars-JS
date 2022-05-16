function powersOfTwo(n){
    ans = [];
    for (let i = 0; i <= n; i++) {
      ans.push(2**i);
    }
    return ans;
  }