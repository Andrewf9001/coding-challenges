const findAverage = (array) => {
  if (array.length === 0) return 0;
  else {
    let sum = 0
    const getArraySum = array.forEach((num) => sum += num);
    
    return sum / array.length
  }
}