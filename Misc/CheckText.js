const checkForImposterSyndrome = (str) => 
  str.includes('not ready') 
  || str.includes("can't interview yet")

console.log(checkForImposterSyndrome("I'm not ready yet"))
console.log(checkForImposterSyndrome("I'm am sooo ready"))