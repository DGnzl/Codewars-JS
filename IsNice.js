function isNice(arr){
    for (let x = 0; x < arr.length; x++) {
      if(arr.includes(arr[x] + 1) == false && arr.includes(arr[x] - 1) == false) {
        return false;
      }
    }
    return true;
  }