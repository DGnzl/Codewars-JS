function reverseWords(str) {
    let words = str.split(' ')
    for(let i = 0; i < words.length; i++) {
      words[i] = (words[i].split('').reverse().join(''))
    }
    return words.join(' ')
  }
