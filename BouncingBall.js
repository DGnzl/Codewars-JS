function bouncingBall(h,  bounce,  window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
      let ans = 1;
      h *= bounce;
      while (h > window) {
          h *= bounce;
          ans += 2;
      }
      return ans;
    }
    return -1;
  }