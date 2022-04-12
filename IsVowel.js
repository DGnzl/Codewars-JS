function vowelIndices(word){
    word = word.toLowerCase();
    let ans = [];
    const vowels = ['a','e','i','o','u','y'];
    for (let i = 0; i < word.length; i++) {
      if (vowels.indexOf(word[i]) != -1) {
          ans.push(i + 1);
      }
    }
    return ans;
  }