function deepCount(a){
    let sum = a.length;
    a.forEach(el => {
        if (Array.isArray(el)) {
            sum += deepCount(el);
        }
    });
    return sum;
  }

console.log(deepCount([1,2,[3]]));