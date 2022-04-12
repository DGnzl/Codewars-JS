function barista(coffees) {
  coffees.sort((a, b) => a - b);
  let wait = 0;
  for (let i = 0; i < coffees.length; i++) {
    wait += coffees[i] * (coffees.length - i) + 2 * i;
  }
  return wait;
}
