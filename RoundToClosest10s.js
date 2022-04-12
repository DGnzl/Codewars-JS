const closestMultiple10 = num => {
    num = parseInt(num);
    let remainder = num % 10;
    if (remainder > 4) {
      return num + (10 - remainder)
    }
    return num - remainder
  };

//   const closestMultiple10 = num => Math.round(num / 10) * 10;