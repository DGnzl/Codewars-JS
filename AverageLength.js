function averageLength() {
  let avg = 0;
  for (let i = 0; i < input.length; i++) {
    avg += input[i].length;
  }
  avg = Math.round(avg / input.length);
  return input.map((el) => el[0].repeat(avg));
}
