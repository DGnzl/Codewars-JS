function persistence(num) {
    let count = 0;
    while (num.toString().length != 1) {
        num = num.toString().split('').map(e => parseInt(e)).reduce((e,a) => e * a, 1);
        count++;
    }
    return count;
 }

 console.log(persistence(9));