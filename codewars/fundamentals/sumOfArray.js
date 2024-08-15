const findAverage = (array) => {
  if (array.length === 0) return 0;
  else {
    let sum = 0
    array.forEach((num) => sum += num);
    
    return sum / array.length
  }
}

// Instructions:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(findAverage([1,1,1]), 1);
//     assert.strictEqual(findAverage([1,2,3]), 2);
//     assert.strictEqual(findAverage([1,2,3,4]), 2.5);
//   });
// });  


// Submission:
function find_average(array) {
  return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
}