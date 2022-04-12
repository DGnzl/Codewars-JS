function stringy(size) {
    let ans = '';
    for (let i = 0; i < size; i++) {
      if (i % 2 == 0) {
        ans += 1;
      }
      else {
        ans += 0;
      }
    }
    return ans;
}