const trunc = (str,num) => str.length <= num ? str : str.slice(0,num-1) + '…'

console.log(trunc('hello', 20))
console.log(trunc("What I'd like to tell on this topic is:", 20))