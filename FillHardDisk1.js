function save(sizes, hd) {
    var ans = 0;
    var currSize = 0;
    while (currSize <= hd) {
        if (currSize + sizes[0] <= hd) {
            ans += 1;
        }
        currSize += sizes.shift();
    }
    return ans;
  }