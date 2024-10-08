const numerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

class RomanNumerals {
  static toRoman(num) {
    let results = "";
    const numsArray = Object.entries(numerals);

    for (let [key, value] of numsArray) {
      while (num >= value) {
        results += key;
        num -= value;
      }
    }

    return results;
  }

  static fromRoman(str) {
    let results = 0;
    const numeralSplit = str.split("");

    numeralSplit.forEach((char, index) => {
      const currentChar = numerals[char];
      const nextChar = numerals[numeralSplit[index + 1]];

      if (nextChar && currentChar < nextChar) {
        results += nextChar - currentChar;
        numeralSplit[index + 1] = "";
      } else if (currentChar !== undefined) {
        results += currentChar;
      }
    });

    return results;
  }
}

// Instructions:
// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

// 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
// 2008 is written as 2000=MM, 8=VIII; or MMVIII
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
//   86 -> "LXXXVI"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "LXXXVI"  ->   86
// "I"       ->    1
// Help
// +--------+-------+
// | Symbol | Value |
// +--------+-------+
// |    M   |  1000 |
// |   CM   |   900 |
// |    D   |   500 |
// |   CD   |   400 |
// |    C   |   100 |
// |   XC   |    90 |
// |    L   |    50 |
// |   XL   |    40 |
// |    X   |    10 |
// |   IX   |     9 |
// |    V   |     5 |
// |   IV   |     4 |
// |    I   |     1 |
// +--------+-------+

// Tests:
// describe("sample tests", () => {

//   const assert = require('chai').assert;

//   it("to", () => {
//     assert.strictEqual(RomanNumerals.toRoman(1000), 'M');
//     assert.strictEqual(RomanNumerals.toRoman(4), 'IV');
//     assert.strictEqual(RomanNumerals.toRoman(1), 'I');
//     assert.strictEqual(RomanNumerals.toRoman(1990), 'MCMXC');
//     assert.strictEqual(RomanNumerals.toRoman(2008), 'MMVIII');
//   });

//   it("from", () => {
//     assert.strictEqual(RomanNumerals.fromRoman('XXI'), 21);
//     assert.strictEqual(RomanNumerals.fromRoman('I'), 1);
//     assert.strictEqual(RomanNumerals.fromRoman('IV'), 4);
//     assert.strictEqual(RomanNumerals.fromRoman('MMVIII'), 2008);
//     assert.strictEqual(RomanNumerals.fromRoman('MDCLXVI'), 1666);
//   });
// });

// Submission:
// const romanNum =  [
//   { value: 1000, char: 'M' },
//   { value: 900, char: 'CM' },
//   { value: 500, char: 'D' },
//   { value: 400, char: 'CD' },
//   { value: 100, char: 'C' },
//   { value: 90, char: 'XC' },
//   { value: 50, char: 'L' },
//   { value: 40, char: 'XL' },
//   { value: 10, char: 'X' },
//   { value: 9, char: 'IX' },
//   { value: 5, char: 'V' },
//   { value: 4, char: 'IV' },
//   { value: 1, char: 'I' }
// ]

// class RomanNumerals {
//   constructor() {

//   }

//   static toRoman(num) {
//     return romanNum.reduce((result, current) => {
//       while (num >= current.value) {
//         result += current.char;
//         num -= current.value
//       }

//       return result
//     }, '')
//   }

//   static fromRoman(str) {
//     return romanNum.reduce((result, current) => {
//       while (!str.indexOf(current.char)) {
//         result += current.value;
//         str = str.replace(current.char, '')
//       }

//       return result
//     }, 0)
//   }
// }
