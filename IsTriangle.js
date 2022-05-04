function isTriangle(a,b,c) {
    let x = [a,b,c];
    x.sort();
    console.log(x);
    return x[0] + x[1] >= x[3];
}

isTriangle(7,2,2);