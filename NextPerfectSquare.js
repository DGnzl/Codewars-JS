function findNextSquare(sq) {
    let x = 1;
    while (x**2 <= sq) {
        if (x**2 == sq) {
            return (x + 1)**2;
        }
        x++;
    }
    return -1;
  }

console.log(findNextSquare(121))