const isIsogram = (str) => {
  if (!str) return true;
  else {
    const lettersArray = str.toLowerCase().split("");
    const letters = {};
    let results = true;

    lettersArray.forEach((char) => {
      if (letters[char]) {
        results = false;
      } else {
        letters[char] = 1;
      }
    });

    return results;
  }
};

// Instructions
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual( isIsogram("Dermatoglyphics"), true );
//     assert.strictEqual( isIsogram("isogram"), true );
//     assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
//     assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
//     assert.strictEqual( isIsogram("isIsogram"), false );
//     assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//   });
// });

// Submission:
// function isIsogram (str) {
//   return !str || (str.length === new Set(str.toLowerCase()).size);
// }
