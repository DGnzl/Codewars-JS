function strCount(str, letter){  
  let count = 0;

  str.split('').map((x) => {
      if (x == letter) count++;
    })

  return count;
}