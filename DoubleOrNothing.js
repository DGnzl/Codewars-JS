function doubleOrNothing(cash, wager, losses){
  for(let i = 1; i < losses; i++) {
    wager *= 2
  }
  return wager <= cash ? cash - wager: "I'll pay you back later"
}