const capLetter = s => 
  s
    .split(' ')
    .map(el => {
      el[0].toUpperCase()
    })
    .join('')

console.log(capLetter('hello case'))
console.log(capLetter('hello case'), 'HelloCase')
console.log(capLetter('camel case word'), 'CamelCaseWord')