const uniqueInOrder = (iterable) => {
  let prevItem = null;
  const results = [];
  const iterableType = typeof iterable;
  const iterableList =
    iterableType === "string" ? iterable.split("") : iterable;

  iterableList.forEach((item) => {
    if (item !== prevItem) {
      prevItem = item;
      results.push(item);
    }
  });

  return results;
};

// Instructions:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
//   });
// });

// Submission:
// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((item, index, newData) => item !== newData[index -1]);
//   }
