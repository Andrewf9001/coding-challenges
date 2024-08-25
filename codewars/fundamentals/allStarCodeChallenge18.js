const strCount = (str, letter) => {
  if (!str) return 0
  else {
    const splitStr = str.split("");
    let count = 0;
  
    splitStr.forEach((char) => {
      if (char === letter) {
        count++;
      }
    })
    
    return count;
  }
}