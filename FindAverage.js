function find_average(array) {
    if (array.length == 0) {
        return 0;
    }
    return array.reduce((e,a) => a + e) / array.length;
  }