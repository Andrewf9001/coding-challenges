function isIsogram(str){
  if (!str) return true;
  else {
    const lettersArray = str.toLowerCase().split("")
    const letters = {}
    let results = true
    
    lettersArray.forEach((char) => {
      if (letters[char]) {
        letters[char]++
        results = false
      } else {
        letters[char] = 1
      }
    })
    
    return results
  }
}

// Instructions