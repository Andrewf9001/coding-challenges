// const strCount = (str, letter) => {
//   if (!str) return 0
//   else {
//     const splitStr = str.split("");
//     let count = 0;
  
//     splitStr.forEach((char) => {
//       if (char === letter) {
//         count++;
//       }
//     })
    
//     return count;
//   }
// }

const strCount = (str, letter) => {
  let count = 0;
  
  if (!str) return count
  else {
    const splitStr = str.split("");
    splitStr.forEach((char) => char === letter && count++)
    
    return count;
  }
}

// Instructions:
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1


// Tests:
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(strCount('Hello', 'o'), 1);
//     assert.strictEqual(strCount('Hello', 'l'), 2);
//     assert.strictEqual(strCount('',      'z'), 0);
//   });
// });

// Submission:
// const strCount = (str, letter) => str.split(letter).length - 1;