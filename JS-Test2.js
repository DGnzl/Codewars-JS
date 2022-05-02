function createBase(x) {
    return function(y) {
      return x * y;
    };
  }

var timesEight = createBase(8); 
console.log(timesEight(1)); // returns 8
console.log(timesEight(2)); // returns 16
console.log(timesEight(3)); // returns 24
console.log(timesEight(4)); // returns 32