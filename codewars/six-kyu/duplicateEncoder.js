const duplicateEncode = (word) => {
  const charCounts = {};
  const lowerCaseWord = word.toLowerCase();
  let results = "";

  for (let char of lowerCaseWord) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  for (let char of lowerCaseWord) {
    results += charCounts[char] === 1 ? "(" : ")";
  }

  return results;
};

// Instructions:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Duplicate Encoder", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(duplicateEncode("din"),"(((");
//     assert.strictEqual(duplicateEncode("recede"),"()()()");
//     assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
//     assert.strictEqual(duplicateEncode("(( @"),"))((");
//   });
// });

// Submission:
// function duplicateEncode(word){
//     let map = {};
//     let characters = word.toLowerCase().split('');

//     characters.forEach(char => {
//       map[char] = map[char] ? ')' : '(';
//     });

//     return characters.map(char => map[char]).join('');
// }
