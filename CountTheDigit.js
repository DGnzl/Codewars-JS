function nbDig(n, d) {
    k = [];
    for (let i = 0; i <= n; i++) {
        k.push(String(i * i));
    }
    let count = 0;
    for (let i = 0; i < k.length; i++) {
        z = k[i].split('');
        for(let j = 0; j < z.length; j++) {
            if (z[j] == d) {
                count++;
            }
        }
    }

    return count;
}

console.log(nbDig(25, 1));