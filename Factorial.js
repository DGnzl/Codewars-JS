function factorial(n) {
  if (n < 0 || n > 12) throw RangeError;
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
}
