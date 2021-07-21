function kaprekarSplit(n){
    if (n == 1) return 0
    let num = (n ** 2).toString()
    for (let i = 1 ; i < num.length; i++) {
      if (parseInt(num.substring(0, i)) + parseInt(num.substring(i)) == n) {
        return i
      }
    }
    return -1
  }

Test.assertSimilar(kaprekarSplit(1), 0)
Test.assertSimilar(kaprekarSplit(9), 1)
Test.assertSimilar(kaprekarSplit(45), 2)
Test.assertSimilar(kaprekarSplit(2223), 3)
Test.assertSimilar(kaprekarSplit(5050), 4)
Test.assertSimilar(kaprekarSplit(5051), -1)