function findOdd(A) {
    let o = {};
    for (let i = 0; i < A.length; i++) {
        if (o[A[i]]) {
            o[A[i]] ++;
        }
        else {
            o[A[i]] = 1;
        }
    }
    for(let i = 0; i < Object.keys(o).length; i++) {
        if (o[Object.keys(o)[i]] % 2) return Object.keys(o)[i];
    }
  }

  console.log(findOdd([0,1,0,1,0]))